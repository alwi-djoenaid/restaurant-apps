const createFavoriteButton = () => `
  <button aria-label="add to favorite" id="favoriteButton" class="favorite">
    <i class="fa fa-star-o" aria-hidden="true"></i>
  </button>
`;

const createFavoritedButton = () => `
  <button aria-label="remove from favorite list" 
    id="favoriteButton" class="favorite"
  >
    <i class="fa fa-star" aria-hidden="true"></i>
  </button>
`;

export {createFavoriteButton, createFavoritedButton};

