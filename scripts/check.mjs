import fs from 'node:fs';
import assert from 'node:assert/strict';
import ts from 'typescript';
const source=fs.readFileSync('src/content.ts','utf8');
const appSource=fs.readFileSync('src/App.tsx','utf8');
const js=ts.transpile(source,{module:ts.ModuleKind.ES2022,target:ts.ScriptTarget.ES2022});
const {copy,release,downloadUrl,creatorPlaceholders}=await import(`data:text/javascript;base64,${Buffer.from(js).toString('base64')}`);
let checks=0;function check(condition,message){assert.ok(condition,message);checks++}
function parity(a,b,path='copy'){check(typeof a===typeof b,`${path}: type mismatch`);if(typeof a==='object'){check(JSON.stringify(Object.keys(a))===JSON.stringify(Object.keys(b)),`${path}: key mismatch`);for(const key of Object.keys(a))parity(a[key],b[key],path+'.'+key)}else check(typeof b==='string'&&b.length>0,`${path}: empty translation`)}
parity(copy.en,copy.vi);
for(const section of ['worlds','classes','gear'])copy.en[section].forEach((item,i)=>{check(item.name===copy.vi[section][i].name,`${section}: canonical name changed`);check(fs.existsSync(`public/media/${item.image}.webp`),`${item.image}: missing asset`)});
for(const entry of JSON.parse(fs.readFileSync('public/asset-inventory.json'))){check(fs.existsSync(`public/media/${entry.name}.webp`),`inventory ${entry.name} missing`)}
check(release.commit==='d0bcd5a07f11482c97591deda95357090efb358e','candidate changed');check(release.sha256==='916108e500cf96e436efad29bb31a96c1164faa4f490fc7cdf4aad5f6cb47933','checksum changed');check(downloadUrl.includes(release.filename),'release URL');check(creatorPlaceholders.length===4,'creator placeholders');
check(!appSource.includes('autoplay'),'no autoplay');check(!downloadUrl.endsWith('.ipa'),'no public IPA');
for(const key of ['mainNavigation','switchToVietnamese','switchToEnglish','excerpt','commitLabel'])check(source.includes(`${key}:`)&&appSource.includes(`t.${key}`),`centralized localized UI string: ${key}`);
check(!appSource.includes('"Main navigation"')&&!appSource.includes('"Điều hướng chính"'),'navigation label comes from catalog');check(!appSource.includes('"excerpt"')&&!appSource.includes('"trích đoạn"'),'excerpt label comes from catalog');check(!appSource.includes('<dt>Commit</dt>'),'commit label comes from catalog');
const built=fs.readFileSync('dist/index.html','utf8');check(built.includes('/assets/'),'Pages root asset paths');check(built.includes('application/ld+json'),'JSON-LD');check(release.repository==='https://github.com/abyss-adventure/abyss-adventure.github.io','organization release owner');check(built.includes('https://abyss-adventure.github.io/'),'organization canonical URL');check(!built.includes('henryparker37-vip.github.io/abyss-adventure'),'no previous canonical URL');check(!built.includes('/abyss-adventure/assets/'),'no project Pages asset prefix');check(!built.includes('/abyss-adventure/media/'),'no project Pages media prefix');
console.log(`${checks} checks passed`);
