/* V3 progressive typography; do not change the server-rendered text before hydration. */
(()=>{'use strict';
 const activate=(banner)=>{
  if(banner.dataset.v3Animated==='1')return;
  const label=banner.querySelector('.section-wordmark');if(!label)return;
  const raw=(label.textContent||'').trim();if(!raw)return;
  banner.dataset.v3Animated='1';label.setAttribute('aria-label',raw);
  label.replaceChildren(...[...raw].map((ch,i)=>{
   const s=document.createElement('span');s.className='v3-letter'+(ch===' '?' v3-space':'');
   s.setAttribute('aria-hidden','true');s.style.setProperty('--letter-i',i);
   s.textContent=ch===' '?' ':ch;return s;
  }));
  const show=()=>banner.classList.add('v3-title-active');
  if(!('IntersectionObserver' in window)){show();return}
  const io=new IntersectionObserver(entries=>entries.forEach(e=>{
   if(e.isIntersecting){show();io.disconnect()}
  }),{threshold:.12,rootMargin:'0px 0px -24px 0px'});
  io.observe(banner);
 };
 const start=()=>{
  document.querySelectorAll('.section-dot-banner').forEach(activate);
  const main=document.querySelector('main');if(!main)return;
  const observer=new MutationObserver(ms=>{
   for(const m of ms) for(const n of m.addedNodes) if(n.nodeType===1){
    if(n.matches?.('.section-dot-banner'))activate(n);
    n.querySelectorAll?.('.section-dot-banner').forEach(activate);
   }
  });
  observer.observe(main,{childList:true,subtree:true});
 };
 if(document.readyState==='complete')setTimeout(start,550);
 else window.addEventListener('load',()=>setTimeout(start,550),{once:true});
})();