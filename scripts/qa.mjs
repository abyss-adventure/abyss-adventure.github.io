import { chromium, webkit } from 'playwright';
import AxeBuilder from '@axe-core/playwright';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
const url=process.env.QA_URL||'http://127.0.0.1:4174/';
const live=process.env.LIVE_QA==='1';
const viewports=live?[[390,844],[1440,900]]:[[360,800],[390,844],[768,1024],[1440,900]];
const output='output/playwright/website2';await fs.mkdir(output,{recursive:true});
const results=[];const accessibility=[];
const sha='6aafc09b594883db9b5ea09f10b757d5a08d527cab81963870a891eab38e66ee';
const apk='https://github.com/abyss-adventure/abyss-adventure.github.io/releases/download/open-beta-v1.0-android-install-fix1/Abyss-Adventure-Open-Beta-v1.0-Install-Fix.apk';
for (const [engine,type] of [['chromium',chromium],['webkit',webkit]]) {
 const browser=await type.launch({headless:true});
 try {for(const [width,height] of viewports){
  const context=await browser.newContext({viewport:{width,height},reducedMotion:'reduce',hasTouch:width<500,isMobile:width<500});
  const page=await context.newPage();const errors=[],failed=[];
  page.on('pageerror',e=>errors.push(e.message));page.on('response',r=>{if(r.status()>=400)failed.push(`${r.status()} ${r.url()}`)});
  await page.addInitScript(()=>{window.__cls=0;window.__lcp=0;try{new PerformanceObserver(list=>list.getEntries().forEach(e=>{if(!e.hadRecentInput)window.__cls+=e.value})).observe({type:'layout-shift',buffered:true});new PerformanceObserver(list=>window.__lcp=list.getEntries().at(-1)?.startTime||0).observe({type:'largest-contentful-paint',buffered:true})}catch{}});
  assert.equal((await page.goto(url)).status(),200);await page.evaluate(()=>document.fonts.ready);
  await page.locator('.hero-environment').evaluate(img=>img.decode());
  assert.equal((await page.locator('h1').innerText()).replace(/\s/g,''),'ABYSSADVENTURE');
  const initial=await page.evaluate(()=>({nodes:document.querySelectorAll('*').length,cls:window.__cls,lcpMs:window.__lcp,transferBytes:performance.getEntriesByType('resource').reduce((n,r)=>n+r.transferSize,0)}));
  if(!live&&engine==='chromium')await page.screenshot({path:`${output}/after-${width}-hero.png`});
  for(let i=0;i<10;i++){await page.locator('.world-route button').nth(i).click();assert.equal(await page.locator('.world-caption h3').innerText(),await page.locator('.world-route button').nth(i).getAttribute('aria-label'));}
  await page.getByRole('button',{name:'Next map',exact:true}).click();assert.ok((await page.locator('.world-caption h3').innerText()).includes('Ashwood'));
  await page.getByRole('button',{name:'Previous map',exact:true}).click();assert.ok((await page.locator('.world-caption h3').innerText()).includes('Soul-Devouring'));
  for(const [i,base,advanced] of [[0,'Warrior','Guardian'],[1,'Mage','Necromancer'],[2,'Rogue','Assassin']]){
   await page.locator('.class-select button').nth(i).click();await page.getByRole('button',{name:'Starting class',exact:true}).click();assert.equal(await page.locator('.class-detail h3').innerText(),base);
   await page.getByRole('button',{name:'Advanced spotlight',exact:true}).click();assert.equal(await page.locator('.class-detail h3').innerText(),advanced);
  }
  await page.locator('.class-paths summary').click();assert.equal(await page.locator('.path-list ol').count(),4);
  await page.getByRole('button',{name:'Mage',exact:true}).click();assert.ok((await page.locator('.path-list').innerText()).includes('Devil Lich'));
  for(let i=0;i<8;i++){await page.locator('.guide-steps button').nth(i).click();assert.equal(await page.locator('.guide-copy h3').innerText(),await page.locator('.guide-steps button').nth(i).innerText().then(t=>t.replace(/^\d+\s*/,'')));}
  await page.locator('.guide-copy button').click();assert.equal(await page.locator('.guide-steps button[aria-pressed="true"] span').innerText(),'01');
  await page.getByRole('button',{name:'Ashspirit Bronze Staff',exact:true}).click();assert.equal(await page.locator('.gear-info h3').innerText(),'Ashspirit Bronze Staff');
  for(let i=0;i<12;i++){await page.locator('.system-select button').nth(i).click();await page.locator('.system-stage>img').evaluate(img=>img.decode());assert.equal(await page.locator('.system-select button').nth(i).getAttribute('aria-pressed'),'true');}
  const nodeAfter=await page.locator('*').count();assert.ok(nodeAfter<initial.nodes+120,'bounded DOM during selector navigation');
  for(const id of ['world','characters','how-to-play','systems','download']){
   await page.locator('#'+id).evaluate(e=>e.scrollIntoView({block:'start',behavior:'instant'}));
   assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false,`${engine} ${width}: ${id} has no horizontal overflow`);
   if(!live&&engine==='chromium')await page.screenshot({path:`${output}/after-${width}-${id}.png`});
  }
  await page.locator('.technical summary').click();const technical=await page.locator('.technical').innerText();assert.ok(technical.includes(sha)&&technical.includes('com.nah.abyssadventure.beta')&&technical.includes('66'));
  assert.equal(await page.locator('.primary-download').getAttribute('href'),apk);assert.equal(await page.locator('a[href$=".ipa"]').count(),0);
  await page.locator('#how-to-play').evaluate(e=>e.scrollIntoView({block:'start',behavior:'instant'}));
  await page.locator('.language').click();assert.equal(await page.locator('html').getAttribute('lang'),'vi');
  assert.ok((await page.locator('#guide-title').innerText()).includes('Những bước'));assert.equal(await page.locator('.class-detail h3').innerText(),'Necromancer');assert.ok((await page.locator('.system-copy h3').innerText()).includes('giao ước'));
  assert.ok((await page.locator('.preview-note').innerText()).includes('không có Công cụ kiểm thử QA'));
  assert.ok(Math.abs(await page.locator('#how-to-play').evaluate(e=>e.getBoundingClientRect().top))<height,'language switch retains current section');
  await page.reload();assert.equal(await page.locator('html').getAttribute('lang'),'vi');
  await page.locator('.language').focus();await page.keyboard.press('Enter');assert.equal(await page.locator('html').getAttribute('lang'),'en','keyboard activates language');
  await page.getByRole('button',{name:'Mage',exact:true}).focus();await page.keyboard.press('Enter');assert.equal(await page.locator('.class-detail h3').innerText(),'Mage','keyboard activates class choice');
  if(engine==='chromium'&&(width===390||width===1440)){
   await page.evaluate(async()=>{for(const img of document.images)img.loading='eager';await Promise.all([...document.images].map(i=>i.decode().catch(()=>{})))});
   for(const lang of ['en','vi']){if(lang==='vi')await page.locator('.language').click();const axe=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze();accessibility.push({engine,width,lang,violations:axe.violations.length});assert.deepEqual(axe.violations.map(v=>({id:v.id,nodes:v.nodes.map(n=>n.target)})),[],`${width} ${lang}: Axe WCAG A/AA`);}
  }
  assert.deepEqual(errors,[],'runtime errors');assert.deepEqual(failed,[],'failed resources');
  results.push({engine,width,height,passed:true,checks:['ten maps','six class spotlights','four paths per family','eight guide steps','equipment selection','twelve systems','EN/VI selection and persistence','keyboard','download metadata','no overflow','no runtime or asset errors'],initial,finalNodes:nodeAfter,physicalDevice:false});
  console.log('PASS',engine,`${width}x${height}`);await context.close();
 }} finally {await browser.close();}
}
await fs.writeFile(live?'reports/website2-live-qa.json':'reports/website2-qa.json',JSON.stringify({url,results,accessibility},null,2)+'\n');
// Verify opt-in audio and actual scroll-driven motion separately from reduced-motion functional checks.
const browser=await chromium.launch();try{const p=await browser.newPage({viewport:{width:1440,height:900},reducedMotion:'no-preference'});await p.goto(url);await p.evaluate(()=>document.fonts.ready);assert.equal(await p.locator('.sound').getAttribute('aria-pressed'),'false');await p.locator('.sound').click();await p.waitForFunction(()=>document.querySelector('.sound').getAttribute('aria-pressed')==='true');assert.equal(await p.locator('.sound').getAttribute('aria-pressed'),'true');await p.locator('.language').click();assert.equal(await p.locator('.sound').getAttribute('aria-pressed'),'true');await p.locator('.sound').click();const before=await p.locator('.hero-title').evaluate(e=>getComputedStyle(e).transform);await p.evaluate(()=>window.scrollTo({top:500,behavior:'instant'}));await p.waitForTimeout(1200);const after=await p.locator('.hero-title').evaluate(e=>getComputedStyle(e).transform);assert.notEqual(before,after,'native scroll drives the opening');await p.goto(url+'#how-to-play');await p.waitForFunction(()=>Math.abs(document.querySelector('#how-to-play').getBoundingClientRect().top)<500);results.push({motion:true,optInAudio:true,languageKeepsAudio:true,deepLink:true});}finally{await browser.close();}
await fs.writeFile(live?'reports/website2-live-qa.json':'reports/website2-qa.json',JSON.stringify({url,results,accessibility},null,2)+'\n');
console.log(`Verified ${results.length-1} browser/viewport combinations plus motion, audio and deep links`);
