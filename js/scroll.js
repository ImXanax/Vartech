// Observer For Services Elements Animation
const observer = new IntersectionObserver((enteries) => {
  enteries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenEl = document.querySelectorAll(".hidden");
hiddenEl.forEach((el) => observer.observe(el));

// Header Observer For Scroll Background Change
const carouselOptions = {
  rootMargin: "-100px 0px 0px 0px",
};
const carouselObserver = new IntersectionObserver((enteries) => {
  enteries.forEach((entry) => {
    if (!entry.isIntersecting) {
      headerEl.classList.add("header-scrl");
    } else {
      headerEl.classList.remove("header-scrl");
    }
  });
}, carouselOptions);
const carouselSection = document.querySelector(".carousel-section");
const headerEl = document.querySelector(".header");
carouselObserver.observe(carouselSection);
