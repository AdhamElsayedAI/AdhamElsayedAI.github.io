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
      pictureType:card?.querySelector('source[type="image/avif"]')?.getAttribute('srcset'),
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
  const pass=result.imgLoaded&&result.pictureType==='/images/nafees-ai/nafees-ai-award.avif'&&
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
 console.log('NAFEES QA SUCCESS '+n+'/12 responsive/theme cases');
 }finally{await browser.close()}
})().catch(e=>{console.error(e.stack||e);process.exitCode=1});
