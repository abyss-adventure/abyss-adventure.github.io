import {chromium} from 'playwright';import AxeBuilder from '@axe-core/playwright';import fs from 'node:fs/promises';
const b=await chromium.launch({channel:'chrome'});const output=[];
for(const [lang,width] of [['en',1440],['vi',390]]){
 const context=await b.newContext({viewport:{width,height:900},reducedMotion:'reduce'});const p=await context.newPage();await p.goto('http://127.0.0.1:4174/abyss-adventure/');if(lang==='vi')await p.getByRole('button',{name:'Switch to Tiếng Việt'}).click();
 await p.evaluate(async()=>{await document.fonts.ready;const imgs=[...document.images];for(const i of imgs)i.loading='eager';await Promise.all(imgs.map(i=>i.decode().catch(()=>{})))});
 const r=await new AxeBuilder({page:p}).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze();output.push({lang,width,violations:r.violations});await context.close();
}
await fs.writeFile('reports/accessibility.json',JSON.stringify(output,null,2));console.log(output.map(x=>({lang:x.lang,violations:x.violations.map(v=>({id:v.id,impact:v.impact,nodes:v.nodes.map(n=>n.target)}))})));await b.close();
