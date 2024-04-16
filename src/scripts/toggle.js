const hamburger = document.querySelector("#hamburger");
const navMenuMobile = document.querySelector("#menuMobile");

hamburger.addEventListener("click", () => {
  navMenuMobile.classList.toggle("active");
});
