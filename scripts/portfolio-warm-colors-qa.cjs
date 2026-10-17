/* Scoped real-browser intro regression across six desktop/tablet/mobile/4K sizes. */
const {chromium}=require('playwright');
const fs=require('fs');
const sizes=[[360,780,true],[390,844,true],[768,1024,false],[1440,900,false],[1920,1080,false],[3840,2160,false]];
const expected={brand:'rgb(255, 148, 119)',divider:'rgb(255, 128, 107)',
 eyebrow:'rgb(255, 140, 105)',timestamp:'rgb(255, 117, 105)',
 prompt:'rgb(255, 115, 104)',normal:'rgb(255, 136, 105)',
 muted:'rgb(255, 105, 104)',bottom:'rgb(255, 139, 116)'};
(async()=>{
 const browser=await chromium.launch({headless:true,args:['--no-sandbox','--disable-dev-shm-usage']});
 let passed=0;
 try {
  for(const [width,height,mobile] of sizes) {
   const ctx=await browser.newContext({viewport:{width,height},isMobile:mobile,
    hasTouch:mobile,reducedMotion:'no-preference',colorScheme:'dark'});
   const page=await ctx.newPage();
   if(width===390||width===1440){
     await page.route('**/portfolio-boot.js*',async route=>{
       await new Promise(resolve=>setTimeout(resolve,1000));
       await route.continue();
     });
   }
   const exceptions=[];
   page.on('pageerror',e=>exceptions.push(e.message));
   await page.goto('http://127.0.0.1:4173/',{waitUntil:'commit'});
   if(width===390||width===1440){
     await page.waitForFunction(()=>document.body&&
       document.documentElement.classList.contains('ae-boot-pending'),{timeout:5000});
     const firstPaint=await page.evaluate(()=>{
       const root=document.documentElement;
       const pseudo=getComputedStyle(document.body,'::after');
       const home=document.getElementById('home');
       return {pending:root.classList.contains('ae-boot-pending'),
         placeholder:pseudo.content,heroHidden:!home||getComputedStyle(home).visibility==='hidden'};
     });
     if(!firstPaint.pending||!firstPaint.placeholder.includes('Adham Elsayed')||!firstPaint.heroHidden)
       throw Error(width+'px flash of original hero before intro: '+JSON.stringify(firstPaint));
     console.log('PASS '+width+'px early intro before delayed JS');
   }
   const intro=page.locator('#ae-boot-intro');
   await intro.waitFor({state:'visible',timeout:6500});
   const result=await intro.evaluate(el=>{
      const get=s=>el.querySelector(s);
      const color=s=>getComputedStyle(get(s)).color;
      const probeRow=document.createElement('div');
      probeRow.className='ae-boot-row';probeRow.dataset.tone='muted';
      const ink=document.createElement('span');ink.className='ae-boot-line';
      const prompt=document.createElement('span');prompt.className='ae-boot-prompt';
      probeRow.append(prompt,ink);get('.ae-boot-logs').append(probeRow);
      const muted=getComputedStyle(ink).color;
      probeRow.dataset.tone='normal';
      const normal=getComputedStyle(ink).color;
      const promptColor=getComputedStyle(prompt).color;
      const accents={};
      for(const tone of ['green','cyan','amber']){
        probeRow.dataset.tone=tone;
        accents[tone]=getComputedStyle(ink).color;
      }
      const timestamp=document.createElement('span');timestamp.className='ae-boot-timestamp';
      probeRow.append(timestamp);
      const timestampColor=getComputedStyle(timestamp).color;
      probeRow.remove();
      const shell=get('.ae-boot-shell');
      const bounds=shell.getBoundingClientRect();
      return {
       brand:color('.ae-boot-brand'),divider:color('.ae-boot-divider'),
       eyebrow:color('.ae-boot-eyebrow'),timestamp:timestampColor,
       prompt:promptColor,normal,muted,bottom:color('.ae-boot-bottomline'),accents,
       blur:getComputedStyle(shell).backdropFilter,
       background:getComputedStyle(el).backgroundImage,
       codefields:el.querySelectorAll('.ae-boot-codefield').length,
       noOldDecorations:!get('.ae-boot-card,.ae-boot-pixel'),
       insideViewport:bounds.left>=-1&&bounds.right<=innerWidth+1&&bounds.top>=-1&&bounds.bottom<=innerHeight+1,
       noOverflow:document.documentElement.scrollWidth<=innerWidth+2
      };
   });
   for(const [key,value] of Object.entries(expected)){
     if(result[key]!==value)throw Error(width+'px '+key+' is '+result[key]+' expected '+value);
   }
   const oldAccents={green:'rgb(135, 243, 202)',cyan:'rgb(22, 231, 220)',amber:'rgb(244, 190, 79)'};
   for(const [tone,value] of Object.entries(oldAccents)){
     if(result.accents[tone]!==value)throw Error(width+'px changed '+tone+' color');
   }
   if(!result.blur.includes('blur(')||result.codefields!==2||!result.noOldDecorations||
      !result.insideViewport||!result.noOverflow||!result.background.includes('linear-gradient'))
     throw Error(width+'px layout regression: '+JSON.stringify(result));
   if(exceptions.some(e=>!e.includes('Minified React error #418')))
     throw Error(width+'px new JS exception '+JSON.stringify(exceptions));
   fs.mkdirSync('qa-screenshots',{recursive:true});
   await page.screenshot({path:'qa-screenshots/warm-intro-'+width+'.png'});
   await intro.locator('.ae-boot-skip').click();
   await intro.waitFor({state:'detached',timeout:3000});
   if(await page.locator('#home').count()!==1)throw Error(width+'px home unavailable after skip');
   console.log('PASS '+width+'x'+height+' warm neutral ink / original accents / glass / Skip / responsive');
   passed++;await ctx.close();
  }
  console.log('INTRO COLOR QA PASS '+passed+'/'+sizes.length);
 }finally{await browser.close()}
})().catch(e=>{console.error(e.stack||e);process.exitCode=1});
