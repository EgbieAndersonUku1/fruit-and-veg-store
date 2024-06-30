import { buildQuickView, closeItemQuickView }             from "./builder.js";
import { displayWishListMessage as handleWishListOpenMsg, 
         displayAddToCartMessage 
        }                      from "./messages.js";

import getItemByID             from "./itemUtils.js";
import handleImagesRotation    from './imageRotationHandler.js';
import ItemCart                from "./cart.js";


const cart      = new ItemCart();
const quickView = document.getElementById("quick-view");


function handleQuickView(e, itemList) {

    e.preventDefault();
    const id = e.target.dataset.id;

    if (id) {
        quickView.style.display = "block";

        const cartItem = cart.findByID(id);
        const quantity = cartItem && cartItem.item ? cartItem.item.quantity : 0;

        const item = getItemByID(id, itemList);

        if (quantity > 0) {
            item.quantity = quantity;
        }

        buildQuickView(item, id, item.remaining);

        const addToCartBtn = quickView.querySelector(".add-to-cart-btn");
        const clearCartBtn = quickView.querySelector(".clear-cart-btn");

        addToCartBtn.addEventListener("click", handleCartItemQuantityChange);

        if (clearCartBtn) {
            clearCartBtn.addEventListener("click", (event) => handleClearCart(event, id));
        }
    }
}

function handleAddItemToCart(e) {
    e.preventDefault();

    const { id, title, price } = {
            id: e.target.dataset.id,
            title: e.target.dataset.title,
            price: parseFloat(e.target.dataset.price)
            };

    if (id && title && !isNaN(price)) {

        const item = { id, title, price };

        cart.add(item);
        const numOfItems = cart.getCartQuantity();

        if (numOfItems <= 0) {
            return;
        }

        ItemCart.updateCartDisplay(numOfItems, cart.getTotalPrice());
        displayAddToCartMessage();
    }
}

function handleCartItemQuantityChange(e) {

    e.preventDefault();
    const parentDiv = e.target.parentElement;

    if (parentDiv) {

        const itemQuantityNumberField = parentDiv.querySelector("input[type='number']");

        if (!itemQuantityNumberField) {
            throw new Error("Something went wrong the input number field was found!!");
        }

        const inputFieldHidden = parentDiv.querySelector("#hidden");
        const itemCount        = itemQuantityNumberField ? itemQuantityNumberField.value : 1;

        const { id, title, price, stock } = inputFieldHidden.dataset;

        if (id && title && !isNaN(price) && stock) {

            const item       = { id, title, price, quantity: parseInt(itemCount) };
            cart.updateCartItemQuantity(item);
            const numOfItems = cart.getCartQuantity();

         
            
            ItemCart.updateCartDisplay(numOfItems, cart.getTotalPrice());
            displayAddToCartMessage();
        }
    }
}

function handleClearCart(e, id) {

    if (id) {
        cart.deleteByID(id);

        const numOfItems = cart.getCartQuantity();
        ItemCart.updateCartDisplay(numOfItems, cart.getTotalPrice());

        closeItemQuickView();
        displayAddToCartMessage();
    }
}


function addImageRotationListeners(element, images, rotateImageFlag = true) {
    if (images.length >= 2) {
        element.addEventListener('mouseover', (e) => handleImagesRotation(e.type, images, rotateImageFlag));
        element.addEventListener('mouseout', (e) => handleImagesRotation(e.type, images, rotateImageFlag));
    }
}

function addCardEventListeners(card, cardMenuSelector, itemList) {
    const cardMenu = card.querySelector(cardMenuSelector);

    if (cardMenu) {
        const imgContainer = card.querySelector(".head .img-container");
        const images = imgContainer ? imgContainer.querySelectorAll("img") : [];

        const quickViewLinks = cardMenu.querySelectorAll("ul li");
        const wishlistsLinks = quickViewLinks && quickViewLinks.length === 3 ? quickViewLinks[0] : [];
        const quickView = quickViewLinks && quickViewLinks.length === 3 ? quickViewLinks[1] : [];
        const addToCartLinks = quickViewLinks && quickViewLinks.length === 3 ? quickViewLinks[2] : [];

        quickView?.querySelector("a").addEventListener("click", (e) => handleQuickView(e, itemList));
        wishlistsLinks?.querySelector("a").addEventListener("click", handleWishListOpenMsg);
        addToCartLinks?.querySelector("a").addEventListener("click", handleAddItemToCart);

        addImageRotationListeners(card, images, false);

        card.addEventListener("mouseover", () => handleCardMenuDisplay(cardMenu));
        card.addEventListener("mouseout", () => handleCardMenuDisplayRemoval(cardMenu));
    }
}


function handleCardMenuDisplay(cardMenu) {
    cardMenu.classList.add("show");
}

function handleCardMenuDisplayRemoval(cardMenu) {
    cardMenu.classList.remove("show");
}

export {
    addCardEventListeners,
    handleQuickView,
    handleAddItemToCart,
    handleCartItemQuantityChange,
    handleClearCart,
    addImageRotationListeners,
 
}