import './RestaurantItem.js';

/**
 * Web component for render restaurant lists
 */
export default class RestaurantList extends HTMLElement {
  /**
   * Represents restaurant lists
   * @constructor
   */
  constructor() {
    super();
  }

  /**
   * RestaurantList setter
   * @param {Object} restaurants Restaurant lists
   */
  set restaurants(restaurants) {
    this._restaurants = restaurants;
    this.render();
  }

  /**
   * create restaurant-list web component
   * @param {Object} restaurantLists List of liked restaurants
   */
  init(restaurantLists) {
    const restaurantContainer = document.querySelector('#restaurantList');
    this.restaurants = restaurantLists;
    this.classList.add('wrapper');
    restaurantContainer.appendChild(this);
  }

  /**
   * Render list of restaurants
   */
  render() {
    this._restaurants.forEach((restaurant) => {
      const restaurantItemElement = document
          .createElement('restaurant-item');
      restaurantItemElement.restaurant = restaurant;
      this.appendChild(restaurantItemElement);
    });
  }

  /**
   * Renders placeholder if there's no liked restaurant
   */
  renderEmptyList() {
    const restaurantContainer = document.querySelector('#restaurantList');
    const placeholder = `
      <h1 id="noRestaurant" class="restaurant__empty-placeholder"
        style="font-weight: 400; margin-left: 16px">
        You have no restaurant marked as favorite
      </h1>
    `;

    restaurantContainer.innerHTML = placeholder;
  }
}

customElements.define('restaurant-list', RestaurantList);
