const menuIcon = document.querySelector("#menu-icon");
const navLinks = document.querySelector(".nav-links");

menuIcon.onclick = () => {
  navLinks.classList.toggle("active");
  menuIcon.classList.toggle("fa-xmark");
};

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.onclick = () => {
    navLinks.classList.remove("active");
    menuIcon.classList.remove("fa-xmark");
  };
});
