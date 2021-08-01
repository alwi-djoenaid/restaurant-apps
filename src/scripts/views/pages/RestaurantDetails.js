import RestaurantService from '../../data/RestaurantService';
import RestaurantDetailsPresenter
  from '../../presenter/RestaurantDetailsPresenter';
import RestaurantDetails
  from '../../components/RestaurantDetails/RestaurantDetails';
import {createSkeletonRestaurantDetailTemplate}
  from '../../components/SkeletonUi';

const RestaurantDetailsPage = {
  async render() {
    return `
      <div class="content">
        <div id="restaurant" class="restaurant-details">
          ${createSkeletonRestaurantDetailTemplate()}
        </div>
        <div id="favoriteButtonContainer"></div>
      </div>
    `;
  },

  async afterRender() {
    const body = document.querySelector('#restaurant');
    body.innerHTML = '';

    new RestaurantDetailsPresenter({
      restaurantModel: new RestaurantService(),
      viewComponent: new RestaurantDetails(),
    });
  },
};

export default RestaurantDetailsPage;
