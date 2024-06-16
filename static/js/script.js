import buildQuickView from "./builder.js";
import getItemByID from "../../data.js";


const cards                = document.querySelectorAll(".card");
const quickView            = document.getElementById("quick-view");
const boxes                = document.querySelectorAll(".box");
const wishlistMsg          = document.querySelector(".wishlist-logged-msg");
const wishListCloseIcon    = document.getElementById("wishlist-close-icon");
const dimBackgroundElement = document.querySelector(".dim-overlay");
const MOUSEOUT             = "mouseout";
const MOUSEOVER            =  "mouseover";


wishListCloseIcon.addEventListener("click", handleCloseWishlistMessage);

boxes.forEach((box) => {

    const imgContainer = box.querySelector(".img-box");
    const images       = imgContainer ? imgContainer.querySelectorAll("img") : [];
    addImageRotationListeners(box, images);
   
})


cards.forEach((card) => {

    const cardMenu     = card.querySelector(".head .featured-products__container__cards__product_menu");
    const imgContainer = card.querySelector(".head .img-container");
    const images       = imgContainer ? imgContainer.querySelectorAll("img") : [];

    const quickViewLinks = cardMenu.querySelectorAll("ul li");
    const quickView      = quickViewLinks && quickViewLinks.length === 3 ? quickViewLinks[1]: [];
    const wishlistsLinks = quickViewLinks && quickViewLinks.length === 3 ? quickViewLinks[0]: [];

    // quickView.addEventListener("click", handleQuickView);
    // wishListsLinks.addEventListener("click", handleWishListClick);

    quickView?.querySelector("a").addEventListener("click", handleQuickView);
    wishlistsLinks?.querySelector("a").addEventListener("click", handleWishlistClick);

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
        buildQuickView(getItemByID(id))
    }
  
}


function handleWishlistClick(e) {
    e.preventDefault();

    // for now it will always display not logged in - will changed that after backend is created
    dimBackgroundElement.style.display = "block";
    wishlistMsg.style.display          = "flex";
}

function handleCloseWishlistMessage() {
    dimBackgroundElement.style.display = "none";
    wishlistMsg.style.display          = "none";
}