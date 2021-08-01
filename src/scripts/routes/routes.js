import RestaurantFavorite from '../views/pages/RestaurantFavorite';
import RestaurantDetails from '../views/pages/RestaurantDetails';
import RestaurantGallery from '../views/pages/RestaurantGallery';

const routes = {
  '/': RestaurantGallery, // default page
  '/gallery': RestaurantGallery,
  '/favorite': RestaurantFavorite,
  '/detail/:id': RestaurantDetails,
};

export default routes;
