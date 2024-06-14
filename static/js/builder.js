const quickViewContainer = document.querySelector("#quick-view .container");


function buildQuickView(item) {
    if (!item) {
        throw new Error("Can't find the item");
    }

    const imageDiv     = buildItemImageDiv(item);
    const itemChoices  = buildItemInfo(item);
    const inStockDiv   = buildIsItemInStockDiv(item);

    quickViewContainer.appendChild(imageDiv);
    quickViewContainer.appendChild(itemChoices);
    quickViewContainer.appendChild(inStockDiv);

  



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



function buildItemInfo(item) {
    const mainDiv       = document.createElement("div");
    mainDiv.className   = "quick-view__image-info";

    const titleDiv      = buildItemHeader(item);
    const itemChoiceDiv = buildItemBody(item);

    mainDiv.appendChild(titleDiv);
    mainDiv.appendChild(itemChoiceDiv);
  
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
    const fragment               = document.createDocumentFragment();

    h2.className                 = "quick-view__image-info__header";
    h2.textContent               = item.name ? item.name.toUpperCase() : "N/A";

    pDescriptionTag.className    = "quick-view__image-info__description";
    pDescriptionTag.textContent  = item.description ? item.description : "No description available.";

    pItemPriceTag.className      = "item-price";
    pItemPriceTag.textContent    = item.price ? `£${item.price}` : "Price not available";

    pBrandTag.className          = "brand";
    const brandSpan              = document.createElement("span");
    brandSpan.className          = "bold";
    brandSpan.textContent        = "Brand: ";
    pBrandTag.appendChild(brandSpan);
    pBrandTag.appendChild(document.createTextNode(item.brand ? item.brand : "Unknown"));

    pReferenceTag.className      = "reference";
    const referenceSpan          = document.createElement("span");
    referenceSpan.className      = "bold";
    referenceSpan.textContent    = "Reference: ";

    pReferenceTag.appendChild(referenceSpan);
    pReferenceTag.appendChild(document.createTextNode(item.reference ? item.reference : "N/A"));

    fragment.appendChild(h2);
    fragment.appendChild(pDescriptionTag);
    fragment.appendChild(pItemPriceTag);
    fragment.appendChild(pBrandTag);
    fragment.appendChild(pReferenceTag);
    fragment.appendChild(hr);

    return fragment;
}

function buildItemBody(item) {

    const fragment      = document.createDocumentFragment();

    const colorDiv      = buildItemChoiceDiv(item.color, "Color");
    const sizeDiv       = buildItemChoiceDiv(item.sizes, "Sizes");
    const dimensionsDiv = buildItemChoiceDiv(item.dimensions, "Dimensions");


    fragment.appendChild(colorDiv);
    fragment.appendChild(sizeDiv);
    fragment.appendChild(dimensionsDiv);

    return fragment;

}


function buildItemChoiceDiv(attributesArray, title) {

    const mainDiv        = document.createElement("div");
    mainDiv.className    = "item-choice";

    const titleDiv       = document.createElement("div");
    titleDiv.className   = "item-title";

    const pTag           = document.createElement("p");
    const pSpan          = document.createElement("span");
    
    pTag.className   = "bold";
    pSpan.className  = "item-size-title";

    pSpan.textContent = "Color"; 
    pTag.appendChild(document.createTextNode(`${title.toUpperCase()} : `));

    titleDiv.appendChild(pTag);

    // the buttons div
    const buttonDiv     = document.createElement("div");
    buttonDiv.className = "quick-view__choice";
    const fragment      = document.createDocumentFragment();


    for (let attribute of attributesArray) {

        const button = document.createElement("button");
        button.classList.add("link-btn", "text-upper");

        button.dataset.color = attribute;  
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
    const fragment = document.createDocumentFragment(); // Create a fragment to hold the elements
    const pTitleTag = document.createElement("p"); 
   
    const pStockTag = document.createElement("p"); 
    pStockTag.className = "item-size-title";

    if (showStockStatus) {
        // pTitleTag.textContent = "Stock";
        // pTitleTag.className   = "bold";
        pStockTag.textContent = item.remaining > 0 ? "In stock" : "Not in stock";
    } else {
        pTitleTag.textContent = "Stock remaining";
        pStockTag.textContent = item.remaining;
        pStockTag.classList.add("remaining");
    }

    const quantityDiv = document.createElement("div");
    quantityDiv.className = "quick-view__item_quantity";

    quantityDiv.appendChild(pStockTag);

    fragment.appendChild(pTitleTag);
    fragment.appendChild(quantityDiv);
    
    return fragment;
}


function buildAddToCartDiv() {

    const mainDiv       = document.createElement("div");
    const inputElement  = document.createElement("input");
    const buttonElement = document.createElement("button");
    
    mainDiv.classList.add("quantity", "add-to-cart");

    inputElement.name  = "quantity";
    inputElement.type  = "number";
    inputElement.id    = "quantity";
    inputElement.min   = "1";
    inputElement.max   = "400";
    inputElement.step  = "1";
    inputElement.value = "1"

    buttonElement.className = "button-lg";
    buttonElement.classList.add("button-lg", "add-to-cart-btn");
    buttonElement.textContent = "Add to cart";

    mainDiv.appendChild(inputElement);
    mainDiv.appendChild(buttonElement);

    return mainDiv;

}

function addToWishList() {

    const mainDiv          = document.createElement("div");
    const addToWishListBtn = document.createElement("button");
    const addToCompareBtn  = document.createElement("button");

    addToWishListBtn.classList.add("button-lg", "padding-sm", "text-upper", "wishlist-btn");
    addToCompareBtn.classList.add("button-lg", "padding-sm", "text-upper", "compare-btn");

    addToWishListBtn.textContent = "Add to wishlist";
    addToCompareBtn.textContent  = "Add to compare list";

    mainDiv.appendChild(addToWishList);
    mainDiv.appendChild(addToCompareBtn);
    return mainDiv

}

function handleButtonClick(e) {
    console.log(e);

}

export default buildQuickView;