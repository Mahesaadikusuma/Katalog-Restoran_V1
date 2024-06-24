const home = () => {
  const getRestaurant = async () => {
    const url = "./data/DATA.json";
    try {
      const response = await fetch(url);
      const responseJSON = await response.json();
      console.log(responseJSON);

      const restaurants = responseJSON.restaurants;
      renderPopularRestaurants(restaurants);
      renderAllRestaurants(restaurants);
    } catch (error) {
      console.error("Gagal mendapatkan data restoran:", error);
    }
  };

  const renderAllRestaurants = (restaurants) => {
    const restaurantList = document.querySelector("#restaurant-container");
    const lowRatedRestaurants = restaurants.filter(
      (restaurant) => restaurant.rating < 4.5
    );

    restaurantList.innerHTML = "";
    lowRatedRestaurants.forEach((restaurant) => {
      renderRestaurantItem(restaurantList, restaurant);
    });
  };

  const renderPopularRestaurants = (restaurants) => {
    const popularRestaurants = restaurants.filter(
      (restaurant) => restaurant.rating >= 4.5
    );

    const popularRestaurantContainer = document.getElementById(
      "restaurant-container-populer"
    );

    popularRestaurantContainer.innerHTML = "";
    popularRestaurants.forEach((restaurant) => {
      renderRestaurantItem(popularRestaurantContainer, restaurant);
    });
  };

  const renderRestaurantItem = (container, restaurant) => {
    container.innerHTML += `
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
          <p>${restaurant.description}</p>
        </div>
      </article>
    `;
  };

  getRestaurant();
};

export default home;
