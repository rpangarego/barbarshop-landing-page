document.addEventListener("DOMContentLoaded", () => {
  // Selectors::
  const navMenu = document.querySelector(".nav-menu");
  const navClose = document.querySelector(".nav-close");
  const navLinks = document.querySelector(".nav-links");
  const navLink = document.querySelectorAll("a.nav-link");
  const navbar = document.querySelector("nav.navbar");
  const aLinks = document.querySelectorAll('a[href*="#"]');

  // init functions/events::
  checkScrollPosition();

  // functions::
  // navbar-scroll function
  function checkScrollPosition() {
    if (window.pageYOffset > 60) {
      navbar.style.background = "#161a1d";
      navbar.style.border = "none";
    } else {
      navbar.style.background = "transparent";
      navbar.style.borderBottom = "1px solid #fff";
    }
  }

  // event listener functions::
  // nav menu (open-close event)
  navMenu.addEventListener("click", () => {
    navLinks.classList.add("active");
  });
  navClose.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });

  // navbar scroll event
  document.addEventListener("scroll", () => {
    checkScrollPosition();
  });

  // navItems event
  navLink.forEach((link) => {
    link.addEventListener("click", () => {
      if (navLinks.classList.contains("active")) {
        navLinks.classList.remove("active");
      }
    });
  });

  // smooth-scroll event
  aLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      // go to section with href destination id
      const href = link.getAttribute("href");
      const offsetTop = document.querySelector(href).offsetTop;
      scroll({
        top: offsetTop - navbar.clientHeight,
        behavior: "smooth"
      });

      // close nav menu if 'active' class exist
      // if (navLinks.classList.contains("active")) {

      // }
    });
  });
});
