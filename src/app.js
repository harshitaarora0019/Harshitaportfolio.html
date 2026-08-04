import { profile, projects, experience, education, certifications, skillGroups } from './data/index.js';
import { renderFooter } from './components/layout/footer.js';
import { renderHeader } from './components/layout/header.js';
import { renderHomePage } from './pages/home.js';
import { renderAboutPage } from './pages/about.js';
import { renderProjectsPage } from './pages/projects.js';
import { renderExperiencePage } from './pages/experience.js';
import { renderContactPage } from './pages/contact.js';
import { mountAnimations } from './animations.js';

const app = document.querySelector('#app');
const page = document.body.dataset.page || 'home';

const data = {
  profile,
  projects,
  experience,
  education,
  certifications,
  skillGroups,
};

function getPageContent(currentPage) {
  if (currentPage === 'about') {
    return renderAboutPage(data);
  }

  if (currentPage === 'projects') {
    return renderProjectsPage(data);
  }

  if (currentPage === 'experience') {
    return renderExperiencePage(data);
  }

  if (currentPage === 'contact') {
    return renderContactPage(data);
  }

  return renderHomePage(data);
}

if (app) {
  app.innerHTML = `
    ${renderHeader(profile)}
    <main class="page-shell">
      ${getPageContent(page)}
    </main>
    ${renderFooter(profile)}
  `;

  setTimeout(() => {
    try {
      mountAnimations();
    } catch (error) {
      console.error(error);
    }
  }, 60);
}