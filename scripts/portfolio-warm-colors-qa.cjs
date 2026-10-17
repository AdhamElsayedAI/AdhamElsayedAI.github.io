/* Intro color and first-paint checks; capture transient intro before it automatically exits. */
const {chromium}=require('playwright');
const fs=require('fs');
const sizes=[[360,780,true],[390,844,true],[768,1024,false],[1440,900,false],[1920,1080,false],[3840,2160,false]];
const expected={brand:'rgb(255, 148, 119)',divider:'rgb(255, 128, 107)',eyebrow:'rgb(255, 140, 105)',
 timestamp:'rgb(255, 117, 105)',prompt:'rgb(255, 115, 104)',normal:'rgb(255, 136, 105)',
 muted:'rgb(255, 105, 104)',bottom:'rgb(255, 139, 116)'};
(async()=>{
 const browser=await chromium.launch({headless:true,args:['--no-sandbox','--disable-dev-shm-usage']});
 let passed=0;
 try{
  for(const [width,height,mobile] of sizes){
   const ctx=await browser.newContext({viewport:{width,height},isMobile:mobile,hasTouch:mobile,reducedMotion:'no-preference',colorScheme:'dark'});
   const page=await ctx.newPage();
   await page.addInitScript(()=>{
    window.__introQA={firstPaint:false,snapshot:null,seen:false};
    const capture=()=>{
      if(document.documentElement?.classList.contains('ae-boot-pending')) window.__introQA.firstPaint=true;
      const root=document.getElementById('ae-boot-intro');
      if(!root||window.__introQA.snapshot)return;
      window.__introQA.seen=true;
      const g=s=>root.querySelector(s);
      const brand=g('.ae-boot-brand');
      if(!brand||getComputedStyle(brand).color!=='rgb(255, 148, 119)')return;
      const logs=g('.ae-boot-logs');if(!logs)return;
      const probe=document.createElement('div');probe.className='ae-boot-row';
      const ink=document.createElement('span');ink.className='ae-boot-line';
      const prompt=document.createElement('span');prompt.className='ae-boot-prompt';
      const stamp=document.createElement('span');stamp.className='ae-boot-timestamp';
      probe.append(ink,prompt,stamp);logs.append(probe);
      const colors={};
      for(const tone of ['normal','muted','green','cyan','amber']){
        probe.dataset.tone=tone;colors[tone]=getComputedStyle(ink).color;
        if(tone==='normal'){colors.prompt=getComputedStyle(prompt).color;colors.timestamp=getComputedStyle(stamp).color}
      }
      probe.remove();
      const rect=g('.ae-boot-shell').getBoundingClientRect();
      window.__introQA.snapshot={
        brand:getComputedStyle(brand).color,divider:getComputedStyle(g('.ae-boot-divider')).color,
        eyebrow:getComputedStyle(g('.ae-boot-eyebrow')).color,
        timestamp:colors.timestamp,prompt:colors.prompt,normal:colors.normal,muted:colors.muted,
        bottom:getComputedStyle(g('.ae-boot-bottomline')).color,green:colors.green,cyan:colors.cyan,
        amber:colors.amber,blur:getComputedStyle(g('.ae-boot-shell')).backdropFilter,
        codefields:root.querySelectorAll('.ae-boot-codefield').length,
        inside:rect.left>=-1&&rect.top>=-1&&rect.right<=innerWidth+1&&rect.bottom<=innerHeight+1,
        overflow:document.documentElement.scrollWidth-innerWidth
      };
      // A real, live click tests that the session is dismissed correctly.
      const btn=g('.ae-boot-skip');
      if(btn){btn.click();window.__introQA.skipClicked=true}
    };
    const watcher=new MutationObserver(capture);
    watcher.observe(document,{childList:true,subtree:true});
    document.addEventListener('DOMContentLoaded',()=>{
      window.__introQA.firstPaint ||= document.documentElement.classList.contains('ae-boot-pending');
      capture();
    },{once:true});
    setInterval(capture,60);
   });
   if(width===390||width===1440){
    await page.route('**/portfolio-boot.js*',async route=>{
      await new Promise(resolve=>setTimeout(resolve,1000));
      await route.continue();
    });
   }
   await page.goto('http://127.0.0.1:4173/',{waitUntil:'domcontentloaded'});
   await page.waitForFunction(()=>Boolean(window.__introQA?.snapshot),null,{timeout:9000});
   const snapshot=await page.evaluate(()=>window.__introQA);
   for(const [k,v] of Object.entries(expected))
     if(snapshot.snapshot[k]!==v)throw Error(width+'px '+k+': '+snapshot.snapshot[k]+' != '+v);
   for(const [tone,color] of Object.entries({green:'rgb(135, 243, 202)',cyan:'rgb(22, 231, 220)',amber:'rgb(244, 190, 79)'}))
     if(snapshot.snapshot[tone]!==color)throw Error(width+'px changed '+tone);
   if(!snapshot.firstPaint||!snapshot.snapshot.inside||snapshot.snapshot.overflow>2||
     !snapshot.snapshot.blur.includes('blur(')||snapshot.snapshot.codefields!==2||
     !snapshot.skipClicked)throw Error(width+'px intro QA '+JSON.stringify(snapshot));
   await page.waitForFunction(()=>!document.documentElement.classList.contains('ae-boot-pending'),null,{timeout:4000});
   if(await page.locator('#home').count()!==1)throw Error(width+'px home content missing');
   console.log('PASS '+width+'x'+height+' immediate boot, vivid warm ink, glass, preserved accents, skip');
   passed++;await ctx.close();
  }
  console.log('INTRO QA SUCCESS '+passed+'/'+sizes.length);
 }finally{await browser.close()}
})().catch(e=>{console.error(e.stack||e);process.exitCode=1});
