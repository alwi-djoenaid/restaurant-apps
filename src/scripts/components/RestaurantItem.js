import placeholder from '../../public/images/placeholder.png';

/**
 * Web component for render a restaurant data
 */
export default class RestaurantItem extends HTMLElement {
  /**
     * Respresents restaurant card
     * @constructor
     */
  constructor() {
    super();
  }

  /**
   * Setter for RestaurantItem
   * @param {Object} restraurant The restaurant
   */
  set restaurant(restraurant) {
    this._restaurant = restraurant;
    this.render();
  }

  /**
   * Render restaurant cards
   */
  render() {
    this.innerHTML =
            `
              <article class="catalog" tabindex="0">
                <div class="catalog__image-container">
                  <picture>
                    <source media="(max-width: 600px)" data-srcset="https://restaurant-api.dicoding.dev/images/small/${this._restaurant.pictureId}">
                    <img class="catalog__image lazyload"
                      width="100%" height="200px"
                      data-src="https://restaurant-api.dicoding.dev/images/small/${this._restaurant.pictureId}"
                      alt="${this._restaurant.name}" />
                  </picture>
                </div>
                <div class="catalog__content">
                  <p class="catalog__rating">
                    Rating ${this._restaurant.rating}⭐️
                  </p>
                  <h1 class="catalog__header">
                    <a href="/#/detail/${this._restaurant.id}"
                      aria-label="see restaurant details"
                    >
                      ${this._restaurant.name}, ${this._restaurant.city}
                    </a>
                  </h1>
                  <p class="catalog__description">
                    ${this._restaurant.description}
                  </p>
                </div>
              </article>
            `;
  }
}

customElements.define('restaurant-item', RestaurantItem);
