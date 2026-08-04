import { renderProjectsSection } from '../components/sections/projects.js';

export function renderProjectsPage(data) {
  return `
    <section class="content-section page-shell intro-block">
      <div class="section-heading">
        <div>
          <p class="eyebrow">GitHub</p>
          <h1>Projects</h1>
        </div>
        <p>Selected public repositories pulled from the GitHub profile and the portfolio brief.</p>
      </div>
    </section>

    ${renderProjectsSection(data.projects, 'GitHub Repositories', 'A direct look at the public repos that best match the portfolio story.')}
  `;
}
