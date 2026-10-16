/* Additive cinematic section motion for the published Next.js static export.
 * Preserves existing React markup, content, themes, accessibility and anchor navigation.
 */
(()=>{'use strict';
const ids=['home','about','skills','projects','achievements','experience','certifications','contact'];
const names={home:'HOME',about:'ABOUT',skills:'SKILLS',projects:'PROJECTS',achievements:'ACHIEVEMENT',experience:'EXPERIENCE',certifications:'CERTIFICATIONS',contact:'CONTACT'};
const colors=['#ff65b7','#9e83ff','#5ce7db','#76ccff','#ffbd78'];
const reduced=matchMedia('(prefers-reduced-motion: reduce)'),fine=matchMedia('(hover:hover) and (pointer:fine)');
const states=new Map();let veil=null,busy=false;
let manualMotionOptIn=false;
const savedMotionOptIn=()=>{try{return localStorage.getItem('adham-cinema-opt-in')==='true'}catch(_){return false}};
const enabled=()=>(!reduced.matches||manualMotionOptIn||savedMotionOptIn())&&!document.documentElement.classList.contains('motion-off');
const clamp=(n,a,b)=>Math.min(b,Math.max(a,n));
const rand=n=>Math.abs((Math.sin(n*127.1+54.9)*43758.5453)%1);
function particles(canvas,word,kind){
  const state={canvas,word,kind,width:0,height:0,dots:[],frame:0,t0:0,visible:false,mx:-900,my:-900,moved:0};
  function draw(now){
    const c=canvas.getContext('2d');if(!c)return;
    c.clearRect(0,0,state.width,state.height);
    const arrival=clamp((now-state.t0)/770,0,1);
    const ease=1-Math.pow(1-arrival,3);
    // Continuous sweeping ripple, with a clear assembly/disassembly effect.
    const seconds=now*.001,phase=1-Math.abs(1-((seconds*.46)%2));
    const hot=fine.matches&&enabled()&&now-state.moved<2300;
    const radius=kind==='veil'?230:215;
    for(let i=0;i<state.dots.length;i++){
      const p=state.dots[i],dx=p.x-state.mx,dy=p.y-state.my,d=Math.hypot(dx,dy)||1;
      const proximity=hot?Math.max(0,1-d/radius):0;
      const jump=proximity*proximity*(kind==='veil'?68:54);
      p.dx+=((dx/d)*jump-p.dx)*.16;p.dy+=((dy/d)*jump-p.dy)*.16;
      const progress=clamp((ease-p.j*.38)/(1-p.j*.38),0,1);
      if(!progress)continue;
      const spread=(1-progress)*(18+p.j*23);
      const normalized=p.x/Math.max(1,state.width);
      const beam=Math.exp(-Math.pow((normalized-phase)*9.4,2));
      const breath=Math.sin(seconds*4.9+normalized*9+p.j*6.28);
      const x=p.x+(p.j-.5)*spread*1.25+p.dx+
        Math.sin(seconds*3.7+p.y*.036+p.j*5)*4.2+beam*(p.j-.5)*42;
      const y=p.y+Math.sin(i*12.9898)*spread+p.dy+
        Math.cos(seconds*4.4+p.x*.032+p.j*6)*4.5+beam*(p.j-.5)*58;
      const hue=(normalized*290+seconds*112+p.j*39+360)%360;
      const light=clamp(62+beam*20+breath*6,48,88);
      c.globalAlpha=clamp(progress*(.75+.23*breath)+beam*.16,0,1);
      c.fillStyle='hsl('+hue.toFixed(1)+' 98% '+light.toFixed(1)+'%)';
      c.beginPath();c.arc(x,y,p.r*(1+.26*beam+.17*breath),0,Math.PI*2);c.fill();
    }c.globalAlpha=1;
    canvas.__cinemaFrames=(canvas.__cinemaFrames||0)+1;
  }
  function resize(){
    const r=canvas.getBoundingClientRect(),w=Math.max(1,Math.round(r.width)),h=Math.max(1,Math.round(r.height));
    if(state.width===w&&state.height===h)return;
    state.width=w;state.height=h;
    const dpr=Math.min(devicePixelRatio||1,2);
    canvas.width=Math.round(w*dpr);canvas.height=Math.round(h*dpr);
    const ctx=canvas.getContext('2d');if(!ctx)return;
    ctx.setTransform(dpr,0,0,dpr,0,0);
    const mask=document.createElement('canvas');mask.width=w;mask.height=h;
    const mc=mask.getContext('2d',{willReadFrequently:true});if(!mc)return;
    let size=Math.min(h*(kind==='veil'?.52:.77),kind==='veil'?216:179);
    mc.textAlign='center';mc.textBaseline='middle';
    while(size>19){mc.font='900 '+Math.floor(size)+'px Inter,system-ui,Arial,sans-serif';
      if(mc.measureText(word).width<=w*.79)break;size-=2;}
    mc.fillStyle='#fff';mc.fillText(word,w/2,h/2-size*.055);
    const data=mc.getImageData(0,0,w,h).data;
    const step=(w<530?5.5:7.6)*(kind==='veil'?1:.96),dots=[];let n=0;
    for(let y=0;y<h;y+=step)for(let x=0;x<w;x+=step){
      if(data[(Math.floor(y)*w+Math.floor(x))*4+3]<110)continue;
      dots.push({x,y,color:colors[Math.floor(rand(n+8)*colors.length)],
        r:step*(.29+rand(n+17)*.07),j:rand(n+24),dx:0,dy:0});n++;
    }
    state.dots=dots;state.t0=performance.now()-(enabled()?0:1800);draw(performance.now());
  }
  function stepFrame(now){
    state.frame=0;
    if(!state.visible||!enabled()||document.hidden)return;
    const limit=window.innerWidth<600?33:26;
    if(!state.lastPaint||now-state.lastPaint>=limit){state.lastPaint=now;draw(now);}
    // Continue animating while the title is visible, not only for its entrance or cursor movement.
    schedule();
  }
  function schedule(){if(!state.frame&&state.visible&&enabled())state.frame=requestAnimationFrame(stepFrame);}
  state.resize=resize;
  state.show=()=>{if(state.visible)return;state.visible=true;state.t0=performance.now();schedule();};
  state.hide=()=>{state.visible=false;if(state.frame)cancelAnimationFrame(state.frame);state.frame=0;};
  state.pointer=(x,y)=>{state.mx=x;state.my=y;state.moved=performance.now();schedule();};
  state.replay=()=>{state.hide();state.t0=performance.now();state.lastPaint=0;state.show();};
  resize();return state;
}
const observer='IntersectionObserver' in window?new IntersectionObserver(entries=>entries.forEach(e=>{
  const s=states.get(e.target);if(s){if(e.isIntersecting)s.show();else s.hide();}
}),{rootMargin:'90px 0px',threshold:.04}):null;
function mountBanner(b){
  if(b.dataset.cinemaReady==='1' && b.querySelector('canvas.cinema-particles'))return;
  b.dataset.cinemaReady='';b.classList.remove('particle-ready');
  const textEl=b.querySelector('.section-wordmark');if(!textEl)return;
  const title=(textEl.getAttribute('aria-label')||textEl.textContent||'').trim().toUpperCase();if(!title)return;
  const c=document.createElement('canvas');c.className='cinema-particles';c.setAttribute('aria-hidden','true');
  b.appendChild(c);const s=particles(c,title,'banner');
  if(!c.getContext('2d')){c.remove();return;}states.set(b,s);
  b.dataset.cinemaReady='1';b.classList.add('particle-ready');
  // The title banner was decorative; make it accessible once it contains a real control.
  b.removeAttribute('aria-hidden');
  const btn=document.createElement('button');
  btn.type='button';btn.className='cinema-motion-control';
  btn.textContent='● LIVE PARTICLES';btn.setAttribute('aria-label','Replay section particle animation');
  btn.addEventListener('click',()=>{
    if(!enabled()){
      if(reduced.matches){
        manualMotionOptIn=true;
        try{localStorage.setItem('adham-cinema-opt-in','true')}catch(_){}
      }
      if(document.documentElement.classList.contains('motion-off')){
        const existing=document.querySelector('button[aria-label="Toggle motion"]');
        // Keep the existing React state, localStorage setting and header icon in sync.
        if(existing)existing.click();
        else{
          document.documentElement.classList.remove('motion-off');
          try{localStorage.setItem('adham-motion','true')}catch(_){}
        }
      }
    }
    setTimeout(()=>{if(enabled())s.replay();refreshControls();},180);
  });
  b.appendChild(btn);s.control=btn;
  if('ResizeObserver' in window)new ResizeObserver(()=>s.resize()).observe(b);
  b.addEventListener('pointermove',e=>{
    if(!fine.matches||!enabled())return;
    const r=b.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top;
    b.style.setProperty('--cinema-x',(x/r.width*100)+'%');
    b.style.setProperty('--cinema-y',(y/r.height*100)+'%');s.pointer(x,y);
  },{passive:true});
  b.addEventListener('pointerleave',()=>s.pointer(-900,-900),{passive:true});
  if(observer)observer.observe(b);else s.show();
}
function makeVeil(){
  if(veil)return veil;
  const box=document.createElement('div');box.className='cinema-nav-veil';box.setAttribute('aria-hidden','true');
  const canvas=document.createElement('canvas'),note=document.createElement('span');
  note.className='cinema-navigation-mark';note.textContent='ADHAM ELSAYED  /  PORTFOLIO';
  box.append(canvas,note);document.body.appendChild(box);
  box.addEventListener('pointermove',e=>{
    const r=box.getBoundingClientRect();
    box.style.setProperty('--cinema-x',e.clientX/r.width*100+'%');
    box.style.setProperty('--cinema-y',e.clientY/r.height*100+'%');
    if(veil.state)veil.state.pointer(e.clientX,e.clientY);
  },{passive:true});
  veil={box,canvas,state:null};return veil;
}
function activeNav(id){
  document.querySelectorAll('.ref-header a[href^="#"],#mobile-navigation a[href^="#"]').forEach(a=>
    a.classList.toggle('cinema-active-nav',a.getAttribute('href')==='#'+id));
}
function scrollToId(id){
  const dest=document.getElementById(id);if(!dest)return;
  const header=document.querySelector('.ref-header'),offset=(header?.getBoundingClientRect().height||68)+10;
  const y=Math.max(0,scrollY+dest.getBoundingClientRect().top-offset);
  if(location.hash!=='#'+id)history.pushState(null,'','#'+id);
  window.scrollTo({top:y,behavior:'instant'});activeNav(id);
}
function transition(id){
  if(busy||!document.getElementById(id))return;
  if(!enabled()){scrollToId(id);return;}
  busy=true;const v=makeVeil();
  v.box.classList.remove('cinema-fade');
  if(v.state)v.state.hide();
  const newCanvas=document.createElement('canvas');v.canvas.replaceWith(newCanvas);v.canvas=newCanvas;
  v.state=particles(v.canvas,names[id]||id.toUpperCase(),'veil');
  v.box.classList.add('cinema-visible');v.state.show();
  setTimeout(()=>scrollToId(id),610);
  setTimeout(()=>v.box.classList.add('cinema-fade'),780);
  setTimeout(()=>{v.box.classList.remove('cinema-visible','cinema-fade');v.state.hide();busy=false;},1120);
}
function refreshControls(){
  states.forEach((s,b)=>{
    if(!b.isConnected){s.hide();states.delete(b);return;}
    if(!s.control)return;
    const frames=s.canvas.__cinemaFrames||0;
    const previous=Number(s.control.dataset.previous||0);
    const paused=!enabled(),active=s.visible&&!document.hidden;
    const fps=frames-previous;
    s.control.dataset.previous=String(frames);
    const status=paused?'paused':active&&fps>2?'live':active?'stalled':'ready';
    s.control.dataset.status=status;
    s.control.textContent=paused?'▶ ENABLE ANIMATION':
      status==='live'?'● LIVE · '+Math.max(1,fps)+' FPS':
      status==='stalled'?'↻ RESTART ANIMATION':'↻ REPLAY ANIMATION';
    s.control.setAttribute('aria-label',paused?'Enable section animation':status==='stalled'?'Restart section animation':'Replay section animation');
  });
}
function start(){
  document.querySelectorAll('.section-heading-v5 .section-dot-banner').forEach(mountBanner);
  refreshControls();setInterval(refreshControls,1100);
  // Recover particle headings if Next.js hydrates or rerenders the section tree.
  let scanQueued=false;
  new MutationObserver(changes=>{
    if(!changes.some(change=>[...change.addedNodes].some(n=>n.nodeType===1)))return;
    if(scanQueued)return;scanQueued=true;
    requestAnimationFrame(()=>{scanQueued=false;document.querySelectorAll('.section-heading-v5 .section-dot-banner').forEach(mountBanner);});
  }).observe(document.body,{childList:true,subtree:true});
  document.addEventListener('click',e=>{
    if(e.defaultPrevented||e.button!==0||e.ctrlKey||e.metaKey||e.altKey||e.shiftKey)return;
    const a=e.target.closest?.('a[href^="#"]');if(!a||a.hasAttribute('download'))return;
    const id=a.getAttribute('href').slice(1);
    if(!ids.includes(id)||!document.getElementById(id))return;
    e.preventDefault();transition(id);
  },true);
  const initial=location.hash.slice(1);activeNav(ids.includes(initial)?initial:'home');
  window.addEventListener('popstate',()=>{const id=location.hash.slice(1);if(ids.includes(id))activeNav(id);});
  if('IntersectionObserver' in window){
    const io=new IntersectionObserver(entries=>{
      if(busy)return;
      const hits=entries.filter(e=>e.isIntersecting).sort((a,b)=>a.boundingClientRect.top-b.boundingClientRect.top);
      if(hits.length)activeNav(hits[0].target.id);
    },{rootMargin:'-18% 0px -68% 0px'});
    ids.map(id=>document.getElementById(id)).filter(Boolean).forEach(el=>io.observe(el));
  }
  let pending=false;const resized=()=>{if(pending)return;pending=true;requestAnimationFrame(()=>{
    pending=false;states.forEach(s=>s.resize());veil?.state?.resize();
  });};
  window.addEventListener('resize',resized,{passive:true});
  document.addEventListener('visibilitychange',()=>{if(!document.hidden)states.forEach(s=>s.pointer(-900,-900));});
  if('ResizeObserver' in window){
    const ro=new ResizeObserver(resized);states.forEach((s,b)=>ro.observe(b));
  }
  // Respect a deliberate "Motion off", but reliably restart when turned on again.
  function syncMotionPreference(){
    const paused=!enabled();
    document.documentElement.classList.toggle('cinema-motion-paused',paused);
    states.forEach(s=>{
      if(paused){s.hide();return;}
      const rect=s.canvas.getBoundingClientRect();
      if(rect.bottom>0&&rect.top<innerHeight)s.show();
    });
  }
  reduced.addEventListener?.('change',syncMotionPreference);
  new MutationObserver(syncMotionPreference)
    .observe(document.documentElement,{attributes:true,attributeFilter:['class']});
  syncMotionPreference();
}
if(document.readyState==='complete')setTimeout(start,900);
else window.addEventListener('load',()=>setTimeout(start,900),{once:true});
})();