/* Nafees AI / premium visual layer. Decorates the authentic 1200x1600 photo without canvas or AI generation. */
(()=>{
 'use strict';
 const svg=(name)=>{
  const paths={
   trophy:'<path d="M8 21h8M12 17v4M7 4h10v7a5 5 0 0 1-10 0V4ZM7 6H4v3a4 4 0 0 0 4 4m9-7h3v3a4 4 0 0 1-4 4"/>',
   coins:'<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/>',
   graduation:'<path d="m2 10 10-5 10 5-10 5-10-5ZM6 12v5c3 3 9 3 12 0v-5M22 10v6"/>',
   chart:'<path d="M4 20V10h4v10M10 20V4h4v16M16 20v-7h4v7M2 20h20"/>',
   image:'<rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m3 18 5-5 4 4 4-5 5 6"/>',
   expand:'<path d="M8 3H3v5M3 3l7 7M16 21h5v-5M21 21l-7-7M16 3h5v5M21 3l-7 7M8 21H3v-5M3 21l7-7"/>',
   calendar:'<rect width="18" height="18" x="3" y="4" rx="2"/><path d="M8 2v4m8-4v4M3 10h18"/>',
   pin:'<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>'
  };
  return '<svg class="np-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.85" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+(paths[name]||'')+'</svg>';
 };
 const noMotion=()=>matchMedia('(prefers-reduced-motion: reduce)').matches||document.documentElement.classList.contains('motion-off');
 const fine=matchMedia('(hover:hover) and (pointer:fine)');
 function decorate(card){
  if(card.dataset.nafeesPremium==='1')return;
  card.dataset.nafeesPremium='1';card.classList.add('nafees-premium');
  const frame=card.querySelector('.nafees-photo-frame'),visual=card.querySelector('.nafees-visual');
  const caption=card.querySelector('.nafees-photo-bottom');
  if(frame&&caption){
   const label=caption.querySelector('span');
   if(label)label.insertAdjacentHTML('afterbegin',svg('image'));
   const link=caption.querySelector('a');
   if(link){
    link.setAttribute('aria-label','Open the full-resolution Nafees AI award photograph in a new tab');
    link.insertAdjacentHTML('afterbegin',svg('expand'));
   }
   visual.appendChild(caption); // Keep figcaption as a direct figure child for accessible semantics.
  }
  const overline=card.querySelector('.nafees-overline');
  if(overline)overline.insertAdjacentHTML('afterbegin','<span class="np-overline-icon">'+svg('trophy')+'</span>');
  card.querySelectorAll('.nafees-stats > div').forEach((stat,index)=>stat.insertAdjacentHTML('afterbegin',svg(index===0?'trophy':'coins')));
  card.querySelectorAll('.nafees-chips span').forEach((chip,index)=>chip.insertAdjacentHTML('afterbegin',svg(['graduation','chart','trophy'][index]||'trophy')));
  const date=card.querySelector('.nafees-award-date');
  if(date)date.innerHTML=svg('calendar')+'<time datetime="2026-10-13">13 October 2026</time><span class="np-dot" aria-hidden="true">·</span>'+svg('pin')+'<span>Egypt</span>';
  // One passive, frame-rate-capped spotlight. Existing Nafees script owns the tilt state.
  if(fine.matches){
   let tick=0,last=null;
   card.addEventListener('pointermove',event=>{
    if(event.pointerType==='touch'||noMotion())return;
    last={x:event.clientX,y:event.clientY};
    if(tick)return;
    tick=requestAnimationFrame(()=>{
     tick=0;if(!last||!card.isConnected)return;
     const r=card.getBoundingClientRect();
     if(r.width&&r.height){
      card.style.setProperty('--nf-spot-x',(((last.x-r.left)/r.width)*100).toFixed(1)+'%');
      card.style.setProperty('--nf-spot-y',(((last.y-r.top)/r.height)*100).toFixed(1)+'%');
     }
    });
   },{passive:true});
   card.addEventListener('pointerleave',()=>{
    if(tick)cancelAnimationFrame(tick);tick=0;last=null;
    card.style.removeProperty('--nf-spot-x');card.style.removeProperty('--nf-spot-y');
   },{passive:true});
  }
 }
 let scheduled=false;
 const scan=()=>{
  scheduled=false;
  document.querySelectorAll('#achievements .nafees-showcase').forEach(decorate);
 };
 const schedule=()=>{
  if(scheduled)return;
  scheduled=true;
  requestAnimationFrame(scan);
 };
 function boot(){
  scan();
  const section=document.getElementById('achievements');
  if(!section){return}
  new MutationObserver(schedule).observe(section,{childList:true,subtree:true});
 }
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot,{once:true});else boot();
})();
