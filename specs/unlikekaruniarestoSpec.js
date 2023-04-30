import KaruniaFavoriteIdb from "../src/scripts/data/Karunia_favorite_db";
import * as TestFactories from "./helpers/testFactories";

describe("Unliking A Restaurant", () => {
    const addLikeButtonContainer = () => {
      document.body.innerHTML = '<div id="likeButtonContainer"></div>';
    };
  
    beforeEach(async () => {
      addLikeButtonContainer();
      await KaruniaFavoriteIdb.putRestaurant({ id: 1 });
    });
  
    afterEach(async () => {
      await KaruniaFavoriteIdb.deleteRestaurant(1);
    });
  
    it("should display unlike widget when the restaurant has been liked", async () => {
      await TestFactories.createLikeButtonPresenterWithkaruniaresto({ id: 1 });
  
      expect(document.querySelector('[aria-label="unlike this restaurants"]'))
        .toBeTruthy();
    });
  
    it("should not display like widget when the restaurant has been liked", async () => {
      await TestFactories.createLikeButtonPresenterWithkaruniaresto({ id: 1 });
  
      expect(document.querySelector('[aria-label="like this restaurants"]'))
      .toBeFalsy();
    });
  
    it("should be able to remove liked restaurant from the list", async () => {
      await TestFactories.createLikeButtonPresenterWithkaruniaresto({ id: 1 });
  
      document.querySelector('[aria-label="unlike this restaurants"]').dispatchEvent(new Event("click"));
  
      expect(await KaruniaFavoriteIdb.getAllRestaurant()).toEqual([]);
    });
  
    it("should not throw error if the unliked restaurant is not in the list", async () => {
      await TestFactories.createLikeButtonPresenterWithkaruniaresto({ id: 1 });
  
      await KaruniaFavoriteIdb.deleteRestaurant(1);
  
      document.querySelector('[aria-label="unlike this restaurants"]').dispatchEvent(new Event("click"));
  
      expect(await KaruniaFavoriteIdb.getAllRestaurant()).toEqual([]);
    });
  });