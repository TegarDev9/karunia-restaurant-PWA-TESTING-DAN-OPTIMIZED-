import CONFIG from "../../globals/config";

const KaruniaRestaurantItemTemplate = (restaurant) => `
<article  class="karunia-item">
  <a href="/#/detail/${restaurant.id}">
    <div class="karunia-item_content">
    <img class="karunia-item_image lazyload " src="${
      CONFIG.BASE_IMAGE_URL + restaurant.pictureId
    }" alt="image ${restaurant.name}" />
      <p class="karunia-item_city" alt="kota restoran">${restaurant.city}
      <p  class="karunia-item_name" alt="name restoran">${restaurant.name}</p>
 <span class="karunia-item_rating"aria-label="rating karunia restorans ${
   restaurant.rating
 }">&star; ${restaurant.rating}</span></p>
      <p class="karunia-item_description" alt="deskripsi karunia restor">${
        restaurant.description
      }</p>
    </div>
  </a>
</article> 
`;

const createKaruniarestaurantDetailTemplate = (restaurant) => `
<div class="detail">
  <div class="container-info">
    <div class="img-container">
    <img class="karunia-item_image-container lazyload " src="${
      CONFIG.BASE_IMAGE_URL + restaurant.pictureId
    }" alt="Gambar ${restaurant.name}"/>
    </div>
    <ul class="detail-info">
      <li class="karunia-restorans-name">
        <p class="detail-name">${restaurant.name}</p>
      </li>
      <li class="resto-address">
        <p class="detail-name-address">${restaurant.address}, ${
  restaurant.city
}</p>
      </li>
      <li class="resto-rating">
        <p class="detail-name-rating">&star; ${restaurant.rating}</p>
      </li>
      <h4> Description: </h4>
      <li><p class="detail-descripsi">${restaurant.description}</p></li>
    
      <li class="resto-category">${restaurant.categories
        .map(
          (category) => `
            <span class="detail-category">${category.name}</span>
          `
        )
        .join("")}
      </li>
    </ul>
  </div>    
      <div class="karunia-detail__menu-list">
        <div class="foods">
          <h3>Food</h3>
          <hr>
          <ul class="karunia-detail__foods">
            ${restaurant.menus.foods
              .map(
                (food) => `
                <li>
                  <label>
                    <input type="checkbox" class="food-checkbox" value="${food.name}">
                    <span class="food_name">${food.name}</span>
                  </label>
                </li>`
              )
              .join("")}
          </ul>
        </div>
        <div class="drinks">
          <h3>Drink</h3>
          <hr>
          <ul class="karunia-detail__drinks">
            ${restaurant.menus.drinks
              .map(
                (drink) => `
                <li>
                  <label>
                    <input type="checkbox" class="drink-checkbox" value="${drink.name}">
                    <span class="drink_name">${drink.name}</span>
                  </label>
                </li>`
              )
              .join("")}
          </ul>
        </div>
        <button class="add_to_cart">Add to Cart</button>
      </div>    
        </div>
<div class="customreview-card">
  <div class="customreview-card__header">
    <div>
      <h3 class="customreview-card__username">${restaurant.customerReviews.map(
        (customerReview) => customerReview.name
      )}</h3>
    </div>
  </div>
  <div class="customreview-card__body">
    <h4>Customer Reviews :</h4>  
    <p>${restaurant.customerReviews
      .map((customerReview) => customerReview.review)
      .join(", ")}</p>
  </div>
  <div class="customreview-card__footer">
    <p class="customreview-card__date">${restaurant.customerReviews.map(
      (customerReview) => customerReview.date
    )}</p>
    <button class="customreview-card__button">Riview</button>
  </div>
</div>
`;
const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurants" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeButtonTemplate = () => `
  <button aria-label="unlike this restaurants" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  KaruniaRestaurantItemTemplate,
  createKaruniarestaurantDetailTemplate,
  createLikeButtonTemplate,
  createUnlikeButtonTemplate,
};
