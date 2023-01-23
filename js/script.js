const copy = async (a, b) => {
  try {
    const popupText = document.body.classList.contains("lan")
      ? "! کپی شد"
      : "Copied !";

    await navigator.clipboard.writeText(a);
    const el = document.createElement("div");
    el.classList.add("success");
    el.textContent = popupText;
    if (document.querySelector(".success")) return;
    else {
      document.body.appendChild(el);
      setTimeout(() => {
        document.body.removeChild(el);
      }, 10000);
    }
  } catch (e) {
    const popupText = document.body.classList.contains("lan")
      ? "! ناموفق"
      : "Error !";

    console.error(e);
    const el = document.createElement("div");
    el.classList.add("fail");
    el.textContent = popupText;
    if (document.querySelector(".fail")) return;
    else {
      document.body.appendChild(el);
      setTimeout(() => {
        document.body.removeChild(el);
      }, 5000);
    }
  }
};
