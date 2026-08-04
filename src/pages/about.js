import { renderEducationSection } from '../components/sections/timeline.js';
import { renderSkillsSection } from '../components/sections/skills.js';

export function renderAboutPage(data) {
  return `
    <section class="content-section page-shell intro-block">
      <div class="section-heading">
        <div>
          <p class="eyebrow">About</p>
          <h1>${data.profile.name}</h1>
        </div>
      </div>

      <div class="intro-panel">
        <p>${data.profile.about}</p>
        <div class="info-strip">
          ${data.profile.quickFacts.map((fact) => `<span>${fact}</span>`).join('')}
        </div>
      </div>
    </section>

    ${renderEducationSection(data.education)}
    ${renderSkillsSection(data.skillGroups, data.certifications)}
  `;
}
