import addNewProductPages from "../pages/pages.js";
import { minimumCharactersToUse } from "./characterCounter.js";
import { getItemFromLocalStorage, saveToLocalStorage, getAllCheckBoxElementsValue, 
        redirectToNewPage, getCurrentUrl } from "../utils/utils.js";
import { getFormEntries } from "../utils/formUtils.js";
import { populateSelectField } from "../builders/formBuilder.js";


window.prevPage = prevPage;



// populate the select function
populateSelectField("#countries", "../../../../countries.txt")


// checkboxes error msg selector
const selectColorErrorMsg    = document.getElementById("color-error-msg");
const selectSizesErrorMsg    = document.getElementById("size-error-msg");
const selectDeliveryErrorMsg = document.getElementById("delivery-error-msg");


// forms
const basicForm               = document.getElementById("basic-product-information-form");
const detailedForm            = document.getElementById("detailed-description-form");
const pricingInventoryForm    = document.getElementById("pricing-inventory-form");
const imageAndMediaForm       = document.getElementById("image-media-form");
const shippingAndDeliveryForm = document.getElementById("shipping-and-delivery-form");
const seoAndMetaForm          = document.getElementById("seo-and-meta-form");
const additionInformationForm = document.getElementById("additional-information-form");


// AddEventListners for the forms
basicForm?.addEventListener("submit", handleBasicInformationForm);
detailedForm?.addEventListener("submit", handleDetailedInformationForm);
pricingInventoryForm?.addEventListener("submit", handlePriceInventoryForm);
imageAndMediaForm?.addEventListener("submit", handleImageAndMediaForm);
shippingAndDeliveryForm?.addEventListener("submit", handleShippingAndDeliveryForm);
seoAndMetaForm?.addEventListener("submit", handleSeoAndMetaForm);
additionInformationForm?.addEventListener("submit", handleAdditionalFormInfo);


// update the current form values when the user hits prevPage button



// field selectors for textArea fields
const detailDescriptionTextAreaSelector   = "#detailed-description";
const shortDescriptionTextAreaSelector    = "#short-description";
const metaDescriptionTextAreaSelector     = "#meta-description";
const warrantyDescriptionTextAreaSelector = "#warranty-description";


// basic category  form fields
const selectProductCategoryElement  = document.getElementById("select-category");
const addCategoryLabelElement       = document.getElementById("add-category-label");
const addCategoryInputFieldElement  =  document.getElementById("add-category");


// Text area field inside inside the detail description specs page
minimumCharactersToUse(detailDescriptionTextAreaSelector, {
                        minCharClass: '.minimum-characters',
                        minCharMessage: 'Minimum characters to use: ',
                        maxCharClass: '.maximum-characters',
                        maxCharMessage: 'Number of characters remaining: ',
                        minCharsLimit: 50,
                        maxCharsLimit: 1000
                        });



// Text area field for the basic product information page
minimumCharactersToUse(shortDescriptionTextAreaSelector, {
                                minCharClass: '.minimum-characters',
                                minCharMessage:'Minimum characters to use: ',
                                maxCharClass: '.maximum-characters',
                                maxCharMessage: 'Number of characters remaining: ',
                                minCharsLimit: 50,
                                maxCharsLimit: 255,

})



// Text area field for the meta description page
minimumCharactersToUse(metaDescriptionTextAreaSelector, {
    minCharClass: '.minimum-characters',
    minCharMessage: 'Minimum characters to use: ',
    maxCharClass: '.maximum-characters',
    maxCharMessage: 'Number of characters remaining: ',
    minCharsLimit: 10,
    maxCharsLimit: 500,
    });


// Text area field for the meta description page
minimumCharactersToUse(warrantyDescriptionTextAreaSelector, {
    minCharClass: '.minimum-characters',
    minCharMessage: 'Minimum characters to use: ',
    maxCharClass: '.maximum-characters',
    maxCharMessage: 'Number of characters remaining: ',
    minCharsLimit: 50,
    maxCharsLimit: 2000,
    });



// handle select category event listener
selectProductCategoryElement?.addEventListener("change", handleSelectClick);


function handleSelectClick(e) {
    const value = selectProductCategoryElement.value.toLowerCase();
    
    if (value === "new-category") {
        addCategoryLabelElement.style.display = "block";
        addCategoryInputFieldElement.style.display = "block";
    } else {
        addCategoryLabelElement.style.display = "none";
        addCategoryInputFieldElement.style.display = "none";
    }
}




function prevPage(event, pageNumber) {
    event.preventDefault();

    const page = addNewProductPages[parseInt(pageNumber)];
    

    if (!page) {
        throw new Error("Something went wrong and the page number couldn't be found!!!");
    }

    redirectToNewPage(page);
  
  
}




function updateFormValue() {
    const currentPage = getCurrentUrl()?.split("/")?.pop();
    // console.log(currentPage)
    
    const formElements = {
        "basic-product-information.html": basicForm,
        "detailed-description-specs.html": detailedForm,
        "pricing-inventory.html": pricingInventoryForm,
        "images-and-media.html": imageAndMediaForm,
        "shipping-and-delivery.html": shippingAndDeliveryForm,
        "SEO-and-meta-information.html": seoAndMetaForm,
        "additonal-information.html": additionInformationForm,
    }

    if (formElements[currentPage] === "undefined") {
        return;
    }
  
  
    const formDetails   = formElements[currentPage];
    const productValues = getItemFromLocalStorage(formDetails.id, true);

    // Iterate over the form elements and update their values using their saved data
    for (let element of formDetails.elements) {
        // console.log(element.name)
        if (element.name) {
            element.value = productValues[element.name];
        }
    }

}







// handles basic-product-information.html
function handleBasicInformationForm(e) {
    e.preventDefault();
    const pageNumber = 2;
    handleFormSubmission(basicForm, pageNumber);
  
};


// handles detailed-description-specs.html
function handleDetailedInformationForm(e) {

    e.preventDefault();

    const colorsCheckboxes = document.querySelectorAll(".colors .color input[name='color']:checked");
    const sizeCheckBoxes   = document.querySelectorAll(".sizes .size input[name='size']:checked");

    let formComplete       = true;
    const pageNumber       = 3;

    if (colorsCheckboxes.length === 0) {
        selectColorErrorMsg.style.display = "block";
        formComplete = false; 

        // replace this later with a more beautiful custom message
        alert("Select at least one color");
    }; 
    
    if (sizeCheckBoxes.length === 0) {
        selectSizesErrorMsg.style.display = "block";
        formComplete = false;

        // replace this later with a more beautiful custom message
        alert("Select at least one size");
    }; 


    if  (detailedForm.reportValidity() && formComplete) {
        const colors      = getAllCheckBoxElementsValue(colorsCheckboxes);
        const sizes       = getAllCheckBoxElementsValue(sizeCheckBoxes);
        const formEntries = getFormEntries(detailedForm);

        formEntries.colorsOptions = colors;
        formEntries.sizesOptions  = sizes;

        handleFormComplete(detailedForm, formEntries, pageNumber);
        
    }
}


// handles pricing-inventory.html
function handlePriceInventoryForm(e) {
    e.preventDefault();
    const pageNumber = 4;
    handleFormSubmission(pricingInventoryForm, pageNumber);
   
};



// handles images-and-media.html
function handleImageAndMediaForm(e) {
    e.preventDefault();
    const pageNumber = 5; 
    
    handleFormSubmission(imageAndMediaForm, pageNumber);

};
    


// handles shipping-and-delivery.html
function handleShippingAndDeliveryForm(e) {
    e.preventDefault();

    const pageNumber = 6; 
    let formComplete = true;

    const deliveryCheckboxes = document.querySelectorAll(".shipping-options label input[name='shipping']:checked");

    if (deliveryCheckboxes.length === 0) {
        selectDeliveryErrorMsg.style.display = "block";
        formComplete = false; 

        // replace this later with a more beautiful custom message
        alert("Select at least one delivery option");
    }; 

    if (shippingAndDeliveryForm.reportValidity() && formComplete) {
        const formEntries           = getFormEntries(shippingAndDeliveryForm)
        formEntries.deliveryOptions = getAllCheckBoxElementsValue(deliveryCheckboxes)
        handleFormComplete(shippingAndDeliveryForm, formEntries, pageNumber);
    }

}


// handles seo-and-meta-information.html
function handleSeoAndMetaForm(e) {
    e.preventDefault();
    const pageNumber = 7;
    handleFormSubmission(seoAndMetaForm, pageNumber);
};


// handles additional-information.html
function handleAdditionalFormInfo(e) {
    e.preventDefault();
    const pageNumber = 8;
    handleFormSubmission(additionInformationForm, pageNumber);
}




function handleFormSubmission(form, pageNumber) {
    if (form.reportValidity()) {
        handleFormComplete(form, getFormEntries(form), pageNumber);
    }
}


function handleFormComplete(form, formEntries, pageNumber) {
    saveToLocalStorage(form.id, formEntries, true);
    redirectToNewPage(addNewProductPages[pageNumber]);
}




window.onload = updateFormValue;





