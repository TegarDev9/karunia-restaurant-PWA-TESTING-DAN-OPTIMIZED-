import KaruniaFavoritedb from '../../data/Karunia_favorite_db';
import { KaruniaRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <main id="mainContent" class="main-karunia_restaurants">
        <section class="content">
            <h2  class="label_Favorite">
              Favorite
            </h2>
            <div id="main-resto_list" class="list-karunia-restaurants">
            Restaurant tidak ditemukan!
            </div>
        </section>
      </main>
    `;
  },

  async afterRender() {
    const restaurants = await KaruniaFavoritedb.getAllRestaurant();
    const restaurantContainer = document.getElementById('#main-resto_list');
    if (restaurants.length > 0) {
      restaurantContainer.innerHTML = "";
    }else{
      restaurantContainer.innerHTML = "Restaurant tidak ditemukan!";
    }
      
      restaurants.forEach((restaurants) => {
      restaurantContainer.innerHTML += KaruniaRestaurantItemTemplate(restaurants);
    });

   
    },

    };
     
export default Favorite;
