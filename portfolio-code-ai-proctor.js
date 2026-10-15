/* Safe DOM enhancement for the published Next.js static export.
 * No fictitious accuracy: show only architecture counts verified from the project repository.
 */
(() => {
  'use strict';
  const bio = 'Self-hosted AI exam proctoring prototype using YOLO to classify webcam frames as cheating or normal. Includes configurable alert thresholds, incident evidence for teacher review, and organization, teacher and student portals powered by FastAPI, with optional Azure SQL audit logging.';
  function enhance() {
    const card = document.querySelector('#projects .project-card-shield');
    if (!card) return;
    const description = card.querySelector('.project-card-description-v5');
    if (description && description.textContent !== bio) description.textContent = bio;
    const body = card.querySelector('.project-card-body-v5');
    const tags = body?.querySelector('.project-tags-v5');
    if (!body || !tags) return;
    if (!body.querySelector('.proctor-metrics-v6')) {
      const metrics = document.createElement('div');
      metrics.className = 'project-metrics-v5 project-metrics-compact-v5 proctor-metrics-v6';
      const a = document.createElement('div');
      const aStrong = document.createElement('strong');
      const aLabel = document.createElement('span');
      aStrong.textContent = '2 classes';
      aLabel.textContent = 'Cheating / Normal';
      a.append(aStrong, aLabel);
      const b = document.createElement('div');
      const bStrong = document.createElement('strong');
      const bLabel = document.createElement('span');
      bStrong.textContent = '3 portals';
      bLabel.textContent = 'Organization · Teacher · Student';
      b.append(bStrong, bLabel);
      metrics.append(a, b);
      body.insertBefore(metrics, tags);
    }
    if (!body.querySelector('.proctor-metric-integrity')) {
      const note = document.createElement('p');
      note.className = 'proctor-metric-integrity';
      note.textContent = 'Model accuracy / F1: not reported in the public evaluation results.';
      body.insertBefore(note, tags);
    }
  }
  function start() {
    enhance();
    window.setTimeout(enhance, 700);
    window.setTimeout(enhance, 2000);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start, {once: true});
  } else start();
})();