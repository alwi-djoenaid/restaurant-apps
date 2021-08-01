/**
 * Web component for rendering drink lists
 */
export default class DrinkItem extends HTMLElement {
  /**
   * Constructor
   * @constructor
   */
  constructor() {
    super();
  }

  /**
   * @param {Object} menu The drink name
   */
  set menu(menu) {
    this._menu = menu;
    this.render();
  }

  /**
   * Renders drink lists
   */
  render() {
    this.innerHTML = `
      <p class="restaurant-menu__menu-name">
        ${this._menu.name}
      </p>
    `;
  }
}

customElements.define('drink-item', DrinkItem);
