import UrlParser from '../routes/url-parser';

/* eslint-disable require-jsdoc */
export default class RestaurantDetailsPresenter {
  constructor({restaurantModel, viewComponent}) {
    this._restaurantModel = restaurantModel;
    this._viewComponent = viewComponent;

    this._getRestaurantDetails();
  }

  async _getRestaurantDetails() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const response = await this._restaurantModel.getRestaurantById(url.id);
    const {restaurant} = response;

    this._viewComponent.init(restaurant);
  }
}
