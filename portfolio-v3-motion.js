/* Progressive enhancement for static-export V3. Preserve Next.js hydration behavior. */
(() => {
  'use strict';
  const TILE = '.section-dot-banner, .panel-card, .terminal-card, .project-card-v5, .achievement-card, .experience-card-v5, .cert-card, .contact-row, .contact-cta';
  const REVEAL = '.section-dot-banner, .section-heading-v5-copy, #about .panel-card, #about .terminal-card, #skills .panel-card, #achievements .achievement-card';
  const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  const pointerQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
  const doc = document.documentElement;
  let observer;
  let mutation;
  let ticking = false;
  let nextNodes = [];

  function enabled() { return !motionQuery.matches && !doc.classList.contains('motion-off'); }
  function pointerEnabled() { return enabled() && pointerQuery.matches; }

  function armTile(card) {
    if (card.dataset.motionTile) return;
    card.dataset.motionTile = 'true';
    card.classList.add('motion-card');
    let raf = 0;
    const render = (event) => {
      if (!pointerEnabled()) return;
      const r = card.getBoundingClientRect();
      if (!r.width || !r.height) return;
      const px = Math.min(1, Math.max(0, (event.clientX - r.left) / r.width));
      const py = Math.min(1, Math.max(0, (event.clientY - r.top) / r.height));
      const dx = (px - .5) * 2;
      const dy = (py - .5) * 2;
      const xAxis = -dy;
      const yAxis = dx;
      const axisLen = Math.hypot(xAxis, yAxis) || 1;
      const degrees = Math.hypot(dx, dy) * 3.4;
      card.style.rotate = (xAxis / axisLen).toFixed(4)+' '+(yAxis / axisLen).toFixed(4)+' 0 '+degrees.toFixed(2)+'deg';
      card.style.setProperty('--motion-x', (px * 100).toFixed(1)+'%');
      card.style.setProperty('--motion-y', (py * 100).toFixed(1)+'%');
      card.classList.add('is-motion-hover');
      card.classList.remove('is-motion-settling');
    };
    card.addEventListener('pointerenter', (e) => {
      if (!pointerEnabled() || e.pointerType === 'touch') return;
      card.classList.remove('is-motion-settling');
      render(e);
    });
    card.addEventListener('pointermove', e => {
      if (!pointerEnabled() || e.pointerType === 'touch') return;
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => render(e));
    }, {passive: true});
    card.addEventListener('pointerleave', () => {
      if (raf) cancelAnimationFrame(raf);
      card.classList.remove('is-motion-hover');
      card.classList.add('is-motion-settling');
      card.style.rotate = '0 0 1 0deg';
      card.style.setProperty('--motion-x', '50%');
      card.style.setProperty('--motion-y', '50%');
    });
  }

  function armReveal(node) {
    if (node.dataset.motionReveal) return;
    node.dataset.motionReveal = 'true';
    node.classList.add('motion-reveal');
    // No re-fading an element already in the initial viewport.
    const r = node.getBoundingClientRect();
    if (r.top < innerHeight * .94) { node.dataset.motionVisible = 'true'; return; }
    node.dataset.motionVisible = 'false';
    if (observer) observer.observe(node);
    else node.dataset.motionVisible = 'true';
  }

  function scan(scope = document) {
    scope.querySelectorAll(TILE).forEach(armTile);
    scope.querySelectorAll('.section-dot-banner').forEach(el => { if (!el.dataset.titleAnimationBound) { el.dataset.titleAnimationBound='1'; const io=new IntersectionObserver(entries=>{for(const entry of entries) if(entry.isIntersecting){entry.target.classList.add('is-title-visible');io.unobserve(entry.target)}},{threshold:.1});io.observe(el); } });
    scope.querySelectorAll(REVEAL).forEach(armReveal);
  }
  function flush() {
    ticking = false;
    const roots = nextNodes; nextNodes = [];
    for (const n of roots) if (n.isConnected) scan(n);
  }
  function start() {
    if (doc.dataset.motionV3Initialized) return;
    doc.dataset.motionV3Initialized = 'true';
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(entries => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.dataset.motionVisible = 'true';
          observer.unobserve(entry.target);
        }
      }, { threshold: .04, rootMargin: '0px 0px -30px 0px' });
    }
    scan();
    // Styles are activated after the initial elements have been classified.
    if (enabled()) doc.classList.add('motion-v3-on');
    mutation = new MutationObserver(changes => {
      for (const c of changes) for (const n of c.addedNodes) {
        if (n.nodeType !== 1) continue;
        nextNodes.push(n);
      }
      if (nextNodes.length && !ticking) { ticking = true; requestAnimationFrame(flush); }
    });
    const main = document.querySelector('main');
    if (main) mutation.observe(main, {childList: true, subtree: true});
    motionQuery.addEventListener?.('change', () => doc.classList.toggle('motion-v3-on', enabled()));
    new MutationObserver(() => {
      const wanted = enabled();
      if (doc.classList.contains('motion-v3-on') !== wanted) doc.classList.toggle('motion-v3-on', wanted);
    }).observe(doc, {attributes:true,attributeFilter:['class']});
  }
  // Let exported React/Next.js hydrate first; this only decorates existing DOM.
  if (document.readyState === 'complete') window.setTimeout(start, 350);
  else window.addEventListener('load', () => window.setTimeout(start, 350), {once: true});
})();
