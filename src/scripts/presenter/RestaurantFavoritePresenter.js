/* eslint-disable prefer-const */
/* eslint-disable require-jsdoc */
export default class RestaurantFavoritePresenter {
  constructor({favoriteRestaurantsModel, viewComponent}) {
    this._favoriteRestaurantsModel = favoriteRestaurantsModel;
    this._viewComponent = viewComponent;

    this._getFavoriteRestaurants();
  }

  async _getFavoriteRestaurants() {
    let restaurants;

    restaurants = await this._favoriteRestaurantsModel.getAllRestaurant();
    this._displayRestaurants(restaurants);
  }

  _displayRestaurants(restaurants) {
    if (restaurants.length !== 0) {
      this._viewComponent.init(restaurants);
    } else {
      this._displayEmptyRestaurantList();
    }
  }

  _displayEmptyRestaurantList() {
    this._viewComponent.renderEmptyList();
  }
}
