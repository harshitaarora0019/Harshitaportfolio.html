export function mountAnimations() {
  document.documentElement.classList.add('is-ready');

  const cards = document.querySelectorAll('.project-card, .stat-card, .highlight-card, .contact-card, .timeline-item__card');

  cards.forEach((card) => {
    card.addEventListener('mouseenter', () => card.classList.add('is-hovered'));
    card.addEventListener('mouseleave', () => card.classList.remove('is-hovered'));
  });

  const header = document.querySelector('.site-header');
  const openButton = document.querySelector('.header-menu-button');
  const drawer = document.querySelector('.mobile-drawer');
  const closeTargets = document.querySelectorAll('[data-drawer-close]');

  if (!header || !openButton || !drawer) {
    return;
  }

  const setDrawerState = (isOpen) => {
    header.classList.toggle('is-drawer-open', isOpen);
    drawer.classList.toggle('is-open', isOpen);
    openButton.setAttribute('aria-expanded', String(isOpen));
    drawer.setAttribute('aria-hidden', String(!isOpen));
    document.body.classList.toggle('is-drawer-open', isOpen);
    drawer.hidden = !isOpen;
  };

  openButton.addEventListener('click', () => {
    setDrawerState(!drawer.classList.contains('is-open'));
  });

  closeTargets.forEach((target) => {
    target.addEventListener('click', () => setDrawerState(false));
  });

  drawer.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setDrawerState(false));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      setDrawerState(false);
    }
  });
}

export default mountAnimations;
