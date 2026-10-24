/* Single post-hydration start point for scripts that mutate React-rendered content.
   Initial exported markup is never touched on DOMContentLoaded. */
(()=>{
 'use strict';
 const queue=[];
 let ready=false,armed=false;
 function flush(){
  ready=true;armed=false;
  for(const fn of queue.splice(0)){
   try{fn()}catch(error){setTimeout(()=>{throw error},0)}
  }
 }
 function arm(){
  if(ready||armed)return;
  armed=true;
  const next=()=>requestAnimationFrame(()=>requestAnimationFrame(flush));
  // Yield to React's initial normal-priority hydration work after page load.
  if('requestIdleCallback' in window)requestIdleCallback(next,{timeout:2800});
  else requestAnimationFrame(next);
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
