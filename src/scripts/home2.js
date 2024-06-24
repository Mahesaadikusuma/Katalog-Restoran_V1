const home = () => {
  const getRestaurant = async () => {
    const url = "./data/DATA.json";
    try {
      const response = await fetch(`${url}`);
      const responseJSON = await response.json();

      const restaurants = responseJSON.restaurants;
      // if (restaurants) {
      //   restaurants.map((data) => {
      //     if (data.rating <= 4) {
      //       renderPopulerRestaurant(restaurants);
      //     }
      //   });
      // } else {
      //   console.log("Data restoran tidak tersedia atau kosong.");
      // }
      renderPopulerRestaurant(restaurants);
      renderAllRestaurant(restaurants);
    } catch (error) {
      console.error("Gagal mendapatkan data restoran:", error);
    }
  };

  const renderAllRestaurant = (data) => {
    const restaurantList = document.querySelector("#restaurant-container");
    const populerRestaurant = data.filter(
      (restaurant) => restaurant.rating < 4.5
    );
    restaurantList.innerHTML = "";

    populerRestaurant.map((restaurant) => {
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
          </article>`;
    });
  };

  const renderPopulerRestaurant = (restaurants) => {
    const populerRestaurant = restaurants.filter(
      (restaurant) => restaurant.rating >= 4.5
    );

    const restaurantPopuler = document.getElementById(
      "restaurant-container-populer"
    );

    restaurantPopuler.innerHTML = "";

    populerRestaurant.map((restaurant) => {
      console.log(restaurant);

      restaurantPopuler.innerHTML += `
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

    // console.log(populerRestaurant);
  };

  getRestaurant();
};

export default home;
