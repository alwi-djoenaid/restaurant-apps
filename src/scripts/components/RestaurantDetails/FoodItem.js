/**
 * Web component for rendering food lists
 */
export default class FoodItem extends HTMLElement {
  /**
   * Constructor
   * @constructor
   */
  constructor() {
    super();
  }

  /**
   * @param {Object} menu The food lists
   */
  set menu(menu) {
    this._menu = menu;
    this.render();
  }

  /**
   * Renders the food lists
   */
  render() {
    this.innerHTML = `
      <p class="restaurant-menu__menu-name">
        ${this._menu.name}
      </p>
    `;
  }
}

customElements.define('food-item', FoodItem);
