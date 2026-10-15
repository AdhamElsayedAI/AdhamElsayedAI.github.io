/* Enhancement for the published Next.js static export.
   Runs after hydration; keeps original React markup intact. */
(() => {
  'use strict';
  const poster = '/images/medflow/top-5-teams-2026.webp';
  const certificate = '/images/medflow/certificate-of-excellence-2026.webp';
  const original = '/images/medflow/team-photo.png';

  function enhance() {
    const section = document.getElementById('achievements');
    if (!section) return;
    // Keep the exported React markup unchanged; update the action after hydration.
    const projectAction = section.querySelector('.achievement-card a.button-secondary[href="https://github.com/AdhamElsayedAI/MedFlow-AI"]');
    if (projectAction) {
      const textNode = Array.from(projectAction.childNodes).find(node => node.nodeType === Node.TEXT_NODE);
      if (textNode && textNode.textContent.trim() !== 'Open Project') {
        textNode.textContent = 'Open Project ';
      }
      projectAction.setAttribute('aria-label', 'Open the MedFlow project on GitHub');
      projectAction.title = 'Open MedFlow project';
    }
    const media = section.querySelector('.achievement-card .relative:has(> img[src="' + original + '"]), .achievement-card .award-media');
    if (!media) return;
    media.classList.add('award-media');
    const photo = media.querySelector(':scope > img');
    if (photo && photo.getAttribute('src') !== poster) {
      photo.setAttribute('src', poster);
      photo.setAttribute('alt', 'Official Top 5 Teams announcement featuring MedFlow at Orange Digital Center and CREATIVA');
      photo.setAttribute('loading', 'lazy');
      photo.classList.add('award-poster-image');
    }
    if (!media.querySelector('.award-certificate-link')) {
      const a = document.createElement('a');
      a.className = 'award-certificate-link';
      a.href = certificate;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.setAttribute('aria-label', 'Open the original Certificate of Excellence for Adham Elsayed');
      a.title = 'View the original award certificate';
      const img = document.createElement('img');
      img.src = certificate;
      img.alt = 'Certificate of Excellence for Adham Elsayed, Best Participant Award and Top 5 Teams';
      img.loading = 'lazy';
      img.decoding = 'async';
      a.appendChild(img);
      const tag = document.createElement('span');
      tag.className = 'award-certificate-link-label';
      tag.textContent = 'VIEW CERTIFICATE ↗';
      a.appendChild(tag);
      media.appendChild(a);
    }
  }

  // Wait until the Next.js client has had a chance to hydrate.
  function start() {
    window.setTimeout(enhance, 600);
    window.setTimeout(enhance, 1800);
    const section = document.getElementById('achievements');
    if (section && typeof MutationObserver !== 'undefined') {
      let scheduled = false;
      const observer = new MutationObserver(() => {
        if (scheduled) return;
        scheduled = true;
        window.requestAnimationFrame(() => { scheduled = false; enhance(); });
      });
      observer.observe(section, { childList: true, subtree: true });
    }
  }
  if (document.readyState === 'complete') start();
  else window.addEventListener('load', start, { once: true });
})();