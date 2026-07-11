fetch("/header/header.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;

    const menuBtn = document.getElementById("menu-btn");
    const menuIcon = menuBtn.querySelector(".material-icons");
    const mobileMenu = document.getElementById("mobile-menu");

    const servicesBtn = document.getElementById("mobile-services-btn");
    const servicesMenu = document.getElementById("mobile-services-menu");
    const servicesIcon = document.getElementById("mobile-services-icon");

    let menuOpen = false;
    let servicesOpen = false;

    // Ensure initial closed state
    mobileMenu.style.maxHeight = "0px";
    mobileMenu.style.overflow = "hidden";
    servicesMenu.style.maxHeight = "0px";
    servicesMenu.style.overflow = "hidden";

    // Toggle Mobile Menu
    menuBtn.addEventListener("click", () => {
      menuOpen = !menuOpen;

      menuIcon.textContent = menuOpen ? "close" : "menu";

      if (menuOpen) {
        mobileMenu.style.maxHeight = "85vh";        // Use fixed viewport height
      } else {
        mobileMenu.style.maxHeight = "0px";
      }
    });

    // Toggle Services Dropdown
    servicesBtn.addEventListener("click", () => {
      servicesOpen = !servicesOpen;

      servicesIcon.textContent = servicesOpen ? "remove" : "add";

      if (servicesOpen) {
        servicesMenu.style.maxHeight = servicesMenu.scrollHeight + "px";
      } else {
        servicesMenu.style.maxHeight = "0px";
      }
    });

    // Close menu when clicking any mobile link
    document.querySelectorAll("#mobile-menu a").forEach(link => {
      link.addEventListener("click", () => {
        menuOpen = false;
        menuIcon.textContent = "menu";
        mobileMenu.style.maxHeight = "0px";
        servicesOpen = false;
        servicesIcon.textContent = "add";
        servicesMenu.style.maxHeight = "0px";
      });
    });

    // Click outside to close
    document.addEventListener("click", e => {
      if (!e.target.closest("header") && menuOpen) {
        menuOpen = false;
        menuIcon.textContent = "menu";
        mobileMenu.style.maxHeight = "0px";
      }
    });

    // Reset on window resize (important for inspect tool switching)
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 768) { // md breakpoint
        menuOpen = false;
        menuIcon.textContent = "menu";
        mobileMenu.style.maxHeight = "0px";
      }
    });
  });