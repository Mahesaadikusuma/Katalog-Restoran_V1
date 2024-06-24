import API_ENDPOINT from "../global/Api-endPoint";

class RestaurantApi {
  // get data api
  static async ListRestaurant() {
    const response = await fetch(API_ENDPOINT.list);
    const responseJson = await response.json();
    console.log(responseJson);
    return responseJson.restaurants;
  }
}

export default RestaurantApi;
