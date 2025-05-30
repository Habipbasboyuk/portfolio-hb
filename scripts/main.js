import { projects } from "./data/data.js";

// loading projects dynamically on the homepage

const projectsContainer = document.querySelector(".projects__list");

if (projectsContainer) {
  projects.forEach((project) => {
    projectsContainer.innerHTML += `
            <a href="detail-page.html?id=${project.id}">
                <article class="projects__item animation">
                    <img src=${project.banner} alt="" class="projects__image">
                    <div class="project__content">
                        <h3 class="projects__item-title">${project.title}</h3>
                        <p class="projects__item-description">${project.description}</p>
                    </div>
                </article>
            </a>
        `;
  });
}

// projectDetailPage

const usedSkills = document.querySelector(".used-skills");

if (usedSkills) {
  const params = new URLSearchParams(window.location.search);
  const projectId = params.get("id");
  const project = projects.find((p) => p.id == parseInt(projectId));

  if (project) {
    document.title = project.title;
    usedSkills.innerHTML = `
    <ul class="used-skills__list">
        ${project.details.technologies
          .map((skill) => `<li class="used-skills__list-item">${skill}</li>`)
          .join("")}
    </ul>
    `;

    document.querySelector(".detail-intro__title").textContent = project.title;
    document.querySelector(".detail-intro__description").textContent =
      project.details.intro;

    project.details.codeImages.forEach((img) => {
      document.querySelector(".detail-intro__images").innerHTML += `
        <li class="detail-intro__images-item"> <img class="detail-intro__image" src=${img} alt=""></li>
        `;
    });
  }
}
