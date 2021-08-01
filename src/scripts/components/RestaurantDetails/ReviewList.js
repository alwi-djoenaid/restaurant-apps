/**
 * Web component for rendering all of the reviews
 */
export default class ReviewList extends HTMLElement {
  /**
   * Constructor
   * @constructor
   */
  constructor() {
    super();
  }

  /**
   * @param {Object} reviews Restaurant reviews
   */
  set reviews(reviews) {
    this._reviews = reviews;
    this.render();
  }

  /**
   * Renders consumer reviews
   */
  render() {
    this._reviews.forEach((review) => {
      const reviewElement = document.createElement('review-item');
      reviewElement.review = review;
      this.appendChild(reviewElement);
    });
  };
}

customElements.define('review-list', ReviewList);
