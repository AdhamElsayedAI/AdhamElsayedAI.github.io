/* Nafees AI recognition; additive to the published portfolio; no existing awards removed. */
(()=>{
 'use strict';
 const photo='/images/nafees-ai/nafees-ai-award.webp';
 function addHero(){
  const hero=document.querySelector('#home .ref-hero-grid > div:first-child');
  if(!hero||hero.querySelector('.nafees-hero-line'))return;
  const p=document.createElement('p');p.className='nafees-hero-line';
  p.innerHTML='<span class="nafees-hero-marker">Award · 2026</span>'+
   '<span><strong>Nafees AI</strong> — 2nd Place, Startup Track at GEN AI for Education Hackathon. <a href="#nafees-ai-award">Explore achievement ↗</a></span>';
  const anchor=hero.querySelector('.ref-inline-terminal')||hero.querySelector('.ref-tagline');
  if(anchor)anchor.after(p); else hero.append(p);
 }
 function addAward(){
  const content=document.querySelector('#achievements .site-container');
  if(!content||content.querySelector('#nafees-ai-award'))return;
  const article=document.createElement('article');
  article.className='nafees-showcase';
  article.id='nafees-ai-award';
  article.setAttribute('aria-label','Nafees AI second-place hackathon recognition');
  article.innerHTML=[
    '<div class="nafees-photo">',
      '<img src="'+photo+'" width="480" height="640" loading="lazy" decoding="async"',
      ' alt="Adham Elsayed holding the Second Place Startup Track award cheque for 80,000 EGP at GEN AI for Education Hackathon on 13 October 2026">',
      '<div class="nafees-photo-bottom"><span>GEN AI for Education · 2026</span>',
      '<a href="'+photo+'" target="_blank" rel="noopener noreferrer" aria-label="Open the original Nafees AI award photograph">View photo ↗</a></div>',
    '</div>',
    '<div class="nafees-showcase-body">',
      '<span class="nafees-overline">Featured recognition / Education AI</span>',
      '<h3>Nafees AI</h3>',
      '<p class="nafees-event-name">GEN AI for Education Hackathon 2026 · Startup Track</p>',
      '<div class="nafees-stats">',
        '<div><strong>2nd Place</strong><small>Startup Track</small></div>',
        '<div><strong>80,000 EGP</strong><small>Award amount</small></div>',
      '</div>',
      '<p class="nafees-summary">Nafees AI, an education-focused AI project, received Second Place in the Startup Track at the GEN AI for Education Hackathon 2026. The recognition was accompanied by an 80,000 EGP award.</p>',
      '<div class="nafees-chips"><span>Education AI</span><span>Startup Track</span><span>Hackathon Recognition</span></div>',
      '<p class="nafees-award-date"><time datetime="2026-10-13">13 October 2026</time> · Egypt</p>',
    '</div>'
  ].join('');
  content.appendChild(article);
 }
 function addExperience(){
  const timeline=document.querySelector('#experience .experience-timeline-v5');
  if(!timeline||timeline.querySelector('.nafees-experience'))return;
  const item=document.createElement('article');
  item.className='experience-row-v5 nafees-experience';
  item.setAttribute('data-tone','warm');
  item.innerHTML=[
    '<div class="experience-marker-v5" aria-hidden="true"><span></span></div>',
    '<div class="nafees-experience-card">',
      '<div class="nafees-experience-top"><time datetime="2026-10-13">Oct 2026</time><span>Hackathon / Project</span></div>',
      '<h3>Nafees AI — AI Project Contributor</h3>',
      '<strong>GEN AI for Education Hackathon · Startup Track</strong>',
      '<p>Participated in the Nafees AI education-focused entry, recognized with 2nd Place and an 80,000 EGP award in the Startup Track. This entry records the project participation and award, without implying a formal employer role.</p>',
      '<a href="#nafees-ai-award">See recognition and photograph ↗</a>',
    '</div>'
  ].join('');
  const first=timeline.querySelector('.experience-row-v5');
  if(first)first.before(item);else timeline.append(item);
 }
 function reconcile(){addHero();addAward();addExperience()}
 function start(){
  reconcile();setTimeout(reconcile,950);setTimeout(reconcile,2600);
  const main=document.querySelector('#main-content');
  if(main&&window.MutationObserver){
   let pending=false;
   const obs=new MutationObserver(()=>{
    if(pending)return;
    pending=true;
    requestAnimationFrame(()=>{pending=false;reconcile()});
   });
   obs.observe(main,{childList:true,subtree:true});
  }
 }
 if(document.readyState==='complete')setTimeout(start,380);
 else window.addEventListener('load',()=>setTimeout(start,380),{once:true});
})();
