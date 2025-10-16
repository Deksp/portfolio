const skills = {
  data: [
    { name: "html", level: 40, icon: "skill=html.svg" },
    { name: "css", level: 40, icon: "skill=css.svg" },
    { name: "python", level: 65, icon: "skill=python.svg" },
    { name: "javascript", level: 50, icon: "skill=javascript.svg" },
    { name: "typescript", level: 70, icon: "typescript-logo.svg" },
    { name: "c++", level: 80, icon: "skill=c++.svg" }
  ],
  sortMode: null,
  sortDirection: "asc",
  listElement: null,

  generateList(parentElement) {
    if (!parentElement) {
      return;
    }

    this.listElement = parentElement;
    parentElement.innerHTML = "";

    this.data.forEach((skill) => {
      const term = document.createElement("dt");
      term.classList.add("skill-item");
      term.textContent = skill.name;
      term.style.backgroundImage = `url("img/${skill.icon}")`;

      const definition = document.createElement("dd");
      definition.classList.add("skill-level");

      const progress = document.createElement("div");
      progress.style.width = `${skill.level}%`;

      definition.append(progress);
      parentElement.append(term, definition);
    });
  },

  getComparer(key) {
    return (firstSkill, secondSkill) => {
      const firstValue = firstSkill[key];
      const secondValue = secondSkill[key];

      if (typeof firstValue === "string" && typeof secondValue === "string") {
        return firstValue.localeCompare(secondValue);
      }

      if (firstValue > secondValue) {
        return 1;
      }

      if (firstValue < secondValue) {
        return -1;
      }

      return 0;
    };
  },

  sortList(type) {
    if (!this.listElement) {
      return;
    }

    if (this.sortMode !== type) {
      this.data.sort(this.getComparer(type));
      this.sortMode = type;
      this.sortDirection = "asc";

      const message =
        type === "name"
          ? "отсортировали данные по имени"
          : "отсортировали данные по уровню";
      console.log(message);
    } else {
      this.data.reverse();
      this.sortDirection = this.sortDirection === "asc" ? "desc" : "asc";
      console.log("инвертировали порядок сортировки");
    }

    this.generateList(this.listElement);
  }
};

const skillList = document.querySelector(".skill-list");
skills.generateList(skillList);

const skillsSortControls = document.querySelector(".skills-sort");
console.log(skillsSortControls);

if (skillsSortControls) {
  skillsSortControls.addEventListener("click", (event) => {
    const target = event.target;

    if (!(target instanceof HTMLElement)) {
      return;
    }

    if (target.nodeName !== "BUTTON") {
      return;
    }

    console.log(target);

    const sortType = target.dataset.sortType;

    switch (sortType) {
      case "name":
        skills.sortList("name");
        break;
      case "level":
        skills.sortList("level");
        break;
      default:
        break;
    }
  });
}
