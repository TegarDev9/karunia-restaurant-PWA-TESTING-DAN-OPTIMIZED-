import KaruniaFavoriteIdb from '../src/scripts/data/Karunia_favorite_db';
import * as TestFactories from './helpers/testFactories';

describe('Liking  Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithkaruniaresto({ id: 1 });

    expect(document.querySelector('[aria-label="like this restaurants"]'))
      .toBeTruthy();
  });

  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithkaruniaresto({ id: 1 });

    expect(document.querySelector('[aria-label="unlike this restaurant"]'))
      .toBeFalsy();
  });

  it('should be able to like the restaurant', async () => {
    await TestFactories.createLikeButtonPresenterWithkaruniaresto({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    const restaurant = await KaruniaFavoriteIdb.getRestaurant(1);
    expect(restaurant).toEqual({ id: 1 });

    KaruniaFavoriteIdb.deleteRestaurant(1);
  });

  it('should not add a restaurant again when its already liked', async () => {
    await TestFactories.createLikeButtonPresenterWithkaruniaresto({ id: 1 });

    await KaruniaFavoriteIdb.putRestaurant({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await KaruniaFavoriteIdb.getAllRestaurant()).toEqual([{ id: 1 }]);

    KaruniaFavoriteIdb.deleteRestaurant(1);
  });

  it('should not add a restaurant when it has no id', async () => {
    await TestFactories.createLikeButtonPresenterWithkaruniaresto({});

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await KaruniaFavoriteIdb.getAllRestaurant()).toEqual([]);
  });
});
