/* Adham Elsayed — accessible first-visit code-terminal animation.
   Added outside the compiled Next.js React tree; never edits hydrated markup. */
(()=>{'use strict';
  const root=document.documentElement;
  let mounted=false;
  function mount(){
  if(mounted||(location.hash&&location.hash!=='#home')||matchMedia('(prefers-reduced-motion: reduce)').matches||!document.body)return;
  mounted=true;
  const overlay=document.createElement('section');
  overlay.id='ae-boot-intro';overlay.setAttribute('role','dialog');
  overlay.setAttribute('aria-modal','true');
  overlay.setAttribute('aria-label','Adham Elsayed portfolio introduction');
  overlay.setAttribute('aria-describedby','ae-boot-description');
  overlay.innerHTML=[
    '<div class="ae-boot-ambient" aria-hidden="true" id="ae-boot-ambient"></div>',
    '<div class="ae-boot-shell">',
    '<div class="ae-boot-top">',
    '<span class="ae-boot-dots" aria-hidden="true"><i></i><i></i><i></i></span>',
    '<span class="ae-boot-brand">Adham Elsayed</span>',
    '<span class="ae-boot-divider" aria-hidden="true">/</span>',
    '<button type="button" class="ae-boot-skip" aria-label="Skip introduction and open portfolio">Skip intro ↗</button>',
    '</div>',
    '<div class="ae-boot-main">',
    '<p class="ae-boot-sr-only" id="ae-boot-description">Portfolio introduction for Adham Elsayed, AI Engineer. Skip with Escape or the Skip intro button.</p>',
    '<div class="ae-boot-eyebrow" aria-hidden="true">INITIALIZING PORTFOLIO EXPERIENCE</div>',
    '<div class="ae-boot-logs" aria-hidden="true"></div>',
    '<div class="ae-boot-card">',
    '<strong class="ae-boot-name">Adham Elsayed</strong>',
    '<span class="ae-boot-role">AI Engineer · Generative AI · RAG · Computer Vision</span>',
    '<span class="ae-boot-location">Egypt · Evidence-driven AI systems</span>',
    '</div>',
    '<div class="ae-boot-bottom" aria-hidden="true">',
    '<div class="ae-boot-bottomline"><span>PORTFOLIO / INIT</span><span class="ae-boot-percent">00%</span></div>',
    '<div class="ae-boot-track"><div class="ae-boot-bar"></div></div>',
    '</div></div></div>'
  ].join('');
  root.classList.add('ae-boot-pending');
  document.body.appendChild(overlay);
  const logs=overlay.querySelector('.ae-boot-logs');
  const progress=overlay.querySelector('.ae-boot-bar');
  const percent=overlay.querySelector('.ae-boot-percent');
  const skip=overlay.querySelector('.ae-boot-skip');
  const previousFocus=document.activeElement;
  const siblings=[...document.body.children].filter(e=>e!==overlay&&e.tagName!=='SCRIPT');
  const inertBefore=siblings.map(e=>[e,e.inert]);
  for(const el of siblings)el.inert=true;
  let finished=false;
  function finish(){
    if(finished)return;
    finished=true;
    root.classList.remove('ae-boot-pending');
    for(const [el,wasInert] of inertBefore)el.inert=wasInert;
    window.removeEventListener('keydown',handleKey,true);
    overlay.classList.add('ae-boot-exit');
    window.setTimeout(()=>{
      overlay.remove();
      if(previousFocus&&previousFocus.isConnected&&typeof previousFocus.focus==='function')
        previousFocus.focus({preventScroll:true});
    },480);
  }
  function handleKey(event){
    if(event.key==='Escape'){event.preventDefault();finish();}
    else if(event.key==='Tab'){event.preventDefault();skip.focus({preventScroll:true});}
  }
  window.addEventListener('keydown',handleKey,true);
  skip.addEventListener('click',finish);
  overlay.tabIndex=-1;
  overlay.focus({preventScroll:true});
  const lines=[
    ['00.000','init: loading portfolio experience...','muted'],
    ['00.418','profile: Adham Elsayed','green'],
    ['01.104','role: AI Engineer / Generative AI','cyan'],
    ['01.721','stack: RAG · Machine Learning · Computer Vision','normal'],
    ['02.358','projects: MedFlow · Smart Basket · Smart Attendance','amber'],
    ['03.009','workflow: evidence → evaluation → deployment','cyan'],
    ['03.741','status: interface ready ✓','success'],
    ['04.112','opening: adhamelsayedai.github.io','green']
  ];
  const total=lines.reduce((sum,item)=>sum+Array.from(item[1]).length,0);
  let typed=0;
  const delay=ms=>new Promise(resolve=>window.setTimeout(resolve,ms));
  function updateProgress(){
    const value=Math.min(100,Math.round(typed/total*100));
    progress.style.width=value+'%';percent.textContent=String(value).padStart(2,'0')+'%';
  }
  (async()=>{
    await delay(150);
    for(let n=0;n<lines.length&&!finished;n++){
      const [time,description,tone]=lines[n];
      const row=document.createElement('div');row.className='ae-boot-row';row.dataset.tone=tone;
      const timestamp=document.createElement('span');timestamp.className='ae-boot-timestamp';
      timestamp.textContent='['+time+']';
      const arrow=document.createElement('span');arrow.className='ae-boot-prompt';arrow.textContent='›';
      const message=document.createElement('span');message.className='ae-boot-line';
      const text=document.createTextNode('');
      const cursor=document.createElement('span');cursor.className='ae-boot-cursor';
      cursor.setAttribute('aria-hidden','true');
      message.append(text,cursor);row.append(timestamp,arrow,message);logs.append(row);
      let position=0;
      for(const character of Array.from(description)){
        if(finished)return;
        text.data+=character;typed++;position++;
        if(position%3===0)updateProgress();
        if(position%5===0)logs.scrollTop=logs.scrollHeight;
        await delay(character===' '?8:13);
      }
      cursor.remove();updateProgress();
      await delay(n===lines.length-1?430:130);
    }
    if(finished)return;
    progress.style.width='100%';percent.textContent='100%';
    await delay(760);
    finish();
  })().catch(finish);
  }
  function start(){setTimeout(mount,900)}
  if(document.readyState==='complete')start();
  else window.addEventListener('load',start,{once:true});
})();
