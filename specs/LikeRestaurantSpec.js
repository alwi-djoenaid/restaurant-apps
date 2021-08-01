/* eslint-disable max-len */
import RestaurantFavoriteIdb from '../src/scripts/data/restaurant-favorite';
import FavoriteButtonInitiator from '../src/scripts/utils/FavoriteButtonInitiator';
import * as TestFactories from './helpers/TestFactories';

describe('Add restaurant to favorite list', () => {
  const addFavoriteButtonContainer = () => {
    document.body.innerHTML = `<div id="favoriteButtonContainer"></div>`;
  };

  beforeEach(() => {
    addFavoriteButtonContainer();
  });

  // Menguji munculnya tombol add to favorite jika restoran belum di-favorite
  it('should show favorite button if the restaurant isnt liked', async () => {
    await TestFactories.createFavoriteButtonPresenter({
      id: 'ughslf146iqkfw1e867',
    });

    expect(document.querySelector('[aria-label="add to favorite"]'))
        .toBeTruthy();
  });

  // Menguji fungsionalitas klik tombol untuk mem-favorite restoran
  it('should able to add restaurant to favorite restaurant list', async () => {
    await TestFactories.createFavoriteButtonPresenter({
      id: 'ughslf146iqkfw1e867',
    });

    document.querySelector('#favoriteButton').dispatchEvent(new Event('click'));
    const restaurant = await RestaurantFavoriteIdb.getRestaurant('ughslf146iqkfw1e867');

    expect(restaurant).toEqual({id: 'ughslf146iqkfw1e867'});

    await RestaurantFavoriteIdb.deleteRestaurant('ughslf146iqkfw1e867');
  });

  it('should not be able to add restaurant to favorite list if it has no ID', async () => {
    await TestFactories.createFavoriteButtonPresenter({});

    document.querySelector('#favoriteButton').dispatchEvent(new Event('click'));
    const restaurant = await RestaurantFavoriteIdb.getAllRestaurant();

    expect(restaurant).toEqual([]);
  });
});
