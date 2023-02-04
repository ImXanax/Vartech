const partBuilder = () => {
  const container = document.querySelector(".container");
  const section = document.createElement("section");
  section.classList.add("selection");

  const nameList = [
    "cpu",
    "hdd",
    "gpu",
    "fan",
    "ram",
    "psu",
    "mb",
    "case",
    "monitor",
  ];

  for (let i = 0; i < 9; i++) {
    // div
    const divEl = document.createElement("div");
    divEl.classList.add("part");
    divEl.dataset.id = i;
    divEl.dataset.opt = "";
    // img
    const imgEl = document.createElement("img");
    imgEl.src = `../images/Config/${nameList[i]}.png`;
    imgEl.alt = "hardware-icon";
    // h2
    const h2El = document.createElement("h2");
    h2El.textContent = `${nameList[i].toUpperCase()}`;
    // input
    const inputEl = document.createElement("input");
    inputEl.type = "number";
    inputEl.dataset.opt = "";
    // child management
    divEl.appendChild(imgEl);
    divEl.appendChild(h2El);
    divEl.appendChild(inputEl);
    section.appendChild(divEl);
  }
  container.prepend(section);

  // selection animation & data-opt update
  const allParts = document.querySelectorAll(".part");
  allParts.forEach((el) => {
    el.addEventListener("click", () => {
      if (el.classList.contains("selected")) {
        el.classList.remove("selected");
        el.dataset.opt = "";
        el.lastChild.dataset.opt = "";
      } else {
        el.classList.add("selected");
        el.dataset.opt = true;
        el.lastChild.dataset.opt = true;
      }
    });
  });
};

const fetchOptions = () => {
  const allSelected = document.querySelectorAll('div[data-opt="true"]');
  allSelected.forEach((el) => {
    console.log(el.lastChild.value);
  });
};
