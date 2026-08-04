export function renderProjectsSection(projects, heading = 'Projects', intro = '') {
  return `
    <section class="content-section page-shell">
      <div class="section-heading">
        <div>
          <p class="eyebrow">Projects</p>
          <h2>${heading}</h2>
        </div>
        <p>${intro}</p>
      </div>

      <div class="project-grid">
        ${projects
          .map(
            (project) => `
              <article class="project-card">
                <div class="project-card__top">
                  <span>${project.category}</span>
                  <a href="${project.link}" target="_blank" rel="noreferrer">Open</a>
                </div>
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="tag-list">
                  ${project.tags.map((tag) => `<span>${tag}</span>`).join('')}
                </div>
              </article>
            `,
          )
          .join('')}
      </div>
    </section>
  `;
}
