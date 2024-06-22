import preventNumberInputTyping from "./numberInputRestrictor.js";

const quickViewDiv       = document.querySelector("#quick-view");
const quickViewContainer = document.querySelector("#quick-view .container");


function buildQuickView(item, id=null, maxQuantity=400) {
    if (!item) {
        throw new Error("Can't find the item");
    }
    
    const imageDiv         = buildItemImageDiv(item);
    const itemBodyInfoDiv  = buildItemInfo(item, id, maxQuantity);
    const closeIcon        = buildCloseIcon();
 
    quickViewContainer.innerHTML = "";
    quickViewContainer.appendChild(closeIcon);
    quickViewContainer.appendChild(imageDiv);
    quickViewContainer.appendChild(itemBodyInfoDiv);
   
}


function closeItemQuickView() {
    quickViewDiv.style.display = "none";
}




function buildItemImageDiv(item) {

    if (!item || !item.images.detail) {
        throw new Error("The item or the item.detail couldn't be found!!");
    }

    const mainDiv        =  document.createElement("div");
    mainDiv.className    = "quick-view__img";

    const mainImgDiv     =  document.createElement("div");
    mainImgDiv.className = "quick-view__main-img";

    const sideImgDiv     = document.createElement("div");
    sideImgDiv.className = "quick-view__side-img";

    // Create the image div
    for (let image of item.images.detail) {

        const img = document.createElement("img");
        img.src   = image.imgSrc;
        img.alt   = image.alt;

        if (image.main) {
            img.className = "quick-view__main-pic";
            mainImgDiv.appendChild(img);
        } else {
            img.className = "side-img";
            sideImgDiv.appendChild(img);
        }
    }

    mainDiv.appendChild(mainImgDiv);
    mainDiv.appendChild(sideImgDiv);
    return mainDiv;
    
}


function buildCloseIcon(){

    const img     = document.createElement("img");
    const mainDiv = document.createElement("div");
    mainDiv.id    = "close-icon";

    img.src        = "static/img/icons/window-close.svg";  // shows

    img.alt        = "Window close icon";
    img.className  = "close-icon";

    img.addEventListener("click", handleCloseIconClick);

    mainDiv.appendChild(img);
    return mainDiv;
}


function buildItemInfo(item, id, maxQuantity) {
    const mainDiv       = document.createElement("div");
    mainDiv.className   = "quick-view__image-info";

    const titleDiv       = buildItemHeader(item);
    const colorDiv       = buildItemChoiceDiv(item.color, "Color");
    const sizeDiv        = buildItemChoiceDiv(item.sizes, "Sizes");
    const dimensionsDiv  = buildItemChoiceDiv(item.dimensions, "Dimensions");
    const inStockDiv     = buildIsItemInStockDiv(item);
    const stockRemaining = buildStockRemainingDiv(item);
    const addToCartDiv   = buildAddToCartDiv(item, id, maxQuantity);
    const buildToWishListDiv = buildAddToWishList();

    mainDiv.appendChild(titleDiv);
    mainDiv.appendChild(colorDiv);
    mainDiv.appendChild(sizeDiv);
    mainDiv.appendChild(dimensionsDiv);
    mainDiv.appendChild(inStockDiv);
    mainDiv.appendChild(stockRemaining);
    mainDiv.appendChild(addToCartDiv);
    mainDiv.appendChild(buildToWishListDiv);
    return mainDiv;
    
}

function buildItemHeader(item) {

    if (!item) {
        throw new Error("The item couldn't be found!!");
    }

    const h2                     = document.createElement("h2");
    const pDescriptionTag        = document.createElement("p");
    const pItemPriceTag          = document.createElement("p");
    const hr                     = document.createElement("hr");
    const pBrandTag              = document.createElement("p");
    const pReferenceTag          = document.createElement("p");
    const mainDiv                = document.createElement("div");

    h2.className                 = "quick-view__image-info__header";
    h2.textContent               = item.name ? item.name.toUpperCase() : "N/A";

    pDescriptionTag.className    = "quick-view__image-info__description";
    pDescriptionTag.textContent  = item.description ? item.description : "No description available.";

    pItemPriceTag.className      = "item-price";
    pItemPriceTag.textContent    = item.price ? `£${item.price}` : "Price not available";

    pBrandTag.className          = "brand";
    const brandSpan              = document.createElement("span");
    brandSpan.className          = "light-bold";
    brandSpan.textContent        = "Brand: ";
    pBrandTag.appendChild(brandSpan);
    pBrandTag.appendChild(document.createTextNode(item.brand ? item.brand : "Unknown"));

    pReferenceTag.className      = "reference";
    const referenceSpan          = document.createElement("span");
    referenceSpan.className      = "bold";
    referenceSpan.textContent    = "Reference: ";

    pReferenceTag.appendChild(referenceSpan);
    pReferenceTag.appendChild(document.createTextNode(item.referenceID ? item.referenceID : "N/A"));

    mainDiv.appendChild(h2);
    mainDiv.appendChild(pDescriptionTag);
    mainDiv.appendChild(pItemPriceTag);
    mainDiv.appendChild(pBrandTag);
    mainDiv.appendChild(pReferenceTag);
    mainDiv.appendChild(hr);

    return mainDiv;
}




function buildItemChoiceDiv(attributesArray, title) {

    if (!attributesArray && !Array.isArray(attributesArray)) {
        throw new Error("Something went wrong, check the attributesArray");
    }

    if (!title) {
        throw new Error("The title attribute can't be empty!!!");
    }

    const mainDiv        = document.createElement("div");
    mainDiv.className    = "item-choice";

    const titleDiv       = document.createElement("div");
    titleDiv.className   = "item-title";

    const pTag           = document.createElement("p");
    const pSpan          = document.createElement("span");
    pSpan.className      = "item-size-title";
    pSpan.textContent    = "Color"; 
    
    pTag.classList.add("light-bold", title);
    pTag.appendChild(document.createTextNode(`${title.toUpperCase()} : `));
    
    titleDiv.appendChild(pTag);

    // the buttons div
    const buttonDiv     = document.createElement("div");
    buttonDiv.className = "quick-view__choice";
    const fragment      = document.createDocumentFragment();


    for (let attribute of attributesArray) {

        const button = document.createElement("button");
        button.classList.add("link-btn", "text-upper", "quick-view__button-display");

        button.dataset.key   = title;
        button.dataset.value = attribute;  
        button.textContent   = attribute;

        button.addEventListener("click", handleButtonClick)
        fragment.appendChild(button);
    }

    buttonDiv.appendChild(fragment);

    mainDiv.appendChild(titleDiv);
    mainDiv.appendChild(buttonDiv);

    return mainDiv 
}


function buildIsItemInStockDiv(item) {
    return buildStockHelper(item);
}

function buildStockRemainingDiv(item) {
    return buildStockHelper(item, false);
}


function buildStockHelper(item, showStockStatus = true) {
    const mainDiv         = document.createElement("div"); 
    const pTitleTag       = document.createElement("p"); 
   
    const pStockTag       = document.createElement("p"); 
    pStockTag.className   = "item-size-title";

    pTitleTag.textContent = showStockStatus ? "STOCK" : "STOCK REMAINING";
    pStockTag.textContent = showStockStatus ? (item.remaining > 0 ? "In stock" : "Not in stock") : item.remaining;

    pTitleTag.className   = "light-bold";
    const quantityDiv     = document.createElement("div");
    quantityDiv.className = "quick-view__item_quantity";

    quantityDiv.appendChild(pStockTag);

    mainDiv.appendChild(pTitleTag);
    mainDiv.appendChild(quantityDiv);
    
    return mainDiv;
}


function buildAddToCartDiv(item, id, maxQuantity) {
    if (!item || typeof item.id === 'undefined' || typeof item.name === 'undefined' || typeof item.price === 'undefined') {
        console.error('Invalid item provided');
        return null;
    }

    const mainDiv = document.createElement("div");
    const inputElement = document.createElement("input");
    const inputFieldHidden = document.createElement("input");
    const buttonElement = document.createElement("button");
    const clearCartButton = document.createElement("button");
    let  itemInCart;
   

    mainDiv.classList.add("quantity", "add-to-cart");

    inputFieldHidden.type = "hidden";
    inputFieldHidden.id = "hidden";
    inputFieldHidden.dataset.id = item.id;
    inputFieldHidden.dataset.title = item.name;
    inputFieldHidden.dataset.price = item.price;
    inputFieldHidden.dataset.stock = item.remaining;
  
    inputElement.name = "quantity";
    inputElement.type = "number";
    inputElement.id = "quantity";
    inputElement.min = "1";
    inputElement.max = maxQuantity.toString(); 
    inputElement.step = "1";
    
    
    if (id === null) {
        inputElement.value = "1";
    } else if (parseInt(item.id, 10) === parseInt(id, 10)) {
        inputElement.value = item.quantity || "1"; 
    } 
    
    if (id && item.quantity) {
       
        clearCartButton.classList.add("button-md",  "clear-cart-btn");
        clearCartButton.textContent = `Clear Cart (${item.quantity > 1 ? `${item.quantity} items` : `${item.quantity} item`})`;

        itemInCart = true;

    }

    inputElement.addEventListener("keydown", preventNumberInputTyping);

    buttonElement.className = "button-lg add-to-cart-btn";
    buttonElement.textContent = "Add to cart";

    mainDiv.appendChild(inputFieldHidden);
    mainDiv.appendChild(inputElement);
    mainDiv.appendChild(buttonElement);

    if (itemInCart) {
        mainDiv.appendChild(clearCartButton)
    }

    

    return mainDiv;
}


function buildAddToWishList() {

    const mainDiv          = document.createElement("div");
    const addToWishListBtn = document.createElement("button");
    const addToCompareBtn  = document.createElement("button");

    mainDiv.classList.add("add-to-wishlist", "flex-row");

    addToWishListBtn.classList.add("button-lg", "padding-sm", "text-upper", "wishlist-btn");
    addToCompareBtn.classList.add("button-lg", "padding-sm", "text-upper", "compare-btn");

    addToWishListBtn.textContent = "Add to wishlist";
    addToCompareBtn.textContent  = "Add to compare list";

    mainDiv.appendChild(addToWishListBtn);
    mainDiv.appendChild(addToCompareBtn);
    return mainDiv

}

function handleButtonClick(e) {

    // Update the title to reflect the button being clicked e.g. Color, size, dimension, etc
    const key    = e.target.dataset.key;
    const value  = e.target.dataset.value;
    const pTag   = document.querySelector(`.${key}`);

    pTag.textContent = `${key.toUpperCase()}: ${value.toUpperCase()}`;

    removeExistingActiveClass(e);
    e.target.classList.add("active");
   
}


function handleCloseIconClick() {
    quickViewDiv.style.display = "none";
}

function removeExistingActiveClass(e) {
   
   const parentDiv = e.target.parentElement;

   if (parentDiv) {
        const buttons = parentDiv.querySelectorAll("button");
        if (buttons) {
            buttons.forEach((button) => {
                if (button.classList.contains("active")) {
                    button.classList.remove("active");
                }
            })
        }
   }
  
}
export {
    buildQuickView,
    closeItemQuickView
} 