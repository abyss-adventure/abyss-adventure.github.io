import {chromium,webkit} from 'playwright';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
const url=process.env.QA_URL||'http://127.0.0.1:4174/';
const results=[];
for(const kind of ['chrome','webkit']){
 const browser=kind==='chrome'?await chromium.launch({channel:'chrome',headless:true}):await webkit.launch({headless:true});
 for(const [name,width,height] of [['desktop',1440,1000],['iphone',390,844],['android',412,915],['small',320,720]]){
 console.log('QA',kind,name);const context=await browser.newContext({viewport:{width,height},hasTouch:width<500,isMobile:width<500,reducedMotion:name==='small'?'reduce':'no-preference'});
 const p=await context.newPage();const errors=[];const failed=[];
 p.on('pageerror',e=>errors.push(e.message));p.on('response',r=>{if(r.status()>=400)failed.push(`${r.status()} ${r.url()}`)});
 const response=await p.goto(url);assert.equal(response.status(),200);await p.evaluate(()=>document.fonts.ready);
 assert.equal(await p.locator('h1').innerText(),'ABYSS\nADVENTURE');
 assert.equal(await p.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false,'initial overflow');
 await p.getByRole('button',{name:'Switch to Tiếng Việt'}).click();assert.equal(await p.locator('html').getAttribute('lang'),'vi');
 await p.reload();assert.equal(await p.locator('html').getAttribute('lang'),'vi');
 await p.getByRole('button',{name:'Lament Mine',exact:true}).click();assert.equal(await p.locator('.world-caption h3').innerText(),'Lament Mine');
 await p.getByRole('button',{name:'Mage',exact:true}).click();assert.equal(await p.locator('.class-detail h3').innerText(),'Necromancer');
 await p.getByRole('button',{name:'Ashspirit Bronze Staff',exact:true}).click();assert.equal(await p.locator('.gear-info h3').innerText(),'Ashspirit Bronze Staff');
 await p.locator('.system-select').evaluate(e=>window.scrollTo({top:e.getBoundingClientRect().top+scrollY-200,behavior:'instant'}));await p.waitForTimeout(250);if(width<500)await p.getByRole('button',{name:'Raid',exact:true}).tap();else await p.getByRole('button',{name:'Raid',exact:true}).click();await p.waitForFunction(()=>document.querySelector('.system-copy').textContent.includes('The Drowned Regent'));assert.ok((await p.locator('.system-copy').innerText()).includes('The Drowned Regent'));
 for(const id of ['world','creator','characters','systems','download']){await p.locator('#'+id).scrollIntoViewIfNeeded();await p.waitForTimeout(300);assert.equal(await p.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false,`${id} overflow`)}
 const apk=await p.locator('.primary-download').getAttribute('href');assert.ok(apk.endsWith('d0bcd5a-PhiTest.apk'));assert.equal(await p.locator('a[href$=".ipa"]').count(),0);
 await p.locator('.technical summary').click();assert.ok((await p.locator('.technical').innerText()).includes('916108e500cf96e436efad29bb31a96c1164faa4f490fc7cdf4aad5f6cb47933'));
 assert.equal(await p.locator('.creator-notebook').count(),0);
 await p.evaluate(()=>window.scrollTo({top:0,behavior:'instant'}));await p.waitForTimeout(200);
 await p.getByRole('button',{name:'Switch to English'}).click();assert.equal(await p.locator('html').getAttribute('lang'),'en');
 if(name==='iphone'){await p.getByRole('button',{name:'Sound off',exact:true}).click();await p.waitForTimeout(1300);assert.equal(await p.locator('.sound').getAttribute('aria-pressed'),'true');await p.locator('.sound').click();assert.equal(await p.locator('.sound').getAttribute('aria-pressed'),'false');await p.setViewportSize({width:844,height:390});assert.equal(await p.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false,'landscape overflow');}
 assert.deepEqual(errors,[],'runtime errors');assert.deepEqual(failed,[],'resource failures');
 results.push({browser:kind,viewport:name,passed:true,runtimeErrors:errors,failedResources:failed});await context.close();
 }
 await browser.close();
}
await fs.writeFile('reports/runtime-qa.json',JSON.stringify(results,null,2));console.log(JSON.stringify(results,null,2));
