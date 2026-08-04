export function renderHeader(profile) {
  const navigation = [
    ['Home', './index.html'],
    ['About', './about.html'],
    ['Experience', './experience.html'],
    ['Projects', './projects.html'],
    ['Contact', './contact.html'],
  ];

  return `
    <header class="site-header">
      <div class="site-header__inner">
        <a class="brand" href="./index.html" aria-label="Go to home page">
          <span class="brand__mark">H♡</span>
          <span class="brand__copy">
            <strong>${profile.name}</strong>
            <span>${profile.shortTitle}</span>
          </span>
        </a>

        <nav class="site-nav" aria-label="Primary navigation">
          ${navigation.map(([label, href]) => `<a href="${href}">${label}</a>`).join('')}
        </nav>

        <div class="site-header__actions">
          <button class="header-menu-button" type="button" aria-label="Open navigation menu" aria-expanded="false" aria-controls="mobile-drawer">
            Menu
          </button>
          <a class="header-cta" href="${profile.resumeLink}" target="_blank" rel="noreferrer">Resume</a>
        </div>
      </div>

      <div class="mobile-drawer" id="mobile-drawer" aria-hidden="true" hidden>
        <div class="mobile-drawer__overlay" data-drawer-close></div>
        <div class="mobile-drawer__panel" role="dialog" aria-modal="true" aria-label="Mobile navigation">
          <div class="mobile-drawer__top">
            <strong>${profile.name}</strong>
            <button class="mobile-drawer__close" type="button" aria-label="Close navigation menu" data-drawer-close>Close</button>
          </div>

          <nav class="mobile-drawer__nav" aria-label="Mobile navigation">
            ${navigation.map(([label, href]) => `<a href="${href}">${label}</a>`).join('')}
          </nav>

          <a class="button button--solid mobile-drawer__resume" href="${profile.resumeLink}" target="_blank" rel="noreferrer">View Resume</a>
        </div>
      </div>
    </header>
  `;
}
