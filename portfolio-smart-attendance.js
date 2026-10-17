/* Published Next.js static export: add the Smart Attendance card after hydration.
 * Keep the original compiled Next.js tree untouched, as with other static-export enhancements.
 * The card inherits the site's existing responsive styles and pointer motion.
 */
(() => {
  'use strict';
  const repoUrl = 'https://github.com/AdhamElsayedAI/Smart-Attendance-System';
  const cardHTML = `
    <div class="project-poster-v5 attendance-poster-v1">
      <img class="attendance-project-art"
           src="/images/smart-attendance/attendanceos-portfolio.webp?v=20261016-hoodie-hd"
           alt="Illustrative AttendanceOS interface concept showing face recognition, eye-blink verification, and attendance tracking; not an actual app screenshot"
           width="1672" height="941" loading="lazy" decoding="async" />
      <span class="attendance-concept-label">INTERFACE CONCEPT</span>
    </div>
    <div class="project-card-body-v5">
      <div>
        <p class="project-card-category-v5">Computer Vision / AttendanceOS</p>
        <h3 class="project-card-title-v5">Smart Attendance System</h3>
        <p class="project-card-description-v5">Exam-scoped attendance prototype built with React and FastAPI, face recognition, eye-blink verification, exam rosters, and SQLite reporting.</p>
      </div>
      <div class="project-metrics-v5 project-metrics-compact-v5 attendance-project-metrics">
        <div><strong>Face + Blink</strong><span>Identity and liveness checks</span></div>
        <div><strong>Exam-scoped</strong><span>Attendance records</span></div>
      </div>
      <p class="attendance-project-note">Local prototype — live blink-to-attendance hardware verification pending.</p>
      <div class="project-tags-v5">
        <span>React</span><span>TypeScript</span><span>FastAPI</span><span>OpenCV</span><span>dlib</span><span>SQLite</span>
      </div>
      <a href="${repoUrl}" target="_blank" rel="noopener noreferrer" class="project-link-v5">
        View repository
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          class="lucide lucide-external-link h-3.5 w-3.5" aria-hidden="true">
          <path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
        </svg>
      </a>
    </div>`;
  function mount() {
    const grid = document.querySelector('#projects .projects-grid-v5');
    if (!grid || grid.querySelector('.project-card-attendance')) return;
    const card = document.createElement('div');
    card.className = 'project-card-v5 project-card-attendance group';
    card.dataset.portfolioProject = 'smart-attendance';
    card.innerHTML = cardHTML;
    // Append after the existing project cards; no changes to earlier items.
    grid.appendChild(card);
  }
  function start() {
    const section = document.querySelector('#projects');
    if (!section) return;
    mount();
    // A Next.js re-render may replace the project grid. Reinsert only if necessary.
    const observer = new MutationObserver(() => {
      if (!section.querySelector('.project-card-attendance')) mount();
    });
    observer.observe(section, { childList: true, subtree: true });
    window.setTimeout(mount, 1800);
  }
  // Wait until the exported React tree has had time to hydrate.
  if (document.readyState === 'complete') window.setTimeout(start, 650);
  else window.addEventListener('load', () => window.setTimeout(start, 650), { once: true });
})();