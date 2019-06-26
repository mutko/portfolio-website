const id = s => document.getElementById(s);
const hambBtn = id('hamb');
const overlay = id('overlay');
const menu = id('links');

hambBtn.addEventListener('click', function() {
  overlay.classList.toggle('is-open');
  menu.classList.toggle('is-open');
  hambBtn.classList.toggle('open');
})

overlay.addEventListener('click', function() {
  overlay.classList.toggle('is-open');
  menu.classList.toggle('is-open');
  hambBtn.classList.toggle('open');
})
