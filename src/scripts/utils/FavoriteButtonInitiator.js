import {createFavoriteButton,
  createFavoritedButton} from '../components/RestaurantDetails/FavoriteIcon';
import RestaurantFavoriteIdb from '../data/restaurant-favorite';

const FavoriteButtonInitiator = {
  async init({favButtonContainer, restaurant}) {
    this._favButtonContainer = favButtonContainer;
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const {id} = this._restaurant;

    if (await this._restaurantIsExist(id)) {
      this._renderFaved();
    } else {
      this._renderFav();
    }
  },

  async _restaurantIsExist(id) {
    const restaurant = await RestaurantFavoriteIdb.getRestaurant(id);
    return !!restaurant;
  },

  async _renderFav() {
    this._favButtonContainer.innerHTML = createFavoriteButton();

    const favButton = document.querySelector('#favoriteButton');
    favButton.addEventListener('click', async () => {
      await RestaurantFavoriteIdb.putRestaurant(this._restaurant);
      this._renderButton();
    });
  },

  async _renderFaved() {
    this._favButtonContainer.innerHTML = createFavoritedButton();

    const favButton = document.querySelector('#favoriteButton');
    favButton.addEventListener('click', async () => {
      await RestaurantFavoriteIdb.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default FavoriteButtonInitiator;
