/* Adham Elsayed portfolio opening sequence.
 * Independent enhancement mounted after Next.js hydration.
 * The faint animated code uses illustrative (not executable) AI/RAG pseudocode. */
(()=>{'use strict';
  const root=document.documentElement;
  let mounted=false;
  function mount(){
    if(mounted||(location.hash&&location.hash!=='#home')||
      matchMedia('(prefers-reduced-motion: reduce)').matches||
      root.classList.contains('motion-off')||!document.body)return;
    mounted=true;
    const overlay=document.createElement('section');
    overlay.id='ae-boot-intro';
    overlay.tabIndex=-1;
    overlay.setAttribute('role','dialog');
    overlay.setAttribute('aria-modal','true');
    overlay.setAttribute('aria-label','Adham Elsayed portfolio introduction');
    overlay.setAttribute('aria-describedby','ae-boot-description');
    overlay.innerHTML=[
      '<div class="ae-boot-codefield" data-side="left" aria-hidden="true"></div>',
      '<div class="ae-boot-codefield" data-side="right" aria-hidden="true"></div>',
      '<div class="ae-boot-shell">',
      '<div class="ae-boot-top">',
      '<span class="ae-boot-brand">Adham Elsayed</span>',
      '<span class="ae-boot-divider" aria-hidden="true">AI ENGINEERING / PORTFOLIO</span>',
      '<button type="button" class="ae-boot-skip" aria-label="Skip introduction and open portfolio">Skip intro ↗</button>',
      '</div>',
      '<div class="ae-boot-main">',
      '<p class="ae-boot-sr-only" id="ae-boot-description">Introduction to the AI engineering portfolio of Adham Elsayed. Press Escape or use the Skip intro button to continue.</p>',
      '<div class="ae-boot-eyebrow" aria-hidden="true">INITIALIZING PORTFOLIO EXPERIENCE</div>',
      '<div class="ae-boot-logs" aria-hidden="true"></div>',
      '<div class="ae-boot-bottom" aria-hidden="true">',
      '<div class="ae-boot-bottomline"><span>ENGINEERING / RUNTIME</span><span class="ae-boot-percent">00%</span></div>',
      '<div class="ae-boot-track"><div class="ae-boot-bar"></div></div>',
      '</div></div></div>'
    ].join('');
    const fragments=[
      {side:'left',file:'retrieval.py  /  evidence layer',rows:[
        '<span class="ae-code-keyword">from</span> rag <span class="ae-code-keyword">import</span> HybridRetriever',
        'query = embed(user_prompt)',
        'docs = retriever.search(query)',
        'ranked = rerank(docs)',
        '',
        '<span class="ae-code-keyword">if</span> evidence.is_grounded:',
        '    answer = tutor.generate(ranked)',
        '<span class="ae-code-keyword">else</span>: abstain()'
      ]},
      {side:'right',file:'evaluation.py  /  quality gates',rows:[
        '<span class="ae-code-keyword">def</span> <span class="ae-code-function">validate</span>(output):',
        '    citations = check_sources(output)',
        '    grounded = evidence.verify(output)',
        '',
        '    <span class="ae-code-keyword">return</span> grounded <span class="ae-code-keyword">and</span> citations',
        '',
        'metrics = evaluate(pipeline)',
        'deploy(<span class="ae-code-string">"verified"</span>)'
      ]}
    ];
    for(const fragment of fragments){
      const holder=overlay.querySelector('.ae-boot-codefield[data-side="'+fragment.side+'"]');
      const header=document.createElement('span');header.className='ae-code-filename';header.textContent=fragment.file;holder.appendChild(header);
      fragment.rows.forEach((html,i)=>{
        const line=document.createElement('span');line.className='ae-code-line';
        line.style.setProperty('--line-index',i);line.innerHTML=html||' ';
        holder.appendChild(line);
      });
    }
    const logs=overlay.querySelector('.ae-boot-logs');
    const progress=overlay.querySelector('.ae-boot-bar');
    const percent=overlay.querySelector('.ae-boot-percent');
    const skip=overlay.querySelector('.ae-boot-skip');
    const priorFocus=document.activeElement;
    const siblings=[...document.body.children].filter(e=>e!==overlay&&e.tagName!=='SCRIPT');
    const previousInert=siblings.map(e=>[e,e.inert]);
    let finished=false;
    root.classList.add('ae-boot-pending');
    document.body.appendChild(overlay);
    for(const element of siblings)element.inert=true;
    function finish(){
      if(finished)return;
      finished=true;
      root.classList.remove('ae-boot-pending');
      for(const [element,oldValue] of previousInert)element.inert=oldValue;
      window.removeEventListener('keydown',keyHandler,true);
      overlay.classList.add('ae-boot-exit');
      setTimeout(()=>{
        overlay.remove();
        if(priorFocus&&priorFocus.isConnected&&typeof priorFocus.focus==='function')
          priorFocus.focus({preventScroll:true});
      },520);
    }
    function keyHandler(e){
      if(e.key==='Escape'){e.preventDefault();finish()}
      else if(e.key==='Tab'){e.preventDefault();skip.focus({preventScroll:true})}
    }
    window.addEventListener('keydown',keyHandler,true);
    skip.addEventListener('click',finish);
    overlay.focus({preventScroll:true});
    const lines=[
      ['00.000','init: loading portfolio experience...','muted'],
      ['00.418','profile: Adham Elsayed','green'],
      ['01.104','role: AI Engineer / Generative AI','cyan'],
      ['01.721','stack: RAG · Machine Learning · Computer Vision','normal'],
      ['02.358','projects: MedFlow · Smart Basket · Smart Attendance','amber'],
      ['03.009','workflow: retrieval → evaluation → APIs → deployment','cyan'],
      ['03.741','status: interface ready ✓','success'],
      ['04.112','opening: adhamelsayedai.github.io','green']
    ];
    const total=lines.reduce((n,row)=>n+Array.from(row[1]).length,0);
    let typed=0;
    const wait=ms=>new Promise(resolve=>setTimeout(resolve,ms));
    function progressUpdate(){
      const value=Math.min(100,Math.round(typed/total*100));
      progress.style.width=value+'%';percent.textContent=String(value).padStart(2,'0')+'%';
    }
    (async()=>{
      await wait(155);
      for(let n=0;n<lines.length&&!finished;n++){
        const [time,message,tone]=lines[n];
        const row=document.createElement('div');row.className='ae-boot-row';row.dataset.tone=tone;
        const timestamp=document.createElement('span');timestamp.className='ae-boot-timestamp';timestamp.textContent='['+time+']';
        const prompt=document.createElement('span');prompt.className='ae-boot-prompt';prompt.textContent='›';
        const content=document.createElement('span');content.className='ae-boot-line';
        const text=document.createTextNode('');
        const caret=document.createElement('span');caret.className='ae-boot-cursor';caret.setAttribute('aria-hidden','true');
        content.append(text,caret);row.append(timestamp,prompt,content);logs.append(row);
        let position=0;
        for(const character of Array.from(message)){
          if(finished)return;
          text.data+=character;typed++;position++;
          if(position%2===0)progressUpdate();
          if(position%5===0)logs.scrollTop=logs.scrollHeight;
          await wait(character===' '?9:15);
        }
        caret.remove();progressUpdate();
        await wait(n===lines.length-1?460:160);
      }
      if(finished)return;
      progress.style.width='100%';percent.textContent='100%';
      await wait(740);
      finish();
    })().catch(finish);
  }
  function start(){setTimeout(mount,900)}
  if(document.readyState==='complete')start();
  else window.addEventListener('load',start,{once:true});
})();
