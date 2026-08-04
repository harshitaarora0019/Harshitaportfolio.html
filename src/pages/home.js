import { renderHero } from '../components/sections/hero.js';
import { renderProjectsSection } from '../components/sections/projects.js';
import { renderExperienceSection } from '../components/sections/timeline.js';
import { renderSkillsSection } from '../components/sections/skills.js';
import { renderContactSection } from '../components/sections/contact.js';

export function renderHomePage(data) {
  return `
    ${renderHero(data.profile)}

    <section class="content-section page-shell">
      <div class="section-heading">
        <div>
          <p class="eyebrow">Highlights</p>
          <h2>What stands out</h2>
        </div> </div>

      <div class="highlight-grid">
        ${data.profile.highlights
          .map(
            (item) => `
              <article class="highlight-card">
                <strong>${item}</strong>
              </article>
            `,
          )
          .join('')}
      </div>
    </section>

    ${renderProjectsSection(data.projects)}
    ${renderExperienceSection(data.experience)}
    ${renderSkillsSection(data.skillGroups, data.certifications)}
    ${renderContactSection(data.profile)}
  `;
}
