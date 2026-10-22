import fs from 'node:fs';
import assert from 'node:assert/strict';
import ts from 'typescript';
const load = async (file) => import(`data:text/javascript;base64,${Buffer.from(ts.transpile(fs.readFileSync(file,'utf8'),{module:ts.ModuleKind.ES2022,target:ts.ScriptTarget.ES2022})).toString('base64')}`);
const {copy,release,downloadUrl,releaseUrl}=await load('src/content.ts');
// game-guide imports its source reference; validate the data through TypeScript checking and the committed reference below.
const canon=JSON.parse(fs.readFileSync('public/game-reference.json','utf8'));
const app=fs.readFileSync('src/App.tsx','utf8'), guide=fs.readFileSync('src/game-guide.ts','utf8');
const dims=JSON.parse(fs.readFileSync('src/image-dimensions.json','utf8'));
let checks=0;function check(condition,message){assert.ok(condition,message);checks++;}
function parity(a,b,path='copy'){check(typeof a===typeof b,`${path}: type mismatch`);if(a&&typeof a==='object'){check(JSON.stringify(Object.keys(a))===JSON.stringify(Object.keys(b)),`${path}: key mismatch`);for(const key of Object.keys(a))parity(a[key],b[key],`${path}.${key}`);}else check(typeof b==='string'&&b.trim().length>0,`${path}: empty translation`);}
parity(copy.en,copy.vi);
for(const lang of ['en','vi']){
 check(copy[lang].worlds.length===10,'ten world maps');
 check(copy[lang].systems.length===12,'all current system presentations');
 copy[lang].worlds.forEach((m,i)=>check(m.name===canon.mapNames[i]&&m.index===String(i+1).padStart(2,'0'),'canonical map order'));
 for(const section of ['worlds','classes','gear','systems'])for(const item of copy[lang][section]){check(fs.existsSync(`public/media/${item.image}.webp`),`${item.image}: missing media`);check(dims[item.image]?.length===2,`${item.image}: dimensions missing`);}
 check(!/×50|50,000|50\.000|Test Tools enabled|có bật Công cụ/.test(copy[lang].previewNote),'no obsolete QA release claims');
}
for(const section of ['worlds','classes','gear'])copy.en[section].forEach((m,i)=>check(m.name===copy.vi[section][i].name,`canonical ${section} names`));
for(const row of JSON.parse(fs.readFileSync('public/asset-inventory.json','utf8')))check(fs.existsSync(`public/media/${row.name}.webp`),`inventory ${row.name} missing`);
check(release.version==='1.0.0-open.2'&&release.build===66,'approved Open Beta version');
check(release.commit==='6e35a4221a27916aae0599a9cd00645f3d48ee20','approved release commit');
check(release.sha256==='6aafc09b594883db9b5ea09f10b757d5a08d527cab81963870a891eab38e66ee','approved APK checksum');
check(release.bytes===267688710,'approved byte size');
check(release.packageId==='com.nah.abyssadventure.beta'&&release.minimumApi===24,'approved Android package and API');
check(release.filename==='Abyss-Adventure-Open-Beta-v1.0-Install-Fix.apk','approved APK filename');
check(release.tag==='open-beta-v1.0-android-install-fix1','approved release tag');
check(release.repository==='https://github.com/abyss-adventure/abyss-adventure.github.io','public official download mirror');
check(release.upstreamRepository==='https://github.com/haohao2766-sudo/ABYSS-ADVENTURE','authoritative private upstream is preserved');
check(downloadUrl===`${release.repository}/releases/download/${release.tag}/${release.filename}`,'direct APK target');
check(releaseUrl.endsWith(release.tag),'release notes target');
check(canon.classPaths.length===12,'12 approved full class paths');
for(const base of ['Warrior','Mage','Rogue'])check(canon.classPaths.filter(p=>p[0]===base).length===4,`${base} paths`);
for(const skill of canon.signatureSkills)check(guide.includes(skill)||copy.en.classes.some(c=>c.skill===skill),`${skill}: verified displayed skill`);
check(copy.en.creatorLine==='Original game concept & creative direction by Phi Nguyễn.','original game attribution');
check(copy.en.websiteCreditName==='Henry Parker (Nguyen Manh Tuan Hưng)','website credit');
check(!app.includes('autoplay'),'no autoplay');
check(!app.includes('name="game-world"')&&!app.includes('name="game-inventory"')&&!app.includes('name="game-raid"'),'no old QA captures rendered');
const built=fs.readFileSync('dist/index.html','utf8');
check(built.includes('/assets/')&&!built.includes('/abyss-adventure/assets/'),'root Pages paths');
check(built.includes('https://abyss-adventure.github.io/'),'official canonical');
check(built.includes(downloadUrl),'no-JavaScript direct APK link');
check(!built.includes('android-1.2.1-62-phi-qa'),'no obsolete no-JS link');
check(built.includes(release.sha256),'no-JavaScript checksum');
const schema=JSON.parse(built.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
check(schema.creator.name==='Phi Nguyễn'&&schema.contributor.name==='Henry Parker','structured attribution');
check(schema.softwareVersion===release.version&&schema.downloadUrl===downloadUrl,'structured release metadata');
check(built.includes('lang="en"')&&built.includes('lang="vi"'),'bilingual fallback');
console.log(`${checks} content, canon, asset and release checks passed`);
