import FavoriteButtonInitiator from
  '../../src/scripts/utils/FavoriteButtonInitiator';

const createFavoriteButtonPresenter = async (restaurant) => {
  await FavoriteButtonInitiator.init({
    favButtonContainer: document.querySelector('#favoriteButtonContainer'),
    restaurant,
  });
};

export {createFavoriteButtonPresenter};
