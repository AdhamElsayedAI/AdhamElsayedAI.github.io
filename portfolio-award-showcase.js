/* MedFlow achievement enhancement — idempotent and hydration-safe.
   The published site is a Next.js static export without its editable source. */
(() => {
  'use strict';
  const poster = '/images/medflow/top-5-teams-2026.webp';
  const certificate = '/images/medflow/certificate-of-excellence-2026.webp';
  const project = 'https://github.com/AdhamElsayedAI/MedFlow-AI';

  function enhance() {
    const section = document.getElementById('achievements');
    const card = section?.querySelector('.achievement-card');
    if (!card) return;

    const projectLink = card.querySelector('a.button-secondary[href="' + project + '"]');
    if (projectLink) {
      const node = Array.from(projectLink.childNodes).find(n => n.nodeType === 3);
      if (node && node.textContent.trim() !== 'Open Project') node.textContent = 'Open Project ';
      projectLink.setAttribute('aria-label', 'Open the MedFlow project on GitHub');
    }

    const media = card.querySelector('.award-media, .relative:has(> img[src="/images/medflow/team-photo.png"])');
    if (media) {
      media.classList.add('award-media');
      const picture = media.querySelector(':scope > img');
      if (picture) {
        if (picture.getAttribute('src') !== poster) picture.setAttribute('src', poster);
        picture.alt = 'Official Orange Digital Center Top 5 Teams poster including MedFlow';
        picture.classList.add('award-poster-image');
      }
    }

    // Remove any legacy suspended thumbnails. Never move or duplicate an existing link.
    section.querySelectorAll('.award-certificate-link').forEach(el => el.remove());

    // Only create one independent, non-React-managed evidence row.
    if (section.querySelector('.award-proof-strip[data-award-version="2"]')) return;
    section.querySelectorAll('.award-proof-strip').forEach(el => el.remove());

    const strip = document.createElement('div');
    strip.className = 'award-proof-strip';
    strip.dataset.awardVersion = '2';
    strip.innerHTML = `
      <a class="award-proof-thumb" href="${certificate}" target="_blank"
         rel="noopener noreferrer" aria-label="View the original Certificate of Excellence">
        <img src="${certificate}" alt="Original Certificate of Excellence for Adham Elsayed"
             width="1448" height="1086" loading="lazy" decoding="async" />
      </a>
      <div class="award-proof-copy">
        <span class="award-proof-kicker">Official recognition</span>
        <h3>Certificate of Excellence</h3>
        <p>Top 5 Teams · Best Participant Award</p>
        <span class="award-proof-subtext">Orange Digital Center · CREATIVA Hub, Mansoura</span>
      </div>
      <a class="award-proof-action" href="${certificate}" target="_blank"
         rel="noopener noreferrer" aria-label="Open the original certificate full size">
         View certificate <span aria-hidden="true">↗</span>
      </a>`;
    card.insertAdjacentElement('afterend', strip);
  }

  // Wait for the Next.js page to hydrate, then recheck twice without observers.
  function start() {
    window.setTimeout(enhance, 500);
    window.setTimeout(enhance, 1400);
    window.setTimeout(enhance, 3000);
  }
  if (document.readyState === 'complete') start();
  else window.addEventListener('load', start, {once: true});
})();
