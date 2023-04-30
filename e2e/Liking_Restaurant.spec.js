const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('.main-resto_list');
  I.see('Restaurant not found!', '.karunia-not_found');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Restaurant not found!', '.karunia-not_found');
  I.amOnPage('/');s
  I.retry(3).seeElement('.karunia-not_found h3 a');

  const firstRestaurant = locate('.karunia-not_found h3 a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);

  I.click(firstRestaurant);
  I.retry(3).seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.retry(3).seeElement('.karunia-item');

  const likedRestaurantName= await I.grabTextFrom('.karunia-item__content p');
  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});

Scenario('Unliking Restaurant', async ({ I }) => {
  I.see('Restaurant not found!', '.karunia-not__found');
  I.amOnPage('/');

  I.retry(3).seeElement('.karunia-item_content p');

  const firstRestaurant = locate('.karunia-item_content p').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');

  I.seeElement('.karunia-item');
  const likedRestaurantName = await I.grabTextFrom('.karunia-item_content p');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);

  I.click(firstRestaurant);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage("/#/favorite");
  I.see('Restaurant not found!', '.karunia-not__found');
});