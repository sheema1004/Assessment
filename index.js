
// Nav-toggler
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", navToggle);

// click function for toggle button for nav bar
function navToggle() {
  navToggler.classList.toggle("active");
  const nav = document.querySelector(".nav");
  nav.classList.toggle("open");
  if (nav.classList.contains("open")) {
    nav.style.maxHeight = nav.scrollHeight + "px";
  } else {
    nav.removeAttribute("style");
  }
}
