document.addEventListener("DOMContentLoaded", partBuilder());

function partBuilder() {
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
    "pcb",
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
  container.appendChild(section);

  // selection animation & data-opt update
  const allParts = document.querySelectorAll(".part");
  allParts.forEach((el) => {
    el.addEventListener("click", (event) => {
      // ignore INPUT
      if (event.target.tagName === "INPUT") return;
      // handle selection data attrb
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
}

const menu = () => {
  const selectionSection = document.querySelector(".selection");
  if (selectionSection.style.display === "none") {
    selectionSection.style.display = "flex";
    setTimeout(() => {
      selectionSection.classList.remove("hidden");
      selectionSection.classList.add("show");
    }, 500);
  } else {
    selectionSection.classList.remove("show");
    selectionSection.classList.add("hidden");
    setTimeout(() => {
      selectionSection.style.display = "none";
    }, 500);
  }
};

const fetchOptions = () => {
  const nameList = [
    "cpu",
    "hdd",
    "gpu",
    "fan",
    "ram",
    "psu",
    "pcb",
    "case",
    "monitor",
  ];

  let options = [];

  const allSelected = document.querySelectorAll('div[data-opt="true"]');
  allSelected.forEach((el) => {
    console.log(
      `ID:${el.dataset.id} | NAME:${nameList[
        el.dataset.id
      ].toUpperCase()} | VALUE:${el.lastChild.value ? el.lastChild.value : 1}`
    );

    options.push({
      id: Number(el.dataset.id),
      title: nameList[el.dataset.id].toUpperCase(),
      amount: el.lastChild.value ? Number(el.lastChild.value) : 1,
    });
  });
  return options;
};

const createTable = () => {
  const options = fetchOptions();
  const container = document.querySelector(".container");
  const table = document.createElement("table");
  table.classList.add("conf-table");

  // Headers
  const mainHeader = document.createElement("tr");
  const emptyHeader = document.createElement("th");
  const mainTitleOne = document.createElement("th");
  const mainTitleTwo = document.createElement("th");
  emptyHeader.setAttribute("id", "blank");
  mainTitleOne.textContent = `NAME`;
  mainTitleTwo.textContent = `PRICE`;
  mainHeader.append(emptyHeader, mainTitleOne, mainTitleTwo);
  table.appendChild(mainHeader);
  // Footer Values
  const mainFooter = document.createElement("tr");
  const emptyFooter = document.createElement("td");
  const mainFooterOne = document.createElement("td");
  const usecaseInput = document.createElement("input");
  const mainFooterTwo = document.createElement("td");
  emptyFooter.setAttribute("id", "blank");
  mainFooterOne.appendChild(usecaseInput);
  mainFooterTwo.setAttribute("id", "total");
  mainFooter.append(emptyFooter, mainFooterOne, mainFooterTwo);
  // Footer Headers
  const footerHeader = document.createElement("tr");
  const footerHeaderEmpty = document.createElement("th");
  const footerHeaderOne = document.createElement("th");
  const footerHeaderTwo = document.createElement("th");
  footerHeaderEmpty.setAttribute("id", "blank");
  footerHeaderOne.textContent = `USE CASE`;
  footerHeaderTwo.textContent = `TOTAL`;
  footerHeader.append(footerHeaderEmpty, footerHeaderOne, footerHeaderTwo);

  console.log(table);

  options.forEach((option) => {
    console.log(option.amount);
    for (let i = 0; i < option.amount; i++) {
      console.log(`F:${i}`);
      let counter = i;
      // ROW & HEADER
      const tableRow = document.createElement("tr");
      const rowHeader = document.createElement("th");
      rowHeader.textContent =
        option.amount >= 2 ? `${option.title}${(counter += 1)}` : option.title;
      // NAME CELL
      const rowName = document.createElement("td");
      const nameInput = document.createElement("input");
      // PRICE CELL
      const rowPrice = document.createElement("td");
      const priceInput = document.createElement("input");
      priceInput.classList.add("price");
      priceInput.setAttribute("type", "number");
      // PARENT & CHILDREN NODES APPENDAGE
      rowName.appendChild(nameInput);
      rowPrice.appendChild(priceInput);
      tableRow.append(rowHeader, rowName, rowPrice);
      table.appendChild(tableRow);
    }
  });
  table.append(mainFooter, footerHeader);
  menu();
  container.appendChild(table);
  printMode();
  sum();
};

const printMode = () => {
  const hideUI = document.getElementById("blank");
  hideUI.addEventListener("click", () => {
    const btnContainer = document.querySelector(".button-container");
    if (btnContainer.style.display === "none") {
      btnContainer.style.display = "flex";
    } else {
      btnContainer.style.display = "none";
    }
  });
};

const sum = () => {
  const sumCell = document.getElementById("total");
  sumCell.addEventListener("click", (e) => {
    let total = 0;
    const prices = document.querySelectorAll(".price");
    prices.forEach((price) => {
      if (price.value === "") {
        return 0;
      } else {
        total += Number(price.value);
      }
    });
    sumCell.textContent = total;
  });
};

/*
- reset table button
- hide ui functionality for Print 
- refactor code 
- comment 
- remove loggers
- option to create more than one table ?
  |_currently can make more than one (bug?feat?)
-
*/
