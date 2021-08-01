import RestaurantList from '../../components/RestaurantList';
import RestaurantFavoriteIdb from '../../data/restaurant-favorite';
import RestaurantFavoritePresenter
  from '../../presenter/RestaurantFavoritePresenter';

const RestaurantFavorite = {
  async render() {
    return `
      <section class="content">
        <div class="content__header content__header--fav">
          <h1>
            Your Favorite Restaurants
          </h1>
        </div>
        <div id="restaurantList"></div>
      </section>
    `;
  },

  async afterRender() {
    new RestaurantFavoritePresenter({
      favoriteRestaurantsModel: RestaurantFavoriteIdb,
      viewComponent: new RestaurantList(),
    });
  },
};

export default RestaurantFavorite;
