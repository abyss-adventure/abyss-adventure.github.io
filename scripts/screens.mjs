import {chromium} from 'playwright';
const browser=await chromium.launch({headless:true,channel:"chrome"});
for(const [name,width,height] of [['desktop',1440,1000],['mobile',390,844]]){
 const p=await browser.newPage({viewport:{width,height},deviceScaleFactor:1});
 await p.goto('http://127.0.0.1:4173/');await p.evaluate(()=>document.fonts.ready);await p.waitForTimeout(1000);
 await p.screenshot({path:`reports/${name}-hero.png`});
 for(const id of ['world','creator','characters','systems','download']){await p.locator('#'+id).scrollIntoViewIfNeeded();await p.waitForTimeout(1300);await p.screenshot({path:`reports/${name}-${id}.png`});}
 await p.close();
}
await browser.close();
