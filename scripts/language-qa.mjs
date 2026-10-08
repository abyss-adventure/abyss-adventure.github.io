import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import { chromium } from 'playwright';

const browser = await chromium.launch({ channel: 'chrome' });
const results = [];
const baseUrl = process.env.LANGUAGE_QA_URL ?? 'http://127.0.0.1:4174/';
try {
  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 }, hasTouch: true });
  const page = await context.newPage();
  await page.addInitScript(() => {
    const NativeAudio = window.Audio;
    window.Audio = new Proxy(NativeAudio, {
      construct(target, args) {
        const audio = Reflect.construct(target, args);
        window.__abyssAmbience = audio;
        return audio;
      },
    });
  });
  await page.goto(baseUrl);
  await page.evaluate(() => document.fonts.ready);
  await page.getByRole('button', { name: 'Switch to Tiếng Việt' }).waitFor();

  await page.getByRole('button', { name: 'Lament Mine' }).click();
  assert.equal(await page.locator('.world-caption h3').innerText(), 'Lament Mine');
  await page.getByRole('button', { name: 'Raid', exact: true }).click();
  assert.ok((await page.locator('.system-copy').innerText()).includes('The Drowned Regent'));
  await page.locator('#systems').evaluate((el) => window.scrollTo({ top: el.getBoundingClientRect().top + scrollY - 240, behavior: 'instant' }));
  await page.waitForTimeout(350);
  const beforeSwitch = await page.evaluate(() => {
    const style = getComputedStyle(document.querySelector('.hero-title'));
    const matrix = new DOMMatrixReadOnly(style.transform);
    return { scrollY, lang: document.documentElement.lang, languageRect: document.querySelector('.language').getBoundingClientRect().toJSON(), heroOpacity: Number(style.opacity), heroTransform: [matrix.a, matrix.b, matrix.c, matrix.d, matrix.e, matrix.f] };
  });
  await page.getByRole('button', { name: 'Switch to Tiếng Việt' }).click();
  assert.equal(await page.evaluate(() => document.documentElement.lang), 'vi');
  assert.equal(await page.evaluate(() => localStorage.getItem('abyss-site-language')), 'vi');
  const afterViScroll = await page.evaluate(() => scrollY);
  assert.ok(Math.abs(afterViScroll - beforeSwitch.scrollY) <= 1, 'EN to VI preserves scroll position');
  assert.equal(await page.locator('.world-caption h3').innerText(), 'Lament Mine');
  assert.ok((await page.locator('.system-copy').innerText()).includes('The Drowned Regent'));
  assert.ok((await page.locator('.system-copy').innerText()).includes('Tiến vào'), 'generic Raid explanation is translated');
  const languageRectAfter = await page.locator('.language').evaluate((el) => el.getBoundingClientRect().toJSON());
  for (const edge of ['x', 'y', 'width', 'height']) assert.ok(Math.abs(languageRectAfter[edge] - beforeSwitch.languageRect[edge]) <= 1, `language control ${edge} remains stable`);
  const afterHero = await page.locator('.hero-title').evaluate((el) => {
    const style = getComputedStyle(el);
    const matrix = new DOMMatrixReadOnly(style.transform);
    return { opacity: Number(style.opacity), transform: [matrix.a, matrix.b, matrix.c, matrix.d, matrix.e, matrix.f] };
  });
  const animationStayedAtScrollProgress = afterHero.opacity <= beforeSwitch.heroOpacity + 0.05
    && afterHero.transform.every((value, index) => Math.abs(value - beforeSwitch.heroTransform[index]) <= (index < 4 ? 0.1 : 5));
  assert.ok(animationStayedAtScrollProgress, 'language change does not replay the opening animation');
  assert.equal(await page.locator('.language').getAttribute('aria-label'), 'Chuyển sang tiếng Anh');
  await page.screenshot({ path: '/tmp/abyss-language-desktop.png', fullPage: false });

  await page.locator('.sound').click();
  await page.waitForFunction(() => document.querySelector('.sound')?.getAttribute('aria-pressed') === 'true', null, { timeout: 5000 });
  assert.equal(await page.locator('.sound').getAttribute('aria-pressed'), 'true');
  await page.waitForTimeout(450);
  const audioBefore = await page.evaluate(() => ({ time: window.__abyssAmbience?.currentTime, paused: window.__abyssAmbience?.paused }));
  assert.equal(audioBefore.paused, false, 'explicit sound action starts ambience');
  await page.locator('.language').click();
  assert.equal(await page.evaluate(() => document.documentElement.lang), 'en');
  assert.ok(Math.abs((await page.evaluate(() => scrollY)) - beforeSwitch.scrollY) <= 1, 'VI to EN preserves scroll position');
  await page.waitForTimeout(450);
  const audioAfter = await page.evaluate(() => ({ time: window.__abyssAmbience?.currentTime, paused: window.__abyssAmbience?.paused }));
  assert.equal(audioAfter.paused, false, 'language change keeps ambience playing');
  assert.ok(audioAfter.time > audioBefore.time, 'language change does not restart ambience');
  await page.reload();
  assert.equal(await page.evaluate(() => document.documentElement.lang), 'en');
  assert.equal(await page.evaluate(() => localStorage.getItem('abyss-site-language')), 'en');
  await page.locator('.language').click();
  await page.reload();
  assert.equal(await page.evaluate(() => document.documentElement.lang), 'vi');
  assert.equal(await page.evaluate(() => localStorage.getItem('abyss-site-language')), 'vi');
  await page.locator('.language').click();

  for (const viewport of [
    { width: 768, height: 1024, name: 'tablet' },
    { width: 390, height: 844, name: 'iphone' },
    { width: 412, height: 915, name: 'android' },
    { width: 320, height: 740, name: 'compact' },
  ]) {
    await page.setViewportSize({ width: viewport.width, height: viewport.height });
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
    await page.waitForTimeout(100);
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false, `${viewport.name}: no horizontal overflow`);
    const rect = await page.locator('.language').evaluate((el) => { const r = el.getBoundingClientRect(); return { x: r.x, right: r.right, width: r.width, height: r.height, minHeight: Number.parseFloat(getComputedStyle(el).minHeight) }; });
    assert.ok(rect.width >= 44 && rect.minHeight >= 44 && rect.height >= 43.5, `${viewport.name}: comfortable 44px switcher target`);
    assert.ok(rect.x >= 0 && rect.right <= viewport.width, `${viewport.name}: switcher remains visible`);
    const headerRects = await page.locator('header .brand, header nav, header .language, header .sound, header .nav-download').evaluateAll((elements) => elements.filter((el) => el.getClientRects().length).map((el) => ({ name: el.className || el.tagName, ...el.getBoundingClientRect().toJSON() })));
    for (let i = 0; i < headerRects.length; i++) for (let j = i + 1; j < headerRects.length; j++) {
      const a = headerRects[i], b = headerRects[j];
      assert.ok(a.right <= b.left || b.right <= a.left || a.bottom <= b.top || b.bottom <= a.top, `${viewport.name}: ${a.name} does not collide with ${b.name}`);
    }
    if (await page.evaluate(() => document.documentElement.lang) === 'vi') await page.locator('.language').tap();
    await page.getByRole('button', { name: 'Switch to Tiếng Việt' }).tap();
    assert.equal(await page.evaluate(() => document.documentElement.lang), 'vi', `${viewport.name}: touch switches language`);
    await page.screenshot({ path: `/tmp/abyss-language-${viewport.name}.png`, fullPage: false });
  }

  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.evaluate(() => { localStorage.setItem('abyss-site-language', 'en'); window.scrollTo({ top: 0, behavior: 'instant' }); });
  await page.reload();
  await page.keyboard.press('Tab');
  assert.equal(await page.evaluate(() => document.activeElement.className), 'skip', 'skip link remains first keyboard stop');
  for (let i = 0; i < 4; i++) await page.keyboard.press('Tab');
  assert.equal(await page.evaluate(() => document.activeElement.className), 'language', 'language switcher is keyboard reachable');
  assert.equal(await page.locator('.language').getAttribute('aria-label'), 'Switch to Tiếng Việt');
  await page.keyboard.press('Enter');
  assert.equal(await page.evaluate(() => document.documentElement.lang), 'vi', 'keyboard activates switcher');
  results.push({
    viewports: [{ width: 1440, height: 1000 }, { width: 768, height: 1024 }, { width: 390, height: 844 }, { width: 412, height: 915 }, { width: 320, height: 740 }],
    switch: 'EN↔VI',
    scrollPreserved: true,
    openingAnimationNotReplayed: true,
    languagePersistenceAfterReload: ['en', 'vi'],
    ambienceContinuesWithoutRestart: true,
    selectedWorldAndRaidPreserved: true,
    keyboardAndTouch: true,
    headerPositionStable: true,
    horizontalOverflow: false,
  });
  await fs.writeFile('reports/language-qa.json', JSON.stringify(results, null, 2));
  console.log('Language experience QA passed');
} finally {
  await browser.close();
}
