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

// animatite skill meters
let el = document.querySelector(".progress-outer");
const isInViewport = elem => {
  let bounding = elem.getBoundingClientRect();
  return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    bounding.right <=
      (window.innerWidth || document.documentElement.clientWidth)
  );
};

if (isInViewport(el)) {
  console.log("Jeste");
  document.querySelector(".progress-inner").classList.add("animation");
}

window.addEventListener(
  "scroll",
  function(e) {
    if (isInViewport(el)) {
      console.log("Jeste");
      document.querySelector(".progress-inner").classList.add("animation");
    }
  },
  false
);
