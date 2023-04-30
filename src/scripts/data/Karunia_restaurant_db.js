import API_ENDPOINT from '../globals/api-endpoint';

class KaruniaRestaurantdb {
  static async KaruniarestaurantList() {
    const response = await fetch(API_ENDPOINT.RESTAURANTS);
    const responseJSON = await response.json();
    return responseJSON.restaurants;
  }

  static async KaruniarestaurantDetail(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
}

export default KaruniaRestaurantdb;
