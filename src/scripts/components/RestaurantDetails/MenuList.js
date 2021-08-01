/**
 * Web component for rendering restaurant menus
 */
export default class MenuList extends HTMLElement {
  /**
   * Constructor
   * @constructor
   */
  constructor() {
    super();
  }

  /**
   * @param {Object} menus The restaurant menu
   */
  set menus(menus) {
    this._menus = menus;
    this.render();
  }

  /**
   * Renders the "Menus" submenu with foods and drinks
   */
  render() {
    this.innerHTML = `
      <section class="restaurant-menu">
        <h2 class="restaurant-menu__title">Restaurant Menus</h2>
        <div class="restaurant-menu__menu">
          <div class="restaurant-menu__category">
            <div id="foodMenu" class="restaurant-menu__food">
              <h2 class="restaurant-menu__subtitle">Foods</h2>
                
            </div>
          </div>
          <div class="restaurant-menu__category">
            <div id="drinkMenu" class="restaurant-menu__drink">
              <h2 class="restaurant-menu__subtitle">Drinks</h2>
                
            </div>
          </div>
        </div>
      </section>
    `;

    const foodMenu = this.querySelector('#foodMenu');
    const drinkMenu = this.querySelector('#drinkMenu');

    this._menus.foods.forEach((menu) => {
      const menuElement = document.createElement('food-item');
      menuElement.menu = menu;
      foodMenu.appendChild(menuElement);
    });

    this._menus.drinks.forEach((menu) => {
      const menuElement = document.createElement('drink-item');
      menuElement.menu = menu;
      drinkMenu.appendChild(menuElement);
    });
  }
}

customElements.define('menu-list', MenuList);
