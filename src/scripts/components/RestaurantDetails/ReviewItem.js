/**
 * Web component for render a restaurant review
 */
export default class ReviewItem extends HTMLElement {
  /**
   * Constructor
   * @constructor
   */
  constructor() {
    super();
  }

  /**
   * @param {Object} review Restaurant reviews
   */
  set review(review) {
    this._review = review;
    this.render();
  }

  /**
   * Renders consumer reviews
   */
  render() {
    this.innerHTML = `
      <div class="restaurant-review">
        <h2 class="restaurant-review__reviewer-name">${this._review.name}</h2>
        <h3 class="restaurant-review__review-date">${this._review.date}</h3>
        <p class="restaurant-review__review-text">${this._review.review}</p>
      </div>
    `;
  };
}

customElements.define('review-item', ReviewItem);
