document.addEventListener("DOMContentLoaded", main);

function main() {
  const btns = document.querySelectorAll("[data-carousel-button]");
  btns.forEach((b) => {
    b.addEventListener("click", () => {
      const offset = b.dataset.carouselButton === "next" ? 1 : -1;
      const slides = b
        .closest("[data-carousel]")
        .querySelector("[data-slides]");
      const activeSlide = slides.querySelectorAll("[data-active]");
      activeSlide.forEach((slide) => {
        let newIndex = [...slides.children].indexOf(slide) + offset;
        if (newIndex < 0) newIndex = slides.children.length - 1;
        if (newIndex >= slides.children.length) newIndex = 0;
        slides.children[newIndex++].dataset.active = true;
        delete activeSlide.dataset.active;
      });
    });
  });
  setInterval(autoCarousel, 3600);
}

function autoCarousel() {
  const btns = document.querySelectorAll("[data-carousel-button]");
  btns[1].click();
}
