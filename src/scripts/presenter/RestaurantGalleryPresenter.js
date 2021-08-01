/* eslint-disable prefer-const */
/* eslint-disable require-jsdoc */
export default class RestaurantGalleryPresenter {
  constructor({restaurantModel, viewComponent}) {
    this._restaurantModel = restaurantModel;
    this._viewComponent = viewComponent;

    this._getRestaurantList();
  }

  async _getRestaurantList() {
    let response;
    response = await this._restaurantModel.getRestaurantList();
    const {restaurants} = response;

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
