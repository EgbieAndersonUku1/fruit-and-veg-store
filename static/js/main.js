import { addCardEventListeners, addImageRotationListeners } from "./eventHandlers.js";
import { closeAddToCartMsg    as handleAddToCartCloseMsg, 
         closeWishlistMessage as handleCloseWishlistMsg,
        } from "./messages.js";

import CarouselSlider    from "./carouselSlider.js";
import { FeaturedItems, NewItems } from "../../data.js";


const boxes                        = document.querySelectorAll(".box");
const addToItemCloseIcon           = document.getElementById("addToItem-close-icon");
const featuredProductCards         = document.querySelectorAll(".featured-products__container__cards .card");
const newProductCards              = document.querySelectorAll(".new-products__container__cards .card");
const featuredProductsMenuSelector = ".head .featured-products__container__cards__product_menu";
const newProductsMenuSelector      = ".head .new-products__container__cards__product_menu";
const wishListCloseIcon            = document.getElementById("wishlist-close-icon");


// initialization of classes
const carousel = new CarouselSlider();

// start the carousel
carousel.setCarouselContainer();
carousel.setPrevButton();
carousel.setNextButton();
carousel.setCardSelector();
carousel.init();


// icon addEventlistners
wishListCloseIcon.addEventListener("click", handleCloseWishlistMsg);
addToItemCloseIcon.addEventListener("click", handleAddToCartCloseMsg)


boxes.forEach((box) => {
    const imgContainer = box.querySelector(".img-box");
    const images = imgContainer ? imgContainer.querySelectorAll("img") : [];
    addImageRotationListeners(box, images);
});


featuredProductCards.forEach((card) => {
    addCardEventListeners(card, featuredProductsMenuSelector, FeaturedItems);

});


console.log(newProductCards);
newProductCards.forEach((card) => {
    addCardEventListeners(card, newProductsMenuSelector, NewItems);
})
