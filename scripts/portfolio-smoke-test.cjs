/* Static export regression test. Runs in GitHub Actions against the published root files. */
const { chromium } = require('playwright');
const fs = require('node:fs');
const path = require('node:path');
const URL = 'http://127.0.0.1:4173/';
const DIR = path.join(process.cwd(), 'qa-screenshots');
fs.mkdirSync(DIR, { recursive: true });

const results = [];
const issues = [];
const assert = (yes, what, detail = '') => {
  results.push({ pass: !!yes, what, detail: String(detail).slice(0, 220) });
  if (!yes) issues.push(what + (detail ? ': ' + String(detail).slice(0, 220) : ''));
};

async function inspect(browser, title, viewport, mobile) {
  const context = await browser.newContext({
    viewport, deviceScaleFactor: 1,
    isMobile: mobile, hasTouch: mobile,
    reducedMotion: 'no-preference',
  });
  const page = await context.newPage();
  const pageErrors = [];
  const notFound = [];
  page.on('pageerror', e => pageErrors.push(e.message));
  page.on('response', r => {
    if (r.status() >= 400 && r.url().startsWith(URL)) notFound.push(r.status() + ' ' + r.url());
  });
  await page.goto(URL, { waitUntil: 'load', timeout: 60000 });
  await page.waitForTimeout(2700);

  assert((await page.title()).includes('Adham Elsayed'), title + ' title');
  const ids = ['home','about','skills','projects','achievements','experience','certifications','contact'];
  for (const id of ids) assert(await page.locator('#' + id).count() === 1, title + ' section ' + id);

  const widths = await page.evaluate(() => ({
    viewport: innerWidth, document: document.documentElement.scrollWidth,
    body: document.body.scrollWidth,
  }));
  assert(widths.document <= widths.viewport + 2 && widths.body <= widths.viewport + 2, title + ' no horizontal overflow', JSON.stringify(widths));

  await page.locator('#projects').scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);
  assert(await page.locator('#projects .project-card-attendance').count() === 1, title + ' Smart Attendance card');
  assert(await page.locator('#projects .project-card-v5').count() >= 4, title + ' project cards preserved');
  assert(!await page.getByText('LIVE ·', { exact: false }).isVisible().catch(() => false), title + ' LIVE removed');
  const attendanceImage = await page.locator('.project-card-attendance img').evaluate(img=>({complete:img.complete,naturalWidth:img.naturalWidth,src:img.getAttribute('src')}));
  assert(attendanceImage.complete && attendanceImage.naturalWidth > 0, title + ' attendance image', JSON.stringify(attendanceImage));

  // Actual rendered canvas must be static while idle, animate on hover, and return to same pixels after leave.
  const banner = page.locator('#projects .section-dot-banner');
  await banner.scrollIntoViewIfNeeded();
  await page.mouse.move(1,1);
  await page.waitForTimeout(450);
  const canvas = banner.locator('canvas.cinema-particles');
  assert(await canvas.count() === 1, title + ' particle canvas mounted');
  if (await canvas.count()) {
    const getHash = () => canvas.evaluate(el => {
      const d=el.getContext('2d').getImageData(0,0,el.width,el.height).data;
      let v=2166136261;for(let i=0;i<d.length;i+=23){v^=d[i];v=Math.imul(v,16777619)}
      return v >>> 0;
    });
    const rest1=await getHash();
    await page.waitForTimeout(500);
    const rest2=await getHash();
    assert(rest1 === rest2, title + ' title stationary before hover', rest1 + ' / ' + rest2);
    if (!mobile) {
      await banner.hover({ force: true });
      await page.waitForTimeout(550);
      const hoverHash=await getHash();
      assert(rest1 !== hoverHash, title + ' particles move on hover', rest1 + ' / ' + hoverHash);
      await page.mouse.move(1,1);
      await page.waitForTimeout(400);
      const back=await getHash();
      assert(back === rest1, title + ' title returns exactly to static', rest1 + ' / ' + back);
    } else {
      assert(rest1 === rest2, title + ' touch renders static (no hover loop)');
    }
  }
  await page.screenshot({ path: path.join(DIR, title + '-projects.png'), fullPage: false });
  await page.locator('#home').scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(DIR, title + '-home.png'), fullPage: false });
  // Navigation from the actual rendered UI, including its JS transition.
  if (!mobile && viewport.width >= 1280) {
    await page.locator('nav[aria-label="Primary navigation"] a[href="#skills"]').click();
    await page.waitForTimeout(1600);
    assert(await page.evaluate(() => location.hash) === '#skills', title + ' navigation reaches skills');
    const y=await page.locator('#skills').evaluate(e=>e.getBoundingClientRect().top);
    assert(y>=0 && y<160, title + ' navigation not hidden under header', y);
  } else if (mobile) {
    const menu = page.locator('button[aria-label="Open menu"]');
    if (await menu.isVisible()) {
      await menu.click();
      await page.waitForTimeout(300);
      const mobileLinks=page.locator('#mobile-navigation a[href="#skills"]');
      assert(await mobileLinks.count()>0, title + ' mobile nav links present');
      if(await mobileLinks.isVisible()) {
        await mobileLinks.click();
        await page.waitForTimeout(1400);
        assert(await page.evaluate(() => location.hash)==='#skills', title + ' mobile navigation reaches skills');
      }
    }
  }
  // Verify basic media integrity after scrolling through the site.
  for (const id of ids) await page.locator('#'+id).scrollIntoViewIfNeeded();
  await page.waitForTimeout(900);
  const missingImages=await page.locator('img').evaluateAll(imgs=>imgs.filter(img=>img.complete&&img.naturalWidth===0).map(img=>img.getAttribute('src')));
  assert(missingImages.length===0,title+' images load',missingImages.join(', '));
  assert(pageErrors.length===0,title+' no JavaScript page errors',pageErrors.join('; '));
  assert(notFound.length===0,title+' no local missing HTTP assets',notFound.join('; '));

  // Theme switch should not remove the page contents.
  const themeButton=page.locator('button[aria-label="Toggle theme"]').first();
  if (await themeButton.isVisible()) {
    const initial=await page.locator('html').getAttribute('class');
    await themeButton.click();
    await page.waitForTimeout(250);
    const changed=await page.locator('html').getAttribute('class');
    assert(initial !== changed, title + ' dark/light toggle');
  }
  await context.close();
}

(async()=>{
 const browser=await chromium.launch({headless:true,args:['--no-sandbox','--disable-dev-shm-usage']});
 try {
   await inspect(browser,'desktop-1440',{width:1440,height:900},false);
   await inspect(browser,'desktop-1920',{width:1920,height:1080},false);
   await inspect(browser,'tablet-768',{width:768,height:1024},false);
   await inspect(browser,'mobile-390',{width:390,height:844},true);
   await inspect(browser,'mobile-360',{width:360,height:780},true);
 } finally { await browser.close() }
 for (const r of results) console.log((r.pass ? 'PASS ' : 'FAIL ')+r.what+(r.detail?' ['+r.detail+']':''));
 console.log('\nQA: '+(results.length-issues.length)+'/'+results.length+' checks passed.');
 if(issues.length) {console.error('\nFAILURES:\n'+issues.join('\n'));process.exitCode=1}
})().catch(e=>{console.error(e.stack||e);process.exitCode=1});
