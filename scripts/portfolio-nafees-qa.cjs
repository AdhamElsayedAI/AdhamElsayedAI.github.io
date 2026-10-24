/* Targeted Nafees AI visual regression — does not suppress old React #418 warnings. */
const {chromium}=require('playwright');
const fs=require('node:fs');
const W=[360,390,768,1440,1920,3840];
(async()=>{
 const browser=await chromium.launch({headless:true,args:['--no-sandbox','--disable-dev-shm-usage']});
 let n=0;
 try{
 for(const width of W){
 for(const scheme of ['dark','light']){
  const ctx=await browser.newContext({viewport:{width,height:width===3840?2160:width<=390?844:1024},colorScheme:scheme,reducedMotion:'reduce'});
  const page=await ctx.newPage();
  const errors=[];
  page.on('pageerror',e=>errors.push(e.message));
  await page.goto('http://127.0.0.1:4173/#achievements',{waitUntil:'domcontentloaded'});
  await page.waitForFunction(()=>!!document.querySelector('#nafees-ai-award'),null,{timeout:6500});
  await page.locator('#nafees-ai-award img').evaluate(img=>img.decode());
  await page.waitForTimeout(300);
  const result=await page.evaluate(()=>{
    const section=document.getElementById('achievements');
    const content=section?.querySelector('.site-container');
    const card=document.getElementById('nafees-ai-award');
    const medflow=content?.querySelector('.achievement-card');
    const photo=card?.querySelector('img');
    const r=photo?.getBoundingClientRect();
    return {
      imgLoaded:!!photo&&photo.complete&&photo.naturalWidth>0&&photo.naturalHeight>0&&Math.abs(photo.naturalWidth/photo.naturalHeight-.75)<.02,
      imageSrc:photo?.getAttribute('src'),
      renderedMedia:!!r&&r.width>0&&r.height>0,
      fit:photo?getComputedStyle(photo).objectFit:null,
      order:!!(card&&medflow&&card.compareDocumentPosition(medflow)&Node.DOCUMENT_POSITION_FOLLOWING),
      heading:content?.querySelector('.section-heading-v5 h2')?.textContent,
      oneCard:document.querySelectorAll('#nafees-ai-award').length===1,
      oneExperience:document.querySelectorAll('#experience .nafees-experience').length===1,
      hero:document.querySelectorAll('#home .nafees-hero-line').length===1,
      fullLink:card?.querySelector('.nafees-photo-bottom a')?.getAttribute('href'),
      overflow:document.documentElement.scrollWidth-innerWidth,
      medflowPreserved:medflow?.textContent.includes('MedFlow'),
      reduce:card?.querySelector('.nafees-reveal')?getComputedStyle(card.querySelector('.nafees-reveal')).opacity:null
    };
  });
  const pass=result.imgLoaded&&result.imageSrc==='/images/nafees-ai/nafees-ai-award.webp'&&
    result.renderedMedia&&result.fit==='contain'&&result.order&&result.oneCard&&
    result.oneExperience&&result.hero&&result.fullLink==='/images/nafees-ai/nafees-ai-award.webp'&&
    result.overflow<=2&&result.medflowPreserved&&result.reduce==='1'&&
    result.heading==='Recognition & Awards.';
  if(!pass)throw Error(width+'px '+scheme+' Nafees regression '+JSON.stringify(result));
  fs.mkdirSync('qa-screenshots',{recursive:true});
  await page.screenshot({path:'qa-screenshots/nafees-'+width+'-'+scheme+'.png',fullPage:true});
  console.log('PASS NAFEES '+width+'px '+scheme+' '+(errors.length?'page errors (independent): '+errors.join('; '):''));
  n++;await ctx.close();
 }
 }
 // Interactive desktop-only hover test (normal motion, fine pointer).
 const context=await browser.newContext({viewport:{width:1440,height:900},reducedMotion:'no-preference',hasTouch:false});
 const page=await context.newPage();
 await page.goto('http://127.0.0.1:4173/#achievements',{waitUntil:'domcontentloaded'});
 await page.waitForSelector('#nafees-ai-award .nafees-photo-frame',{timeout:8000});
 const card=page.locator('#nafees-ai-award');
 await card.scrollIntoViewIfNeeded();
 await page.waitForTimeout(700);
 const box=await card.boundingBox();
 if(!box)throw Error('Nafees card not displayed on desktop');
 await page.mouse.move(box.x+box.width*.73,box.y+box.height*.44);
 await page.waitForTimeout(350);
 const hover=await card.evaluate(el=>({
    active:el.classList.contains('nafees-is-hovered'),
    x:el.style.getPropertyValue('--nf-x'),
    tilt:el.style.getPropertyValue('--nf-tilt-y'),
    heading:getComputedStyle(el.querySelector('h3')).translate,
    source:el.querySelector('img')?.getAttribute('src')
 }));
 if(!hover.active||!hover.x||!hover.tilt||hover.heading==='none'||
    hover.source!=='/images/nafees-ai/nafees-ai-award.webp')
    throw Error('Nafees desktop hover regression '+JSON.stringify(hover));
 await page.mouse.move(0,0);
 await page.waitForTimeout(140);
 if(await card.evaluate(el=>el.classList.contains('nafees-is-hovered')))
    throw Error('Nafees hover persists after pointer leave');
 await context.close();
 console.log('PASS NAFEES desktop pointer motion and reset');
 console.log('NAFEES QA SUCCESS '+n+'/12 responsive/theme cases + desktop hover');
 }finally{await browser.close()}
})().catch(e=>{console.error(e.stack||e);process.exitCode=1});
