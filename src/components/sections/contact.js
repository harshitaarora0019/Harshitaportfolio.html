export function renderContactSection(profile) {
  return `
    <section class="content-section page-shell" id="contact">
      <div class="section-heading">
        <div>
          <p class="eyebrow">Contact</p>
          <h2>Let’s build something useful</h2>
        </div>
        <p>I’m open to data analyst, Python, BI, and AI/ML opportunities, plus collaborations around dashboards and analytics products.</p>
      </div>

      <div class="contact-grid">
        ${profile.contacts
          .map(
            (contact) => `
              <a class="contact-card" href="${contact.href}" ${contact.href.startsWith('http') ? 'target="_blank" rel="noreferrer"' : ''}>
                <span>${contact.label}</span>
                <strong>${contact.value}</strong>
              </a>
            `,
          )
          .join('')}
      </div>

      <div class="cta-banner">
        <div>
          <p class="eyebrow">Availability</p>
          <h3>${profile.availability}</h3>
        </div>
        <a class="button button--solid" href="${profile.socialLinks[1].href}" target="_blank" rel="noreferrer">Message on LinkedIn</a>
      </div>
    </section>
  `;
}
