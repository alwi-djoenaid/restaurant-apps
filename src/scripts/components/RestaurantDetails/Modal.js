/* eslint-disable prefer-const */
import RestaurantService from '../../data/RestaurantService';
import UrlParser from '../../routes/url-parser';
import {showSuccessMessage, showValidationMessage} from '../Toast';

/**
 * Web component for add new review modal
 */
export default class Modal extends HTMLElement {
  /**
   * Constructor
   */
  constructor() {
    super();
    this.render();
  }

  /**
   * Event handler for submit button
   */
  async addReview() {
    let response;

    const restaurantService = new RestaurantService();
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantId = url.id;

    const name = document.querySelector('#name').value;
    const review = document.querySelector('#reviewInput').value;

    const payload = {
      id: restaurantId,
      name: name,
      review: review,
    };

    const payloadJson = JSON.stringify(payload);

    if (name != '' && review != '') {
      response = await restaurantService.addReview(payloadJson);
      try {
        if (response.status === 200) {
          this._displayToast(true);
          setTimeout(() => {
            location.reload();
          }, 3000);
        }
      } catch (e) {
        console.warn(e);
      };
    } else {
      this._displayToast(false);
    }
  }

  /**
   * Display toast message
   * @param {@var} success Indicates if user submission is valid
   * using boolean
   */
  _displayToast(success) {
    const body = document.querySelector('.content');
    const toast = document.createElement('toast-message');

    if (success) {
      toast.successMessage = `Your review has been added!`;
    } else {
      toast.errorMessage = `Reviewer's name and review is required!`;
    }

    body.appendChild(toast);
  }

  /**
   * Renders modal components
   */
  render() {
    this.innerHTML = `
        <div id="overlay" class="overlay">
          <div class="modal">
            <div class="modal__header">
              <h1 class="modal__title">Add New Review</h1>
            </div>
            <div class="modal__body">
              <form class="modal__form">
                <div class="modal__form-input">
                  <p class="form__label">Name</p>
                  <input id="name" class="form__input" type="text" 
                    placeholder="Name"
                  />
                </div>
                <div class="modal__form-input">
                  <p class="form__label">Review</p>
                  <input id="reviewInput" class="form__input" type="text" 
                    placeholder="Write your review here"
                  />
                </div>
              </form>
            </div>
            <div class="modal__footer">
              <button id="submitBtn" 
                class="modal__button modal__button--submit"
              >
                Submit
              </button>
              <button id="closeButton" 
                class="modal__button modal__button--cancel"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
    `;

    this.querySelector('#closeButton').addEventListener('click', () => {
      document.querySelector('#overlay').classList.remove('open-modal');
    });

    this.querySelector('#submitBtn').addEventListener('click', () => {
      this.addReview();
    });
  }
}

customElements.define('review-modal', Modal);
