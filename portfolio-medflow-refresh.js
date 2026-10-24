/* Idempotent MedFlow data enhancement after Next.js static-export hydration.
   Original screenshots, gallery controls, and other projects remain React-owned. */
(() => {
  'use strict';
  const target = '#projects .projects-grid-v5 > .project-card-featured-v5:first-child';
  const stats = [
    ['100%', 'Citation ID validity', 'Live grounded evaluation: seven cases'],
    ['7 / 7', 'Cases passed', 'Seven-case grounded-generation evaluation'],
    ['87.50%', 'Hit@4', 'Frozen retrieval evaluation: 16 ground-truth questions'],
    ['0', 'Fabricated citations', 'In the seven live grounded-generation cases'],
    ['0.7031', 'MRR', 'Frozen retrieval evaluation: 16 ground-truth questions']
  ];
  function update() {
    const card = document.querySelector(target);
    if (!card || !card.querySelector('a[href="https://github.com/AdhamElsayedAI/MedFlow-AI"]')) return;
    const metrics = card.querySelector('.project-metrics-v5');
    if (!metrics) return;
    if (metrics.dataset.medflowRefresh !== '1') {
      metrics.classList.add('medflow-metrics-v2');
      metrics.innerHTML = stats.map(([value, label, context]) =>
        '<div class="medflow-stat" aria-label="' + value + ' — ' + label + '. ' + context + '">' +
          '<strong>' + value + '</strong><span>' + label + '</span></div>'
      ).join('');
      metrics.dataset.medflowRefresh = '1';
    }
    const description = card.querySelector('.project-card-description-v5');
    if (description) {
      description.textContent = 'Thyroid-focused clinical RAG with ranked evidence retrieval, citation-resolved generation and safety checks. Unsupported or high-risk requests trigger caution, abstention or redirection.';
    }
    const scope = card.querySelector('.project-metric-note-v5');
    if (scope) scope.textContent = 'Internal engineering evaluations · Retrieval: 16 questions · Grounded generation: 7 cases · Not clinical accuracy.';
    const validation = card.querySelector('.project-validation-note-v5');
    if (validation) validation.textContent = 'In 7 live test cases: 100% citation ID validity, metadata resolution and cited-claim coverage; zero fabricated citations; all 3 negative scenarios abstained.';
    const image = card.querySelector('.project-featured-media-v5 > img[src="/images/medflow/rag-chat.png"]');
    if (image) image.alt = 'MedFlow evidence-grounded clinical AI interface; portfolio concept visualization';
  }
  function start() {
    update();

  }
  // React owns the initial Next.js export. Do not mutate its markup until the
  // shared post-hydration gate has completed, even on cached navigations.
  if (typeof window.portfolioAfterHydration === 'function') {
    window.portfolioAfterHydration(start);
  } else {
    window.addEventListener('load', () => requestAnimationFrame(start), {once:true});
  }
})();