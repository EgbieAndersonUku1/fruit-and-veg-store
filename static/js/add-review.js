


import getItemByID from "./itemUtils.js";
import { getItemFromLocalStorage } from "./utils.js";
import orders from "../../order.js";

import { handleFormFieldElement, minimumCharactersToUse} from "./handleTextCharInput.js";

const REVIEW_DESCRIPTION_TEXT_AREA = "#review-description-textArea"

displayProductAttribute();
handleReviewTitleField();
handleReviewDescriptionTextArea();


minimumCharactersToUse(REVIEW_DESCRIPTION_TEXT_AREA, {minCharClass: ".minimum-characters",
                                                      maxCharClass: ".maximum-characters",              
                                                      minCharMessage: "Minimum characters to use: ",
                                                      maxCharMessage: "Number of characters remaining: ",
                                                      minCharsLimit: 50,
                                                      maxCharsLimit: 1000
});



function handleReviewTitleField(titleSelectorID="#product-input-title", iconSelector="#review-title-icon"){
    handleFormFieldElement(titleSelectorID, iconSelector)
}

function handleReviewDescriptionTextArea(textAreaSelectorID = "#review-description-textArea", iconSelector = "#review-description-icon") {
    handleFormFieldElement(textAreaSelectorID, iconSelector);
}



function displayProductAttribute() {
    const productHeaderDiv = document.querySelector(".product-review-header");

    if (!productHeaderDiv) {
        console.warn("Product review header not found.");
        return;
    }

    const divs = productHeaderDiv.querySelectorAll("div");
    if (divs.length < 2) {
        console.warn("Expected at least two divs in the product review header.");
        return;
    }

    const [divImage, divDescription] = divs;

    const productInfo = getItemFromLocalStorage("productTableLink", true);
    if (!productInfo) {
        console.warn("Couldn't find the table ID associated with this product.");
        return;
    }

    const product = getItemByID(productInfo.id, orders);
    if (!product) {
        console.warn("Couldn't find the product with the given ID.");
        return;
    }

    setReviewProductImage(product, divImage);
    setReviewProductDescription(product, divDescription);
}


function setReviewProductImage(product, divImage) {

    if (!product || !divImage) {
        console.error("The product or divImage couldn't be retrieved!");
        return;
    }

    const image = divImage.querySelector("img");
    if (image) {
        image.src = product.img;
        image.id = product.id;
    } else {
        console.error("The img element couldn't be retrieved!");
    }
}


function setReviewProductDescription(product, divDescription) {
    if (!product || !divDescription) {
        console.error("The product or divDescription couldn't be retrieved!");
        return;
    }

    const pTag = divDescription.querySelector("p");
    if (pTag) {
        pTag.textContent = product.name;
    } else {
        console.error("The pTag element couldn't be retrieved!");
    }
}
