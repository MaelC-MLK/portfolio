const toggleMenuBtn = document.querySelector("#menu-btn");
const toggleMenuImg = document.querySelector("#menu-btn img");
const toggledMenu = document.querySelector("#toggled-menu");
const menuLinks = document.querySelector("#main-nav ul a");

toggleMenuBtn.addEventListener("click", toggleNav);

function toggleNav(){
  toggledMenu.classList.toggle("-translate-y-full")

  if(toggledMenu.classList.contains("-translate-y-full")) {
    toggleMenuImg.setAttribute("src", "../asset/img/SVG/menu-open.svg")
    toggleMenuBtn.setAttribute("aria-expanded", "false")
  }
  else {
    toggleMenuImg.setAttribute("src", "../asset/img/SVG/menu-close.svg")
    toggleMenuBtn.setAttribute("aria-expanded", "true")
  }
}


document.addEventListener('DOMContentLoaded', function () {
  var scrollLinks = document.querySelectorAll('.scroll-link');
  scrollLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      var targetId = link.getAttribute('href').substring(1);
      var targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    });
  });
});