


import getItemByID from "./itemUtils.js";
import { getItemFromLocalStorage, saveToLocalStorage } from "./utils.js";
import renderStar from "./reviews.js";

import orders from "../../order.js";

import { handleFormFieldElement, minimumCharactersToUse} from "./handleTextCharInput.js";

const REVIEW_DESCRIPTION_TEXT_AREA = "#review-description-textArea";
const clearBtnElement              = document.getElementById("clear-btn");
const createReviewForm             = document.getElementById("product-review-form");
const messageDivElement            = document.querySelector(".messages");
const messagePTagElement           = document.querySelector(".messages p");
const productInfo                  = getItemFromLocalStorage("productTableLink", true);
const formTitleElement             = document.getElementById("product-input-title");
const formReviewElement            = document.getElementById("review-description-textArea");
const pageTitleElement             = document.querySelector(".page-title");
const pageSubtitleElement          = document.querySelector(".page-title-subtitle");
const currentPageLiElement         = document.querySelector(".current-page");


const itemReview = getItemFromLocalStorage(`productReview-${productInfo.id}`, true);

// setup 
setUp(createReviewForm);

// Event listeners
createReviewForm.addEventListener("submit", handleCreateReviewFormSubmit);
clearBtnElement.addEventListener("click", handleResetRatings)



function getProductStarRating() {

    const productRatingStars = document.querySelectorAll(".product-ratings a img");
    const reviewedReport = {
        isRated: false,
        numOfStarsRated: 0
    };
    const [EMPTY_STARS, COLORED_STARS] = ["star-unfilled", "star-filled"];

    if (productRatingStars.length === 0) {
        throw new Error("The product star rating couldn't be found");
    }
   
    for (let i = 0; i < productRatingStars.length; i++) {
        const ratingStar = productRatingStars[i];
        
        if (i === 0 && ratingStar.alt === EMPTY_STARS) {
            reviewedReport.numOfStarsRated = 0;
            reviewedReport.isRated = false;
            break;
        } else if (ratingStar.alt === COLORED_STARS) {
            reviewedReport.numOfStarsRated += 1;
        }
    }

    if (reviewedReport.numOfStarsRated > 0) {
        reviewedReport.isRated = true;
    }
   
    if (!productInfo.id) {
        throw new Error("The product id wasn't found!!")
    }

    reviewedReport.id = productInfo.id;
    return reviewedReport;
}


function handleCreateReviewFormSubmit(e) {
    e.preventDefault();

    const reviewReport = getProductStarRating();
    const formData     = new FormData(createReviewForm);
    let msg;

   
    const { title, review } = {
        title: formData.get("title"),
        review: formData.get("review"),
      }
   
    if (!title || !review) {
        throw new Error("Something went wrong - the title or the review couldn't be found!!");
    };

    if (!reviewReport) {
        throw new Error("Something went wrong and the ratings couldn't be acquired")
    };

    if (!messagePTagElement || !messageDivElement) {
        throw new Error("Something went wrong and message p tag and message div containter couldn't be found!!");
    };

    if (reviewReport.numOfStarsRated === 0) {
        msg = "You must rate the product before submitting";
        handleMessageDisplay(msg); 
    } else {
      
        msg  = "You have successfully reviewed the product";

        const productReview = {
            ratings: reviewReport.numOfStarsRated,
            title: title,
            description: review,
            isReviewed: reviewReport.isRated,
            reviewID: reviewReport.id
        }

        saveToLocalStorage(`productReview-${productInfo.id}`, productReview, true);
        handleMessageDisplay(msg, "dark-green-bg");
        updateReviewForm(createReviewForm);
        updatePage();
        
    }
}


function handleMessageDisplay(msg, classColor="dark-red-bg", displayInMs=4000) {
   
    messagePTagElement.textContent = msg;
    messageDivElement.classList.add("show", classColor);

    setTimeout(() => {
        messageDivElement.classList.remove("show", classColor);
    }, displayInMs)
}



function updateReviewForm(form) {
    const formButton = form.querySelector(".product-review-btn");

    if (!formButton) {
        throw new Error("The form button wasn't found!!");
    }

    if (!formTitleElement || !formReviewElement) {
        throw new Error("The title descrciption text area or button container couldn't be found!!!");
    }

   

    if (itemReview) {
        formTitleElement.value = itemReview.title;
        formReviewElement.value = itemReview.description;

        formButton.textContent = "Edit Review";
        renderStar(itemReview.ratings);
        // formButton.classList.add("dark-green-bg");
    } else {
        formButton.textContent = "Submit";
        formButton.classList.add("white-bg");
    }
   
}



function updatePage() {

    if (!pageTitleElement || !pageSubtitleElement || !currentPageLiElement) {
        throw new Error("The title, subtitle or li tag element couldn't be found!!");
    };

    pageTitleElement.textContent     = "Edit Product review";
    pageSubtitleElement.textContent  = "Update product details";
    document.title                   = "Edit Product review";
    currentPageLiElement.textContent = "Edit product review";

}




function handleResetRatings() {
    const totalNumberOfStars = 5;
    const renderEmptyStars   = true;
     renderStar(totalNumberOfStars, renderEmptyStars);
}


// handle all the form attributes
displayProductAttribute();
handleReviewTitleField();
handleReviewDescriptionTextArea();



// Render the minimum characters to use
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


function setUp(form) {
    document.addEventListener("DOMContentLoaded", () => {
        updateReviewForm(form);
        if (itemReview) {
            updatePage();
        }
     
    })
} 



