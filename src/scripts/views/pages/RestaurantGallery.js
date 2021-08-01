import RestaurantList from '../../components/RestaurantList';
import {createSkeletonRestaurantItemTemplate}
  from '../../components/SkeletonUi';
import RestaurantService from '../../data/RestaurantService';
import RestaurantGalleryPresenter
  from '../../presenter/RestaurantGalleryPresenter';

const RestaurantGallery = {
  async render() {
    return `
        <div class="jumbotron">
          <div class="jumbotron__text">
              <div class="jumbotron__header">
                  <h1>Kyabetsuu</h1>
              </div>
              <div class="jumbotron__subheader">
                  <p>
                    A website that helps you to pick your desired restaurant
                  </p>
              </div>
          </div>
        </div>
        <div class="content content--homepage">
          <div class="content__header">
            <h1>Explore Restaurants</h1>
          </div>
          <div id="restaurantList">
            ${createSkeletonRestaurantItemTemplate(18)}
          </div>
        </div>
    `;
  },

  async afterRender() {
    const restaurantContainer = document.querySelector('#restaurantList');
    restaurantContainer.innerHTML = '';

    new RestaurantGalleryPresenter({
      restaurantModel: new RestaurantService(),
      viewComponent: new RestaurantList(),
    });
  },
};

export default RestaurantGallery;
