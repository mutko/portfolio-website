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
