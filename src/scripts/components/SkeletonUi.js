import img from '../../public/images/placeholder.png';

const createSkeletonRestaurantItemTemplate = (counter) => {
  let template = '';
  let restaurantItemTemplate = '';

  for (let i = 0; i < counter; i++) {
    restaurantItemTemplate += `
      <article class="catalog" tabindex="0">
        <div class="skeleton-img">
        </div>
        
        <div class="catalog__content">
          <p class="skeleton">
            Rating
          </p>
          <h1 class="catalog__header">
            <p class="skeleton">
              Skeleton
            </p>
          </h1>
          <p class="skeleton">
          Skeleton
          </p>
        </div>
      </article>
    `;
  }

  template = `
    <div class="wrapper">
      ${restaurantItemTemplate}
    </div>
  `;

  return template;
};

const createSkeletonRestaurantDetailTemplate = () => {
  const template = `
    <div class="skeleton-img"  style="height: 400px;>
    </div>
    <div class="restaurant-details__header">
      <div class="restaurant-details__header-left">
        <h1 class="skeleton">Restaurant Name</h1>
        <div id="restaurant-category" class="restaurant-details__category">
          <h2 class="skeleton">
            Restaurant Category
          </h2>
        </div>
        <h2 class="restaurant-details__address skeleton">
          Restaurant Address
        </h2>
      </div>
      <div class="restaurant-details__header-right">
        <h1 class="restaurant-details__rating skeleton">
          Rating
        </h1>
        <h1 class="restaurant-details__review-qty skeleton">
         Review(s)
        </h1>
      </div>
    </div>
    <div class="restaurant-details__button">
      <button id="addReviewBtn" class="restaurant-details__review-btn skeleton"
        aria-label="add restaurant review"
      >
        Add Review
      </button>
    </div>
    <div class="restaurant-details__tab">
      <button id="overview-btn" 
        class="restaurant-details__tab-button selected skeleton"
      >
        Overview
      </button>
      <button id="menu-btn" 
        class="restaurant-details__tab-button skeleton"
      >
        Menus
      </button>
      <button id="review-btn" 
        class="restaurant-details__tab-button skeleton"
      >
        Reviews
      </button>
    </div>
    <section>
      <div id="overview" class="restaurant-details__menu-tab">
        <div class="restaurant-details__description">
          <h2 class="restaurant-details__description-header skeleton">
            Restaurant Description
          </h1>
          <p class="restaurant-details__restaurant-description skeleton">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
            reprehenderit in voluptate velit esse cillum dolore eu fugiat 
            nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa 
            qui officia 
            deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>

      <div id="menu" class="restaurant-details__menu-tab hidden">
      
      </div>

      <div id="review" class="restaurant-details__menu-tab hidden">
        
      </div>
    </section>
  `;

  return template;
};

export {createSkeletonRestaurantItemTemplate,
  createSkeletonRestaurantDetailTemplate};

