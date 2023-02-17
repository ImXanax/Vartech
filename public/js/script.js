const copy = async (a) => {
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

const configBuilder = document.getElementById("configBuilder");
configBuilder.addEventListener("click", () => {
  location.href = "config";
});

const login = () => {
  const loginDiv = document.querySelector(".login");
  if (loginDiv.style.display == "flex") {
    loginDiv.style.display = "none";
  } else {
    loginDiv.style.display = "flex";
  }
};

const signup = () => {
  location.href = "/user/signup";
};
const signin = () => {
  location.href = "/user/signin";
};

const close = document.getElementById("close");
close.addEventListener("click", () => {
  const loginDiv = document.querySelector(".login");
  if (loginDiv) {
    loginDiv.style.display = "none";
  }
});

const hamburger = () => {
  const hamburgerDropDown = document.querySelector(".hamburger-menu");
  if (hamburgerDropDown) {
    if (hamburgerDropDown.style.display == "flex") {
      hamburgerDropDown.style.display = "none";
    } else {
      hamburgerDropDown.style.display = "flex";
    }
  }
};
