export function renderFooter(profile) {
  const year = new Date().getFullYear();

  return `
    <footer class="site-footer">
      <div class="site-footer__inner page-shell">
        <div>
          <strong>${profile.name}</strong>
          <p>${profile.shortTitle} · ${profile.location}</p>
        </div>
        <div class="site-footer__links">
          <a href="${profile.socialLinks[0].href}" target="_blank" rel="noreferrer">GitHub</a>
          <a href="${profile.socialLinks[1].href}" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:${profile.contacts[0].value}">Email</a>
        </div>
        <p>© ${year} ${profile.name}. Built with a minimal neobrutalist system.</p>
      </div>
    </footer>
  `;
}
