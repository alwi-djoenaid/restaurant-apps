/* eslint-disable max-len */
import RestaurantFavoriteIdb from '../src/scripts/data/restaurant-favorite';
import * as TestFactories from './helpers/TestFactories';

describe('Remove restaurant from favorite list', () => {
  const addFavoriteButtonContainer = () => {
    document.body.innerHTML = `<div id="favoriteButtonContainer"></div>`;
  };

  beforeEach(async () => {
    addFavoriteButtonContainer();
    await RestaurantFavoriteIdb.putRestaurant({id: '02hfwn4bh8uzkfw1e867'});
  });

  afterEach(async () => {
    await RestaurantFavoriteIdb.deleteRestaurant('02hfwn4bh8uzkfw1e867');
  });

  it('should show unfavorite button', async () => {
    await TestFactories.createFavoriteButtonPresenter({
      id: '02hfwn4bh8uzkfw1e867',
    });

    expect(document.querySelector('[aria-label="remove from favorite list"]'))
        .toBeTruthy();
  });

  it('should be able to remove a restaurant from favorite list', async () => {
    await TestFactories.createFavoriteButtonPresenter({
      id: '02hfwn4bh8uzkfw1e867',
    });

    document.querySelector('[aria-label="remove from favorite list"]')
        .dispatchEvent(new Event('click'));
    const restaurant = await RestaurantFavoriteIdb.getAllRestaurant();

    expect(restaurant).toEqual([]);
  });

  it('should not throw error if unfavorited movie is not in favorite list', async () => {
    await TestFactories.createFavoriteButtonPresenter({
      id: '02hfwn4bh8uzkfw1e867',
    });

    RestaurantFavoriteIdb.deleteRestaurant('02hfwn4bh8uzkfw1e867');

    document.querySelector('[aria-label="remove from favorite list"]')
        .dispatchEvent(new Event('click'));
    const restaurant = await RestaurantFavoriteIdb.getAllRestaurant();

    expect(restaurant).toEqual([]);
  });
});
