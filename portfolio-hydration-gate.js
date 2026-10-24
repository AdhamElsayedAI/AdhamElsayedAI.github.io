/* Guard DOM enhancements against Next.js hydration races.
   React's own __reactProps$ markers establish that a target host node has
   been claimed by React; we never mutate a React-owned subtree beforehand. */
(()=>{
 'use strict';
 const queue=[];let armed=false,ready=false,frame=0,attempts=0;
 function hydrated(el){
  return !!el&&Object.keys(el).some(k=>k.startsWith('__reactProps$'));
 }
 function targetsReady(){
  const description=document.querySelector('#projects .project-card-featured-v5 .project-card-description-v5');
  const proctor=document.querySelector('#projects .project-card-shield .project-card-description-v5');
  const award=document.querySelector('#achievements .achievement-card');
  // All affected host elements must have completed their initial React claim.
  return hydrated(description)&&hydrated(proctor)&&hydrated(award);
 }
 function flush(){
  ready=true;
  for(const callback of queue.splice(0)){
   try{callback()}catch(e){setTimeout(()=>{throw e},0)}
  }
 }
 function check(){
  frame=0;
  if(ready)return;
  if(targetsReady()){
   // Allow a complete paint after the relevant host nodes were claimed.
   requestAnimationFrame(()=>requestAnimationFrame(flush));
   return;
  }
  attempts++;
  if(attempts<1200)frame=requestAnimationFrame(check);
  else console.error('Portfolio post-hydration enhancements not started: React DOM readiness could not be verified.');
 }
 function arm(){
  if(ready||armed)return;
  armed=true;
  frame=requestAnimationFrame(check);
 }
 window.portfolioAfterHydration=callback=>{
  if(typeof callback!=='function')return;
  if(ready){queueMicrotask(callback);return;}
  queue.push(callback);
  if(document.readyState==='complete')arm();
 };
 if(document.readyState==='complete')arm();
 else window.addEventListener('load',arm,{once:true});
})();
