const allParts = document.querySelectorAll(".part");
allParts.forEach((el) => {
  el.addEventListener("click", () => {
    if (el.classList.contains("selected")) {
      el.classList.remove("selected");
    } else {
      el.classList.add("selected");
    }
  });
});

const fuck = () => {
  const allSelected = document.querySelectorAll('div[class="part selected"]');
  console.log(allSelected);
};
