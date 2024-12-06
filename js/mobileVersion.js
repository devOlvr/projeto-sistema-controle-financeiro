const openMenuButton = document.querySelector(".open-menu");
const navbarMobile = document.querySelector(".navbar-mobile");

openMenuButton.onclick = () => {
  if (navbarMobile.classList.contains("hidden")) {
    navbarMobile.classList.add("visible");
    console.log("Menu Aberto");
    navbarMobile.classList.remove("hidden");
  } else {
    navbarMobile.classList.remove("visible");
    console.log("Menu Fechado");
    navbarMobile.classList.add("hidden");
  }
};
