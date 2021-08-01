import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import './components/RestaurantList.js';
import './components/RestaurantDetails/RestaurantDetails.js';
import './components/RestaurantDetails/ReviewItem.js';
import './components/RestaurantDetails/ReviewList.js';
import './components/RestaurantDetails/MenuList.js';
import './components/RestaurantDetails/FoodItem.js';
import './components/RestaurantDetails/DrinkItem.js';
import './components/RestaurantDetails/Modal.js';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import swRegister from './utils/sw-register';
import App from './views/App';

// eslint-disable-next-line no-unused-vars
const app = new App({
  button: document.querySelector('#drawer-button'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#main-content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
