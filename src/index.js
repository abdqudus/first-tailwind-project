const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const closeBtn = document.getElementById("close-btn");
const homePage = document.querySelector("#home-page");
const finalStylesArray = [`w-3/4`, "h-full", "p-8", "translate-x-0"];
const removedStylesArray = ["w-0", "h-0", "translate-x-full", "p-0"];
function toggleHamburger() {
  if (menu.classList.contains("w-0")) {
    homePage.classList.add("opacity-50");
    removedStylesArray.forEach((style) => menu.classList.remove(style));
    finalStylesArray.forEach((style) => menu.classList.add(style));
  } else {
    homePage.classList.remove("opacity-50");
    removedStylesArray.forEach((style) => menu.classList.add(style));
    finalStylesArray.forEach((style) => menu.classList.remove(style));
  }
}
closeBtn.addEventListener("click", toggleHamburger);
hamburger.addEventListener("click", toggleHamburger);
