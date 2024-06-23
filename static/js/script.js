import {buildQuickView, closeItemQuickView} from "./builder.js";
import { displayAddToCartMessage } from "./messages.js";
import getItemByID from "../../data.js";
import ItemCart from "./cart.js";


const cards                = document.querySelectorAll(".card");
const quickView            = document.getElementById("quick-view");
const boxes                = document.querySelectorAll(".box");
const wishlistMsg          = document.querySelector(".wishlist-logged-msg");
const addToCartMsg         = document.querySelector(".addToItem-logged-msg");
const wishListCloseIcon    = document.getElementById("wishlist-close-icon");
const addToItemCloseIcon   =  document.getElementById("addToItem-close-icon");
const dimBackgroundElement = document.querySelector(".dim-overlay");

const MOUSEOUT             = "mouseout";
const MOUSEOVER            = "mouseover";


const cart = new ItemCart();

wishListCloseIcon.addEventListener("click", handleCloseWishlistMsg);
addToItemCloseIcon.addEventListener("click", handleAddToCartCloseMsg)

boxes.forEach((box) => {

    const imgContainer = box.querySelector(".img-box");
    const images       = imgContainer ? imgContainer.querySelectorAll("img") : [];
    addImageRotationListeners(box, images);
   
})


cards.forEach((card) => {

    const cardMenu       = card.querySelector(".head .featured-products__container__cards__product_menu");
   
    const imgContainer   = card.querySelector(".head .img-container");
    const images         = imgContainer ? imgContainer.querySelectorAll("img") : [];

    const quickViewLinks = cardMenu.querySelectorAll("ul li");
    const wishlistsLinks = quickViewLinks && quickViewLinks.length === 3 ?  quickViewLinks[0]: [];
    const quickView      = quickViewLinks && quickViewLinks.length === 3 ?  quickViewLinks[1]: [];
    const addToCartLinks = quickViewLinks && quickViewLinks.length === 3 ?  quickViewLinks[2]: [];

    quickView?.querySelector("a").addEventListener("click", handleQuickView);
    wishlistsLinks?.querySelector("a").addEventListener("click", handleWishlistClick);
    addToCartLinks?.querySelector("a").addEventListener("click", handleAddItemToCart);

    addImageRotationListeners(card, images, false);
    
    card.addEventListener(MOUSEOVER, () => handleCardMenuDisplay(cardMenu));
    card.addEventListener(MOUSEOUT, () => handleCardMenuDisplayRemoval(cardMenu));   
  
})


function addImageRotationListeners(element, images, rotateImageFlag=true) {
    if (images.length >= 2) {
        element.addEventListener('mouseover', (e) => handleImagesRotation(e.type, images, rotateImageFlag));
        element.addEventListener('mouseout', (e) => handleImagesRotation(e.type, images, rotateImageFlag));
    }
}


function handleImagesRotation(type, images, rotate=true) {

    const [img, img2]           = images;
    const DELAY_IN_MILLISECONDS = 400;

    switch (true) {

        case type === "mouseover":
            if (rotate) {
                img.style.transform = "rotate(180deg)";
            }
          
            setTimeout(() => {
                img.style.display  = "none";
                img2.style.display = "block";
            }, DELAY_IN_MILLISECONDS);

            break;
        
        case type === "mouseout":
            if (rotate) {
                img.style.transform = "rotate(360deg)";
            }
            
            setTimeout(() => {
                img.style.display = "block";
                img2.style.display = "none";
            }, DELAY_IN_MILLISECONDS);
            break;
    }
   
}



function handleCardMenuDisplay(cardMenu) {
    cardMenu.classList.add("show");
}


function handleCardMenuDisplayRemoval(cardMenu){
    cardMenu.classList.remove("show");
}


function handleQuickView(e) {
    e.preventDefault();
    const id = e.target.dataset.id;
  
    if (id) {

        quickView.style.display = "block";
        
        const cartItem = cart.findByID(id);
        const quantity = cartItem && cartItem.item ? cartItem.item.quantity : 0; // try to find the item quantity first
   
        const item     = getItemByID(id);

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


function handleWishlistClick(e) {
    e.preventDefault();

    // for now it will always display not logged in - will changed that after backend is created
    dimBackgroundElement.style.display = "block";
    wishlistMsg.style.display          = "flex";
}


function handleCloseWishlistMsg() {
    dimBackgroundElement.style.display = "none";
    wishlistMsg.style.display          = "none";
}


function handleAddToCartCloseMsg() {
    dimBackgroundElement.style.display = "none";
    addToCartMsg.style.display         = "none";
}


// For now there is no persistance storage (local storage) meaning once the
// page is refreshed the item added to the cart is removed. Will add that later
// during the backend
function handleAddItemToCart(e) {

    e.preventDefault();

    const {id, title, price } = {

        id: e.target.dataset.id,
        title: e.target.dataset.title,
        price: parseFloat(e.target.dataset.price)
    }
   
    if (id && title && !isNaN(price)) { 
        const item = {
            id: id, 
            title: title,
            price: price,
        }

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

        const itemQuantityNumberField  = parentDiv.querySelector("input[type='number']");
        if (!itemQuantityNumberField) {
            throw new Error("Something went wrong the input numbere field was found!!")
        }

        const inputFieldHidden    = parentDiv.querySelector("#hidden");
        const itemCount           = itemQuantityNumberField ? itemQuantityNumberField.value : 1;

        const {id, title, price, stock } = inputFieldHidden.dataset;
       

        if (id && title && !isNaN(price) && stock) {
           
            const item = {
                id: id,
                title: title,
                price: price,
                quantity: parseInt(itemCount),
            }
            cart.updateCartItemQuantity(item);
            const numOfItems = cart.getCartQuantity();

            closeItemQuickView();
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



