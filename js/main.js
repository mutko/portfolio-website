const id = s => document.getElementById(s);
const hambBtn = id("hamb");
const overlay = id("overlay");
const menu = id("links");
const navBtns = document.querySelectorAll(".nav-list li");
const links = Array.from(navBtns);

// nav links actions
for (let i = 0; i < links.length; i += 1) {
  links[i].addEventListener("click", function() {
    overlay.classList.toggle("active");
    menu.classList.toggle("menu-open");
    hambBtn.classList.toggle("open");
  });
}

// hamburger and overlay actions
hambBtn.addEventListener("click", function() {
  overlay.classList.toggle("active");
  menu.classList.toggle("menu-open");
  hambBtn.classList.toggle("open");
});

overlay.addEventListener("click", function() {
  overlay.classList.toggle("active");
  menu.classList.toggle("menu-open");
  hambBtn.classList.toggle("open");
});

// init glide carousel
// new Glide(".works-carousel").mount();
new Glide(".clients-carousel").mount();

// change title if tab out of focus
let hidden, visibilityChange;
if (typeof document.hidden !== "undefined") {
  hidden = "hidden";
  visibilityChange = "visibilitychange";
} else if (typeof document.msHidden !== "undefined") {
  hidden = "msHidden";
  visibilityChange = "msvisibilitychange";
} else if (typeof document.webkitHidden !== "undefined") {
  hidden = "webkitHidden";
  visibilityChange = "webkitvisibilitychange";
}
function handleVisibilityChange() {
  if (document[hidden]) {
    document.title = "Please visit my page before closing :)";
  } else {
    document.title = "Branko | Frontend developer";
  }
}
if (typeof document.addEventListener === "undefined" || hidden === undefined) {
  console.log(
    "This demo requires a browser, such as Google Chrome or Firefox, that supports the Page Visibility API."
  );
} else {
  document.addEventListener(visibilityChange, handleVisibilityChange, false);
  handleVisibilityChange();
}
