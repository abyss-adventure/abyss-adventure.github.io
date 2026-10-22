import {chromium} from 'playwright';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
const browser=await chromium.launch();
try {
 const page=await browser.newPage({viewport:{width:390,height:844},reducedMotion:'reduce'});
 await page.goto(process.env.QA_URL||'http://127.0.0.1:4174/');
 await page.evaluate(async()=>{for(const img of document.images)img.loading='eager';await Promise.all([...document.images].map(img=>img.decode().catch(()=>{})))});
 // Warm dynamic image caches before comparing the retained JS heap.
 for(let i=0;i<12;i++){await page.locator('.system-select button').nth(i).evaluate(el=>el.click());await page.waitForTimeout(30);}
 const client=await page.context().newCDPSession(page);
 await client.send('HeapProfiler.collectGarbage');
 const before=await client.send('Runtime.getHeapUsage');
 const nodesBefore=await page.locator('*').count();
 for(let i=0;i<30;i++){
  for(const [selector,index] of [['.world-route button',i%10],['.class-select button',i%3],['.system-select button',i%12]]){
   await page.locator(selector).nth(index).evaluate(el=>el.click());await page.waitForTimeout(25);
  }
 }
 await client.send('HeapProfiler.collectGarbage');
 const after=await client.send('Runtime.getHeapUsage');
 const nodesAfter=await page.locator('*').count();
 assert.ok(after.usedSize<before.usedSize+5*1024*1024,'bounded retained JS heap after 90 selector actions');
 assert.ok(nodesAfter<nodesBefore+50,'no accumulating scene DOM');
 const result={viewport:[390,844],actions:90,before,after,nodesBefore,nodesAfter,heapGrowthBytes:after.usedSize-before.usedSize,passed:true,limits:'Short Chromium emulation with forced GC; does not certify long-running physical mobile memory or WebKit process memory.'};
 await fs.writeFile('reports/website2-memory.json',JSON.stringify(result,null,2)+'\n');console.log(result);
 const noJS=await browser.newContext({javaScriptEnabled:false});const p=await noJS.newPage();await p.goto(process.env.QA_URL||'http://127.0.0.1:4174/');assert.ok((await p.locator('noscript').innerText()).includes('1.0.0-open.2'));assert.ok((await p.locator('noscript a').getAttribute('href')).endsWith('Install-Fix.apk'));console.log('No-JavaScript fallback verified');await noJS.close();
}finally{await browser.close();}
