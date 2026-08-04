import { renderExperienceSection, renderEducationSection } from '../components/sections/timeline.js';
import { renderSkillsSection } from '../components/sections/skills.js';

export function renderExperiencePage(data) {
  return `
    <section class="content-section page-shell intro-block">
      <div class="section-heading">
        <div>
          <p class="eyebrow">Experience</p>
          <h1>Work and leadership</h1>
        </div>
        <p>Roles and responsibilities that shaped the portfolio story.</p>
      </div>
    </section>

    ${renderExperienceSection(data.experience)}
    ${renderEducationSection(data.education)}
    ${renderSkillsSection(data.skillGroups, data.certifications)}
  `;
}
