/* Nafees AI Recognition — additive enhancement of the existing static portfolio.
   The image source, brand framing and motions are scoped to Nafees only. */
(()=>{
 'use strict';
 const imagePath='/images/nafees-ai/nafees-ai-award.webp';
 // Preserve full-resolution WebP as the sole display source.
 const allowedMotion=()=>!matchMedia('(prefers-reduced-motion: reduce)').matches &&
                       !document.documentElement.classList.contains('motion-off');

 function hero(){
   const column=document.querySelector('#home .ref-hero-grid > div:first-child');
   if(!column||column.querySelector('.nafees-hero-line'))return;
   const line=document.createElement('p');
   line.className='nafees-hero-line';
   line.innerHTML='<span class="nafees-hero-marker">2026 · Award</span>'+
    '<span><strong>Nafees AI</strong> · 2nd Place, Startup Track at GEN AI for Education Hackathon. '+
    '<a href="#nafees-ai-award">View recognition ↗</a></span>';
   const anchor=column.querySelector('.ref-inline-terminal')||column.querySelector('.ref-tagline');
   if(anchor)anchor.after(line);else column.append(line);
 }
 function achievement(){
   const content=document.querySelector('#achievements .site-container');
   if(!content)return;
   const heading=content.querySelector('.section-heading-v5');
   // Now that the section lists two awards, use a genuinely inclusive heading.
   if(heading){
     const title=heading.querySelector('h2.section-title');
     const blurb=heading.querySelector('.section-heading-v5-copy p.text-muted');
     if(title&&title.textContent.includes('AI Hackathon Mansoura 2026'))
       title.textContent='Recognition & Awards.';
     if(blurb&&blurb.textContent.includes('A Team MedFlow achievement'))
       blurb.textContent='Recognition for applied AI projects across education and clinical problem-solving.';
   }
   let card=content.querySelector('#nafees-ai-award');
   if(!card){
     card=document.createElement('article');
     card.className='nafees-showcase';
     card.id='nafees-ai-award';
     card.setAttribute('aria-label','Nafees AI: Second Place Startup Track at GEN AI for Education Hackathon 2026');
     card.innerHTML=[
      '<figure class="nafees-visual nafees-reveal">',
       '<div class="nafees-photo-frame">',
        '<div class="nafees-photo-glow" aria-hidden="true"></div>',
        '<img class="nafees-award-image" src="'+imagePath+'" width="1200" height="1600" loading="lazy" decoding="async" alt="Adham Elsayed holding the GEN AI for Education Hackathon Second Place award cheque" />',
        '<span class="nafees-glass-shine" aria-hidden="true"></span>',
        '<span class="nafees-corner nafees-corner-tl" aria-hidden="true"></span>',
        '<span class="nafees-corner nafees-corner-br" aria-hidden="true"></span>',
       '</div>',
       '<figcaption class="nafees-photo-bottom"><span>GEN AI for Education / 2026</span>',
        '<a href="'+imagePath+'" target="_blank" rel="noopener noreferrer">View full photo ↗</a>',
       '</figcaption>',
      '</figure>',
      '<div class="nafees-showcase-body">',
       '<p class="nafees-overline nafees-reveal" style="--nafees-delay:60ms">2026 / Featured recognition</p>',
       '<h3 class="nafees-reveal" style="--nafees-delay:130ms">Nafees AI</h3>',
       '<p class="nafees-event-name nafees-reveal" style="--nafees-delay:190ms">GEN AI for Education Hackathon 2026 · Startup Track</p>',
       '<div class="nafees-stats nafees-reveal" style="--nafees-delay:250ms">',
        '<div><strong>2nd Place</strong><small>Startup Track</small></div>',
        '<div><strong>80,000 EGP</strong><small>Award amount</small></div>',
       '</div>',
       '<p class="nafees-summary nafees-reveal" style="--nafees-delay:320ms">Nafees AI, an education-focused AI project, earned second place in the Startup Track at the GEN AI for Education Hackathon 2026, with an 80,000 EGP award.</p>',
       '<div class="nafees-chips nafees-reveal" style="--nafees-delay:390ms"><span>Education AI</span><span>Startup Track</span><span>Hackathon Award</span></div>',
       '<p class="nafees-award-date nafees-reveal" style="--nafees-delay:450ms"><time datetime="2026-10-13">13 October 2026</time> · Egypt</p>',
      '</div>'
     ].join('');
   }
   // DOM order is explicit: featured Nafees card BEFORE the existing MedFlow card.
   const oldMedFlow=content.querySelector('.achievement-card');
   if(oldMedFlow&&card.nextElementSibling!==oldMedFlow)oldMedFlow.before(card);
   else if(!card.isConnected)content.append(card);
   bindInteractions(card);
 }
 function experience(){
   const timeline=document.querySelector('#experience .experience-timeline-v5');
   if(!timeline||timeline.querySelector('.nafees-experience'))return;
   const item=document.createElement('article');
   item.className='experience-row-v5 nafees-experience';
   item.dataset.tone='warm';
   item.innerHTML=[
     '<div class="experience-marker-v5" aria-hidden="true"><span></span></div>',
     '<div class="nafees-experience-card">',
      '<div class="nafees-experience-top"><time datetime="2026-10-13">Oct 2026</time><span>Hackathon / Project</span></div>',
      '<h3>Nafees AI — Hackathon Participant</h3>',
      '<strong>GEN AI for Education Hackathon · Startup Track</strong>',
      '<p>Participated in the Nafees AI education-focused project, recognized with Second Place in the Startup Track and an 80,000 EGP award.</p>',
      '<a href="#nafees-ai-award">View recognition and photograph ↗</a>',
     '</div>'
   ].join('');
   const first=timeline.querySelector('.experience-row-v5');
   if(first)first.before(item);else timeline.append(item);
 }
 const revealObservers=new WeakSet(),bound=new WeakSet();
 function bindInteractions(card){
   if(!revealObservers.has(card)){
     revealObservers.add(card);
     if(allowedMotion()&&'IntersectionObserver' in window){
       card.classList.add('nafees-animate');
       const obs=new IntersectionObserver(entries=>{
         if(entries.some(e=>e.isIntersecting)){card.classList.add('nafees-in-view');obs.disconnect()}
       },{threshold:.1});
       obs.observe(card);
       setTimeout(()=>{card.classList.add('nafees-in-view');obs.disconnect()},5000);
     }else card.classList.add('nafees-in-view');
   }
   if(bound.has(card))return;
   bound.add(card);
   const pointer=matchMedia('(hover:hover) and (pointer:fine)');
   if(!pointer.matches)return;
   let raf=0,coords=null;
   function reset(){
     cancelAnimationFrame(raf);raf=0;coords=null;
     card.classList.remove('nafees-is-hovered');
     for(const key of ['--nf-tilt-x','--nf-tilt-y','--nf-x','--nf-y','--nf-x-mid','--nf-y-mid'])card.style.removeProperty(key);
   }
   function paint(){
     raf=0;if(!coords||!allowedMotion())return;
     const r=card.getBoundingClientRect();
     const x=Math.max(-1,Math.min(1,2*(coords.x-r.left)/r.width-1));
     const y=Math.max(-1,Math.min(1,2*(coords.y-r.top)/r.height-1));
     card.style.setProperty('--nf-tilt-x',(-y*4.2).toFixed(2)+'deg');
     card.style.setProperty('--nf-tilt-y',(x*4.2).toFixed(2)+'deg');
     card.style.setProperty('--nf-x',(x*11).toFixed(2)+'px');
     card.style.setProperty('--nf-y',(y*8).toFixed(2)+'px');
     card.style.setProperty('--nf-x-mid',(x*6).toFixed(2)+'px');
     card.style.setProperty('--nf-y-mid',(y*4).toFixed(2)+'px');
   }
   function move(e){
     if(!allowedMotion()||!pointer.matches){reset();return}
     coords={x:e.clientX,y:e.clientY};
     card.classList.add('nafees-is-hovered');
     if(!raf)raf=requestAnimationFrame(paint);
   }
   card.addEventListener('pointerenter',move,{passive:true});
   card.addEventListener('pointermove',move,{passive:true});
   card.addEventListener('pointerleave',reset,{passive:true});
   pointer.addEventListener?.('change',reset);
 }
 function reconcile(){hero();achievement();experience()}
 function start(){
   reconcile();setTimeout(reconcile,1050);setTimeout(reconcile,2450);
   const main=document.getElementById('main-content');
   if(main&&'MutationObserver' in window){
     let scheduled=false;
     const observer=new MutationObserver(()=>{
       if(scheduled)return;scheduled=true;
       requestAnimationFrame(()=>{scheduled=false;reconcile()});
     });
     observer.observe(main,{subtree:true,childList:true});
   }
 }
 if(document.readyState==='complete')setTimeout(start,350);
 else window.addEventListener('load',()=>setTimeout(start,350),{once:true});
})();
