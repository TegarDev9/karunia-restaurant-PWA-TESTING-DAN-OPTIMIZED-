import KaruniaFavoriteIdb from '../../data/Karunia_favorite_db';
import { KaruniaRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <main id="mainContent" class="main-karunia_restaurants">
        <section class="content">
            <h2  class="label_Favorite">
              Favorite
            </h2>
            <div id="main-resto_list" class="list-karunia-restaurants"></div>
        </section>
      </main>
    `;
  },

  async afterRender() {
    const restaurants = await KaruniaFavoriteIdb.getAllRestaurant();
    const restaurantContainer = document.getElementById('main-resto_list');
    const empty = document.querySelector('.karunia-not_found');
    if (restaurants.length === 0) {
      empty.innerHTML = `
      <h3>Tidak ada Favorite restauran</h3>
      `;
    }

    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += KaruniaRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favorite;
