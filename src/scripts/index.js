import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";

// import "../styles/main.scss";

import "./toggle.js";

import home from "./home.js";
document.querySelectorAll("a, button, input").forEach((e) => {
  if (e.offsetWidth < 44 || e.offsetHeight < 44) {
    console.log(e);
  }
});
console.log("Hello Coders! :)");

document.addEventListener("DOMContentLoaded", () => {
  home();
});
