const skills = {
  data: [
    { title: "html", level: 40, icon: "skill=html.svg" },
    { title: "css", level: 40, icon: "skill=css.svg" },
    { title: "python", level: 65, icon: "skill=python.svg" },
    { title: "javascript", level: 50, icon: "skill=javascript.svg" },
    { title: "typescript", level: 70, icon: "typescript-logo.svg" },
    { title: "c++", level: 80, icon: "skill=c++.svg" }
  ],
  generateList(parentElement) {
    if (!parentElement) {
      return;
    }

    this.data.forEach((skill) => {
      const term = document.createElement("dt");
      term.classList.add("skill-item");
      term.textContent = skill.title;
      term.style.backgroundImage = `url("img/${skill.icon}")`;

      const definition = document.createElement("dd");
      definition.classList.add("skill-level");

      const progress = document.createElement("div");
      progress.style.width = `${skill.level}%`;

      definition.append(progress);
      parentElement.append(term, definition);
    });
  }
};

const skillList = document.querySelector(".skill-list");
skills.generateList(skillList);
