/* eslint-disable max-len */
import CONFIG from '../../global/config';
import FavoriteButtonInitiator from '../../utils/FavoriteButtonInitiator';
import {createFavoriteButton} from './FavoriteIcon';
import Modal from './Modal';
import placeholder from '../../../public/images/placeholder.png';

/**
 * Web component for restaurant details page
 */
export default class RestaurantDetails extends HTMLElement {
  /**
   * Represents restaurant lists
   * @constructor
   */
  constructor() {
    super();
  }

  /**
   * @param {Object} restaurant Restaurant details
   */
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  /**
   * Initiate render restaurant details
   * @param {Object} restaurant Restaurant details
   */
  init(restaurant) {
    const restaurantContainer = document.querySelector('#restaurant');
    this.restaurant = restaurant;
    restaurantContainer.appendChild(this);
    this._initFavoriteButton(this._restaurant);
  }

  /**
   * Render Favorite button
   * @param {Object} restaurant restaurant details
   */
  _initFavoriteButton(restaurant) {
    const favoriteButton = document.querySelector('#favoriteButtonContainer');
    favoriteButton.innerHTML = createFavoriteButton();

    FavoriteButtonInitiator.init({
      favButtonContainer: document.querySelector('#favoriteButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        city: restaurant.city,
        address: restaurant.address,
        pictureId: restaurant.pictureId,
        rating: restaurant.rating,
      },
    });
  }

  /**
   * Configure event listener for add review modal
   */
  configModalListener() {
    new Modal();
    const addReviewBtn = this.querySelector('#addReviewBtn');
    const modalElement = this.querySelector('#overlay');

    addReviewBtn.addEventListener('click', (event) => {
      event.preventDefault();
      modalElement.classList.add('open-modal');
    });
  }

  /**
   * Event listener configuration for menubar
   */
  configMenubarListener() {
    const overviewBtn = this.querySelector('#overview-btn');
    const menuBtn = this.querySelector('#menu-btn');
    const reviewBtn = this.querySelector('#review-btn');

    const overviewElement = this.querySelector('#overview');
    const menuElement = this.querySelector('#menu');
    const reviewElement = this.querySelector('#review');

    overviewBtn.addEventListener('click', (event) => {
      event.stopPropagation();
      overviewElement.classList.remove('hidden');
      menuElement.classList.add('hidden');
      reviewElement.classList.add('hidden');

      overviewBtn.classList.add('selected');
      menuBtn.classList.remove('selected');
      reviewBtn.classList.remove('selected');
    });

    menuBtn.addEventListener('click', (event) => {
      event.stopPropagation();
      menuElement.classList.remove('hidden');
      overviewElement.classList.add('hidden');
      reviewElement.classList.add('hidden');

      menuBtn.classList.add('selected');
      overviewBtn.classList.remove('selected');
      reviewBtn.classList.remove('selected');
    });

    reviewBtn.addEventListener('click', (event) => {
      event.stopPropagation();
      reviewElement.classList.remove('hidden');
      overviewElement.classList.add('hidden');
      menuElement.classList.add('hidden');

      reviewBtn.classList.add('selected');
      overviewBtn.classList.remove('selected');
      menuBtn.classList.remove('selected');
    });
  }

  /**
   * Render list of restaurants
   */
  render() {
    this.innerHTML = `
      <div>
        <picture class="restaurant-details__image">
          <img 
            src="${placeholder}"
            data-src="${CONFIG.BASE_IMAGE_URL}/medium/${this._restaurant.pictureId}"
            style="width: 100%;" alt="${this._restaurant.name}"
            class="lazyload"/>
        </picture>
      </div>
      <div class="restaurant-details__header">
        <div class="restaurant-details__header-left">
          <h1>${this._restaurant.name}</h1>
          <div id="restaurant-category" class="restaurant-details__category">
            <h2>
              ${this._restaurant.categories.map((cat) => cat.name).join(', ')}
            </h2>
          </div>
          <h2 class="restaurant-details__address">
            ${this._restaurant.city}, ${this._restaurant.address}
          </h2>
        </div>
        <div class="restaurant-details__header-right">
          <h1 class="restaurant-details__rating">
            Rating ${this._restaurant.rating}/5
          </h1>
          <h1 class="restaurant-details__review-qty">
            ${this._restaurant.customerReviews.length} review(s)
          </h1>
        </div>
      </div>
      <div class="restaurant-details__button">
        <button id="addReviewBtn" class="restaurant-details__review-btn"
          aria-label="add restaurant review"
        >
          Add Review
        </button>
      </div>
      <div class="restaurant-details__tab">
        <button id="overview-btn" 
          class="restaurant-details__tab-button selected"
        >
          Overview
        </button>
        <button id="menu-btn" 
          class="restaurant-details__tab-button"
        >
          Menus
        </button>
        <button id="review-btn" 
          class="restaurant-details__tab-button"
        >
          Reviews
        </button>
      </div>
      <section>
        <div id="overview" class="restaurant-details__menu-tab">
          <div class="restaurant-details__description">
            <h2 class="restaurant-details__description-header">
              Restaurant Description
            </h1>
            <p class="restaurant-details__restaurant-description">
              ${this._restaurant.description}
            </p>
          </div>
        </div>

        <div id="menu" class="restaurant-details__menu-tab hidden">
        
        </div>

        <div id="review" class="restaurant-details__menu-tab hidden">
          
        </div>
      </section>
      <review-modal id="modal"></review-modal>
    `;

    const reviewContainer = this.querySelector('#review');
    const reviewsElement = document.createElement('review-list');
    reviewsElement.reviews = this._restaurant.customerReviews;
    reviewContainer.appendChild(reviewsElement);

    const menuContainer = this.querySelector('#menu');
    const menuElement = document.createElement('menu-list');
    menuElement.menus = this._restaurant.menus;
    menuContainer.appendChild(menuElement);

    this.configMenubarListener();
    this.configModalListener();
  }
}

customElements.define('restaurant-details', RestaurantDetails);
