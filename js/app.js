const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('.nav');
let menuOpen = false;

window.addEventListener('resize', resize);

function resize() {
  if (window.innerWidth > 470) {
    nav.style.display = 'flex';
  } else {
    nav.style.display = 'none';
  }
}

menuIcon.addEventListener('click', (e) => {
  if (!menuOpen) {
    nav.style.display = 'flex';
    menuOpen = true;
  } else {
    nav.style.display = 'none';
    menuOpen = false;
  }
});
