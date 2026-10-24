/* MedFlow — single hanging certificate over the genuine Top 5 poster.
 * Maintains the published Next.js static export without altering React's compiled bundle.
 */
(() => {
  'use strict';
  const poster = '/images/medflow/top-5-teams-2026.webp';
  const certificate = '/images/medflow/certificate-of-excellence-2026.webp';
  const projectUrl = 'https://github.com/AdhamElsayedAI/MedFlow-AI';
  const originalPhoto = '/images/medflow/team-photo.png';

  function enhance() {
    const section = document.getElementById('achievements');
    const card = section?.querySelector('.achievement-card');
    if (!card) return;

    // Older releases created a separate strip; delete those nodes, not React's card.
    section.querySelectorAll('.award-proof-strip').forEach(node => node.remove());

    const projectLink = card.querySelector('a.button-secondary[href="' + projectUrl + '"]');
    if (projectLink) {
      const label = Array.from(projectLink.childNodes).find(node => node.nodeType === 3);
      if (label && label.textContent.trim() !== 'Open Project') label.textContent = 'Open Project ';
      projectLink.setAttribute('aria-label', 'Open the MedFlow project on GitHub');
    }

    const media = card.querySelector('.award-media, .relative:has(> img[src="' + originalPhoto + '"])');
    if (!media) return;
    media.classList.add('award-media');
    const image = media.querySelector(':scope > img');
    if (image) {
      if (image.getAttribute('src') !== poster) image.setAttribute('src', poster);
      image.classList.add('award-poster-image');
      image.setAttribute('alt', 'Official CREATIVA and Orange Digital Center Top 5 Teams announcement including MedFlow');
    }

    // One certificate, inside the image only. Re-entry is deliberately idempotent.
    let hanging = media.querySelector(':scope > a.award-certificate-link');
    section.querySelectorAll('.award-certificate-link').forEach(node => {
      if (node !== hanging) node.remove();
    });
    if (!hanging) {
      hanging = document.createElement('a');
      hanging.className = 'award-certificate-link';
      hanging.href = certificate;
      hanging.target = '_blank';
      hanging.rel = 'noopener noreferrer';
      hanging.setAttribute('aria-label', 'View the original Certificate of Excellence');
      const certImg = document.createElement('img');
      certImg.src = certificate;
      certImg.alt = 'Certificate of Excellence for Adham Elsayed';
      certImg.loading = 'lazy';
      certImg.decoding = 'async';
      hanging.appendChild(certImg);
      media.appendChild(hanging);
    }
  }

  function start() {
    enhance();

    const section = document.getElementById('achievements');
    if (section && typeof MutationObserver !== 'undefined') {
      let pending = false;
      const observer = new MutationObserver(() => {
        if (pending) return;
        pending = true;
        window.requestAnimationFrame(() => {
          pending = false;
          enhance();
        });
      });
      observer.observe(section, {childList: true, subtree: true});
    }
  }
  // React owns the initial Next.js export. Do not mutate its markup until the
  // shared post-hydration gate has completed, even on cached navigations.
  if (typeof window.portfolioAfterHydration === 'function') {
    window.portfolioAfterHydration(start);
  } else {
    window.addEventListener('load', () => requestAnimationFrame(start), {once:true});
  }
})();