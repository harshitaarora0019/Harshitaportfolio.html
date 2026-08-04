function renderTimeline(items, label) {
  return `
    <section class="content-section page-shell">
      <div class="section-heading">
        <div>
          <p class="eyebrow">${label}</p>
          <h2>${label}</h2>
        </div>
      </div>

      <div class="timeline">
        ${items
          .map(
            (item) => `
              <article class="timeline-item">
                <div class="timeline-item__marker"></div>
                <div class="timeline-item__card">
                  <div class="timeline-item__header">
                    <div>
                      <h3>${item.role || item.school}</h3>
                      <p>${item.company || item.degree}</p>
                    </div>
                    <span>${item.period}</span>
                  </div>
                  ${item.location ? `<p class="timeline-item__location">${item.location}</p>` : ''}
                  ${item.bullets ? `<ul>${item.bullets.map((bullet) => `<li>${bullet}</li>`).join('')}</ul>` : ''}
                </div>
              </article>
            `,
          )
          .join('')}
      </div>
    </section>
  `;
}

export function renderExperienceSection(experience) {
  return renderTimeline(experience, 'Experience');
}

export function renderEducationSection(education) {
  return renderTimeline(education, 'Education');
}
