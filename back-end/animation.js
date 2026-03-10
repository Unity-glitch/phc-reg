window.addEventListener("scroll", () => {
  const elements = document.querySelectorAll(".scroll-animation");
  elements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.8) {
      el.classList.add("show");
    }
  });
});
