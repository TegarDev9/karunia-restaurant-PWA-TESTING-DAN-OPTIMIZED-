import KaruniaRestaurantdb from '../../data/Karunia_restaurant_db';
import UrlParser from '../../routes/url-parser';
import KaruniaLikeButtonutils from '../../utils/like-button-utils';
import KaruniaFavoriteIdb from '../../data/Karunia_favorite_db';
import { createKaruniarestaurantDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
    <div class="main">
      <section id="detail-karunia-restaurants"></section>
      <div class="like" id="likeButtonContainer"></div>
    </div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await KaruniaRestaurantdb.KaruniarestaurantDetail(url.id);
    const restaurantContainer = document.querySelector('#detail-karunia-restaurants');
    const hero = document.querySelector('#hero');
    restaurantContainer.innerHTML = createKaruniarestaurantDetailTemplate(
      restaurant.restaurant,
    );
    hero.style.display = 'none';

    KaruniaLikeButtonutils.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      FavoriteRestaurants: KaruniaFavoriteIdb,
      restaurant: {
        id: restaurant.restaurant.id,
        name: restaurant.restaurant.name,
        city: restaurant.restaurant.city,
        pictureId: restaurant.restaurant.pictureId,
        description: restaurant.restaurant.description,
        rating: restaurant.restaurant.rating,
      },
    });
  },
};

export default Detail;
