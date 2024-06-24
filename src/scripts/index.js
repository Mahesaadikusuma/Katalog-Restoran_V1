import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.scss";
import "./toggle.js";

import home from "./home.js";
import API_ENDPOINT from "./global/Api-endPoint.js";
import RestaurantApi from "./DataAPI/Restaurant.js";
console.log("Hello Coders! :)");

// pengecekan api
async function fecthApi() {
  try {
    const response = await RestaurantApi.ListRestaurant();
    const responseJSON = await response.json();
    console.log(responseJSON);
  } catch (error) {
    console.log(error);
  }
}

fecthApi();
document.addEventListener("DOMContentLoaded", () => {
  home();
});
