const hamburger = document.querySelector(".burgerIcon");
const navbarlink = document.querySelector(".secondNavIcons");

hamburger.addEventListener("click", () => {
  navbarlink.classList.toggle("hide");
});
