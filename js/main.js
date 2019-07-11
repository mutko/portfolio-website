const id = s => document.getElementById(s);
const hambBtn = id("hamb");
const overlay = id("overlay");
const menu = id("links");
const pageHeader = id("page-header");

hambBtn.addEventListener("click", function() {
  overlay.classList.toggle("active");
  menu.classList.toggle("menu-open");
  hambBtn.classList.toggle("open");
  pageHeader.classList.toggle("slide-margin");
});

overlay.addEventListener("click", function() {
  overlay.classList.toggle("active");
  menu.classList.toggle("menu-open");
  hambBtn.classList.toggle("open");
});

const img = document.querySelector(".project-image");
const bg = document.querySelector(".project-preview__image");
function outputSize() {
  console.log("Width is " + img.offsetWidth);
  console.log("Height is " + img.offsetHeight);
  bg.style.height = img.offsetHeight + 200 + "px";
}
outputSize();
new ResizeObserver(outputSize).observe(img);
