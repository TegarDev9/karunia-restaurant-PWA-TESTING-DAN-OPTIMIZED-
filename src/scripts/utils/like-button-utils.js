import { createLikeButtonTemplate, createUnlikeButtonTemplate } from '../views/templates/template-creator';

const KaruniaLikeButtonutils = {
  async init({ likeButtonContainer, FavoriteRestaurants, restaurant }) {
    this._karunialikeButtonutils = likeButtonContainer;
    this._restaurant = restaurant;
    this._karuniaFavoriteRestaurants = FavoriteRestaurants;
    await this._renderlikeButton();
  },
  async _renderlikeButton() {
    const {
      id,
    } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderLikedButton();
    } else {
      this._renderLikeButton();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await this._karuniaFavoriteRestaurants.getRestaurant(id);
    return !!restaurant;
  },

  _renderLikeButton() {
    this._karunialikeButtonutils.innerHTML = createLikeButtonTemplate();

    const likeButton = document.getElementById('likeButton');
    likeButton.addEventListener('click', async () => {
      await this._karuniaFavoriteRestaurants.putRestaurant(this._restaurant);
      this._renderlikeButton();
    });
  },

  _renderLikedButton() {
    this._karunialikeButtonutils.innerHTML = createUnlikeButtonTemplate();

    const likedButton = document.getElementById('likeButton');
    likedButton.addEventListener('click', async () => {
      await this._karuniaFavoriteRestaurants.deleteRestaurant(this._restaurant.id);
      this._renderlikeButton();
    });
  },
};

export default KaruniaLikeButtonutils;
