// Read-only import from the SHA-256 verified Open Beta APK's assets/public payload.
// Production builds consume committed derivatives and do not need the source APK.
import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import sharp from 'sharp';
const source = process.env.GAME_WEB_DIR;
if (!source) throw new Error('Set GAME_WEB_DIR to the verified APK assets/public extraction');
const inventory = JSON.parse(await fs.readFile('public/asset-inventory.json', 'utf8'));
const dimensions = JSON.parse(await fs.readFile('src/image-dimensions.json', 'utf8'));
const commit = '6e35a4221a27916aae0599a9cd00645f3d48ee20';
const apkSha256 = '6aafc09b594883db9b5ea09f10b757d5a08d527cab81963870a891eab38e66ee';
const imports = Array.from({length:10}, (_,i)=>[`map-${String(i+1).padStart(2,'0')}`,`art/backgrounds/map${String(i+1).padStart(2,'0')}.webp.webp`]);
for (const c of ['warrior','mage','rogue','guardian','necromancer','assassin']) imports.push([`beta-${c}`,`art/newstyle/${c}.png.webp`]);
for (const [name,file] of [['crimson-gate','summon-crimson-gate.jpg.webp'],['crucible','forge-runebound-crucible.jpg.webp'],['ember-forge','upgrade-amber-loren.jpg.webp'],['awakening','evolution-awakening.jpg.webp']]) imports.push([name,`art/scenes/${file}`]);
for (const name of ['world','party','inventory','craft','quest','combat','summon']) imports.push([`beta-${name}`,`capture:beta-${name}.png`]);
for (const [name,relative] of imports) {
  const capture = relative.startsWith('capture:');
  const file = capture ? path.join(process.env.CAPTURE_DIR ?? '',relative.slice(8)) : path.join(source,relative);
  const input=await fs.readFile(file);
  const result=await sharp(input).resize({width:capture?780:1600,withoutEnlargement:true}).webp({quality:85,effort:5}).toBuffer({resolveWithObject:true});
  await fs.writeFile(`public/media/${name}.webp`,result.data);
  dimensions[name]=[result.info.width,result.info.height];
  const record={name,source:capture?`Verified APK web payload, fresh-save browser capture: ${relative.slice(8)}`:`releases/open-beta-v1.0/web/${relative}`,kind:capture?'Current Open Beta browser capture; no injected state; not a physical Android capture':'Approved current game artwork, web derivative',commit,apkSha256,sourceSha256:crypto.createHash('sha256').update(input).digest('hex'),width:result.info.width,height:result.info.height,bytes:result.data.length,transformation:'Aspect-preserving resize, WebP quality 85; no cropping or retouching'};
  const index=inventory.findIndex(a=>a.name===name);if(index<0)inventory.push(record);else inventory[index]=record;
  if(name.startsWith('map-')){
    const small=await sharp(input).resize({width:800,withoutEnlargement:true}).webp({quality:80}).toBuffer({resolveWithObject:true});
    await fs.writeFile(`public/media/${name}-small.webp`,small.data);dimensions[name+'-small']=[small.info.width,small.info.height];
    const si=inventory.findIndex(a=>a.name===name+'-small'), sr={...record,name:name+'-small',width:small.info.width,height:small.info.height,bytes:small.data.length,transformation:'Aspect-preserving resize to at most 800px, WebP quality 80; no cropping or retouching'};if(si<0)inventory.push(sr);else inventory[si]=sr;
  }
}
await fs.writeFile('public/asset-inventory.json',JSON.stringify(inventory,null,2)+'\n');
await fs.writeFile('src/image-dimensions.json',JSON.stringify(dimensions,null,2)+'\n');
console.log('Imported',imports.length,'current approved assets/captures and 10 responsive map variants');
