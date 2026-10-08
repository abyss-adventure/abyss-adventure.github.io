import sharp from 'sharp';
import fs from 'node:fs/promises';
import path from 'node:path';
const root=process.env.GAME_SOURCE;
if(!root)throw new Error('Set GAME_SOURCE to the approved game checkout. This optional tool is not needed to build the website.');
const chosen={
 'ruins':'art/backgrounds/abyss-ruins-B.png','loading':'art/backgrounds/loading-B.png',
 'forest':'art/backgrounds/map01.webp','mine':'art/backgrounds/map05.webp','abyss':'art/backgrounds/map10.webp',
 'forge':'art/backgrounds/forge.webp','logo':'art/title-logo.png','icon':'art/launcher-icon.png',
 'warrior':'art/classes/warrior.png','mage':'art/classes/mage.png','rogue':'art/classes/rogue.png',
 'guardian':'art/classes/guardian.png','necromancer':'art/classes/necromancer.png','assassin':'art/classes/assassin.png',
 'regent':'art/raid/drowned-regent.png','chainlord':'art/raid/chainbound-tomb-lord.png','raid':'art/raid/map-1.png',
 'sword':'art/items/eq_ashfall_bronze_sword.png','staff':'art/items/eq_ashspirit_bronze_staff.png','bow':'art/items/eq_ashveil_bronze_bow.png',
 'explore':'art/explore/ice-background.png'};
const inventory=[]; const tiles=[];
for (const [name,rel] of Object.entries(chosen)) {
 const input=path.join(root,'public',rel); const meta=await sharp(input).metadata();
 await sharp(input).resize({width:1600,height:1600,fit:'inside',withoutEnlargement:true}).webp({quality:84}).toFile(`public/media/${name}.webp`);
 if(['ruins','forest','mine','abyss','raid'].includes(name)) await sharp(input).resize({width:800,height:800,fit:'inside',withoutEnlargement:true}).webp({quality:80}).toFile(`public/media/${name}-small.webp`);
 inventory.push({name,source:rel,kind:'original game artwork, optimized copy',width:meta.width,height:meta.height,bytes:(await fs.stat(`public/media/${name}.webp`)).size});
 const tile=await sharp(input).resize(230,200,{fit:'contain',background:'#11151a'}).extend({bottom:30,background:'#11151a'}).composite([{input:Buffer.from(`<svg width="230" height="230"><text x="10" y="222" fill="white" font-size="14">${name}</text></svg>`)}]).png().toBuffer();tiles.push({input:tile,left:(tiles.length%5)*230,top:Math.floor(tiles.length/5)*230});
}
await sharp({create:{width:1150,height:Math.ceil(tiles.length/5)*230,channels:3,background:'#11151a'}}).composite(tiles).png().toFile('reports/art-contact.png');
for(const [name,filename] of Object.entries({'game-world':'android-api35-pushed-commit-final.png','game-inventory':'android-api35-inventory-test.png','game-raid':'android-api35-raid-combat-test.png'})) {
 const input=path.join(root,'reports/qa-evidence',filename);await sharp(input).resize({width:900,withoutEnlargement:true}).webp({quality:86}).toFile(`public/media/${name}.webp`);
 inventory.push({name,source:`reports/qa-evidence/${filename}`,kind:'actual Android test-build capture',bytes:(await fs.stat(`public/media/${name}.webp`)).size});
}
await fs.copyFile(path.join(root,'public/audio/abyss-dungeon-air-loop.mp3'),'public/media/ambience.mp3');
await fs.writeFile('public/asset-inventory.json',JSON.stringify(inventory,null,2));
