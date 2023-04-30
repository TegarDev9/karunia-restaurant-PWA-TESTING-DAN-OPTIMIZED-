import { itActsAsFavoritekaruniaresturansModel } from "./contract/karuniafavoriterestauransContract";
import KaruniaFavoriteIdb from "../src/scripts/data/Karunia_favorite_db";

describe('Favorite Restaurans Idb Contract Test Implementation', () => {
    afterEach(async () => {
      (await KaruniaFavoriteIdb.getAllRestaurant()).forEach(async (Restaurant) => {
        await KaruniaFavoriteIdb.deleteRestaurant(Restaurant.id);
      });
    });
   
    itActsAsFavoritekaruniaresturansModel(KaruniaFavoriteIdb);
  });