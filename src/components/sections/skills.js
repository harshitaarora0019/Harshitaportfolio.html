export function renderSkillsSection(skillGroups, certifications = []) {
  return `
    <section class="content-section page-shell">
      <div class="section-heading">
        <div>
          <p class="eyebrow">Skills</p>
          <h2>Tools, methods, and strengths</h2>
        </div>
        <p>Focused on the stack I use most often for data analysis, project delivery, and practical automation.</p>
      </div>

      <div class="skills-grid">
        ${skillGroups
          .map(
            (group) => `
              <article class="skills-card">
                <h3>${group.title}</h3>
                <div class="tag-list">
                  ${group.items.map((item) => `<span>${item}</span>`).join('')}
                </div>
              </article>
            `,
          )
          .join('')}
      </div>

      <div class="cert-grid">
        ${certifications
          .map(
            (item) => `
              <article class="cert-card">
                <span>Certification</span>
                <strong>${item}</strong>
              </article>
            `,
          )
          .join('')}
      </div>
    </section>
  `;
}
