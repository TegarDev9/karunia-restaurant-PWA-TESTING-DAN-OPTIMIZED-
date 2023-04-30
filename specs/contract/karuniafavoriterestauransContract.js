const itActsAsFavoritekaruniaresturansModel = (favoriteRestaurans) => {
  it('should return the restaurant that has been added', async () => {
    favoriteRestaurans.putRestaurant({ id: 1 });
    favoriteRestaurans.putRestaurant({ id: 2 });
 
    expect(await favoriteRestaurans.getRestaurant(1))
      .toEqual({ id: 1 });
    expect(await favoriteRestaurans.getRestaurant(2))
      .toEqual({ id: 2 });
    expect(await favoriteRestaurans.getRestaurant(3))
      .toEqual(undefined);
  });
 
  it('should refuse a movie from being added if it does not have the correct property', async () => {
    favoriteRestaurans.putRestaurant({ aProperty: 'property' });
 
    expect(await favoriteRestaurans.getAllRestaurant())
      .toEqual([]);
  });
 
  it('can return all of the movies that have been added', async () => {
    favoriteRestaurans.putRestaurant({ id: 1 });
    favoriteRestaurans.putRestaurant({ id: 2 });
 
    expect(await favoriteRestaurans.getAllRestaurant())
      .toEqual([
        { id: 1 },
        { id: 2 },
      ]);
  });
 
  it('should remove favorite movie', async () => {
    favoriteRestaurans.putRestaurant({ id: 1 });
    favoriteRestaurans.putRestaurant({ id: 2 });
    favoriteRestaurans.putRestaurant({ id: 3 });
 
    await favoriteRestaurans.deleteRestaurant(1);
 
    expect(await favoriteRestaurans.getAllRestaurant())
      .toEqual([
        { id: 2 },
        { id: 3 },
      ]);
  });
 
  it('should handle request to remove a movie even though the movie has not been added', async () => {
    favoriteRestaurans.putRestaurant({ id: 1 });
    favoriteRestaurans.putRestaurant({ id: 2 });
    favoriteRestaurans.putRestaurant({ id: 3 });
 
    await favoriteRestaurans.deleteRestaurant(4);
 
    expect(await favoriteRestaurans.getAllRestaurant())
      .toEqual([
        { id: 1 },
        { id: 2 },
        { id: 3 },
      ]);
  });
};
 
export { itActsAsFavoritekaruniaresturansModel };