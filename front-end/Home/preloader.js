window.addEventListener("load", () => {
  const preloader = document.querySelector(".preloader");
  let scale = 1;
  let direction = 1;
  const interval = setInterval(() => {
    scale += direction * 0.1;
    if (scale > 1.2 || scale < 0.8) direction *= -1;
    preloader.querySelector("img").style.transform = `scale(${scale})`;
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    preloader.classList.add("hide");
  }, 3000);
});
