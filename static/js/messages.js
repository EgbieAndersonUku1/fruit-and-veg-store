const addToCartMsg         = document.querySelector(".addToItem-logged-msg");
const dimBackgroundElement = document.querySelector(".dim-overlay");
const wishlistMsg          = document.querySelector(".wishlist-logged-msg");


function closeAddToCartMsg() {
    dimBackgroundElement.style.display = "none";
    addToCartMsg.style.display         = "none";
}


function closeWishlistMessage() {
    dimBackgroundElement.style.display = "none";
    wishlistMsg.style.display          = "none";
}


function displayAddToCartMessage() {

    // Display the add-to-cart message and dim background
    addToCartMsg.style.display         = "flex";
    dimBackgroundElement.style.display = "block";
    const DISPLAY_TIME_MS              = 3000; 


    setTimeout(() => {
        addToCartMsg.style.display = "none";
        dimBackgroundElement.style.display = "none";
    }, DISPLAY_TIME_MS);

}


function displayWishListMessage(e) {
    e.preventDefault();

    // for now it will always display not logged in - will changed that after backend is created
    dimBackgroundElement.style.display = "block";
    wishlistMsg.style.display          = "flex";
}



export {
  
    closeAddToCartMsg,
    closeWishlistMessage,
    displayAddToCartMessage,
    displayWishListMessage,
}