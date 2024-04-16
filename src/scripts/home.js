const home = () => {
  const getRestaurant = async () => {
    const url = "./data/DATA.json";
    const response = await fetch(`${url}`);
    const responseJSON = await response.json();

    console.log(responseJSON);
    renderAllRestaurant(responseJSON.restaurants);
  };

  const renderAllRestaurant = (data) => {
    const restaurantList = document.querySelector("#restaurant-container");

    restaurantList.innerHTML = "";

    data.map((restaurant) => {
      restaurantList.innerHTML += `
      <article class="restaurant-item">
            <img src="${restaurant.pictureId}" alt="${restaurant.name}" />

            <div class="restaurant-item-city">
              <div class="">
                <p class="city">${restaurant.city}</p>
              </div>

              <div class="ratting">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-star"
                >
                  <polygon
                    points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                  ></polygon>
                </svg>
                <p class="">${restaurant.rating}</p>
              </div>
            </div>

            <div class="restaurant-item-content">
              <h1>${restaurant.name}</h1>

              <p>
                ${restaurant.description}
              </p>
            </div>
          </article>
      `;
    });
  };

  getRestaurant();
};

export default home;