# Harshita Arora Portfolio

A modular personal portfolio website for Harshita Arora, redesigned with a minimal neobrutalist visual style and built from shared data, layout, and page modules.

## Overview

This site presents a clean, responsive portfolio focused on data analytics, Python development, Power BI, Streamlit, and AI/ML work. The content is driven from reusable data files and rendered through page-specific modules so the structure stays easy to maintain.

## Features

- Minimal neobrutalist UI with flat colors and bold outlines
- Responsive layout for desktop and mobile
- GitHub avatar shown in the hero section
- Mobile navigation drawer
- Modular page architecture
- Shared content source for profile, projects, experience, skills, and certifications
- Google Fonts typography

## Tech Stack

- HTML5
- CSS3
- JavaScript ES modules
- Google Fonts

## Project Structure

- `index.html`, `about.html`, `experience.html`, `projects.html`, `contact.html` - page entry files
- `src/app.js` - app bootstrap and page routing
- `src/data/` - shared profile, project, experience, and skill data
- `src/components/layout/` - header and footer layout components
- `src/components/sections/` - reusable hero, projects, timeline, skills, and contact sections
- `src/pages/` - page-level renderers for each route
- `styles/main.css` - global styling and responsive behavior
- `src/animations.js` - lightweight interaction hooks and drawer behavior

## Content Included

- Hero section with photo, summary, and quick facts
- Highlights pulled from the resume and LinkedIn profile
- GitHub projects selected from the public profile
- Experience timeline
- Education and certifications
- Skills grouped by category
- Contact links for email, GitHub, and LinkedIn

## Local Run

Open the project with a local server such as VS Code Live Server, or serve the folder with any static server.

If you are using Live Server, open `index.html` in the browser and navigate through the pages normally.

## Notes

- The portfolio content is based on Harshita Arora’s resume, GitHub, and LinkedIn profile.
- The design intentionally avoids gradients and uses a simple, professional palette.
- The site is organized for easy future edits by updating data files instead of hardcoding content in markup.
