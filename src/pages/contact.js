import { renderContactSection } from '../components/sections/contact.js';

export function renderContactPage(data) {
  return `
    <section class="content-section page-shell intro-block">
      <div class="section-heading">
        <div>
          <p class="eyebrow">Contact</p>
          <h1>Open for the right fit</h1>
        </div>
        <p>Use any of the direct links below if you want to discuss internships, analytics work, or collaboration.</p>
      </div>
    </section>

    ${renderContactSection(data.profile)}
  `;
}
