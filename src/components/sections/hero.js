export function renderHero(profile) {
  return `
    <section class="hero shell-grid" id="top">
      <div class="hero__content">
        <div class="hero__photo-wrap">
          <img class="hero__photo" src="${profile.avatarUrl}" alt="${profile.avatarAlt}" />
        </div>
        <br>
        <h1>${profile.name}</h1>
        <p class="hero__summary">${profile.headline}</p>
        <p class="hero__body">${profile.summary}</p>

        <div class="hero__actions">
          <a class="button button--solid" href="${profile.resumeLink}" target="_blank" rel="noreferrer">View Resume</a>
          <a class="button button--ghost" href="./projects.html">Selected Work</a>
        </div>

        <ul class="meta-list" aria-label="Quick profile facts">
          ${profile.quickFacts.map((fact) => `<li>${fact}</li>`).join('')}
        </ul>
      </div>

      <aside class="hero__panel">
        <div class="profile-card">
          <p class="profile-card__label">Currently based in</p>
          <h2>${profile.location}</h2>
          <p>${profile.availability}</p>
        </div>

        <div class="stat-grid">
          ${profile.stats
            .map(
              (stat) => `
                <article class="stat-card">
                  <span>${stat.label}</span>
                  <strong>${stat.value}</strong>
                </article>
              `,
            )
            .join('')}
        </div>
      </aside>
    </section>
  `;
}
