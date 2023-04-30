import KaruniaLikeButtonutils from '../../src/scripts/utils/like-button-utils';
import KaruniaFavoriteIdb from '../../src/scripts/data/Karunia_favorite_db';

const createLikeButtonPresenterWithkaruniaresto = async (restaurant) => {
    await KaruniaLikeButtonutils.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      FavoriteRestaurants:KaruniaFavoriteIdb,
      restaurant,
    });
  };
   
  export { createLikeButtonPresenterWithkaruniaresto };