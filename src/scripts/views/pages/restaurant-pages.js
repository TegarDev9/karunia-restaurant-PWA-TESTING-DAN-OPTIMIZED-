import KaruniaRestaurantdb from '../../data/Karunia_restaurant_db';
import { KaruniaRestaurantItemTemplate } from '../templates/template-creator';

const Restaurant = {
  async render() {
    return `
      <main id="mainContent" class="main-karunia_restaurants">
      <section class="content">
        <h2 class="karunia-main-label">
          Karunia Restaurant
        </h2>
        <div id="main-resto_list" class="list-karunia-restaurants"></div>
      </section>
    </main>
        `;
  },

  async afterRender() {
    const restaurants = await KaruniaRestaurantdb.KaruniarestaurantList();
    const restaurantContainer = document.querySelector('.list-karunia-restaurants');

    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += KaruniaRestaurantItemTemplate(restaurant);
    });
  },
};

export default Restaurant;
