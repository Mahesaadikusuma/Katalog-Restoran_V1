const hamburger = document.querySelector("#hamburger");
const navMenuMobile = document.querySelector("#menuMobile");

hamburger.addEventListener("click", () => {
  navMenuMobile.classList.toggle("active");
});

window.addEventListener("click", (e) => {
  if (!hamburger.contains(e.target) && !navMenuMobile.contains(e.target)) {
    navMenuMobile.classList.remove("active");
  }
});
