import addNewProductPages from "../pages/pages.js";
import { redirectToNewPage } from "../utils/utils.js";
import { minimumCharactersToUse } from "./characterCounter.js";
import loadFile from "../utils/loader.js";
import { getItemFromLocalStorage, saveToLocalStorage } from "../utils/utils.js";

const productNameErrorMsg       = document.getElementById("product-name-error-msg");
const selectCategoryErrorMsg    = document.getElementById("select-category-error-msg");
const brandErrorsg              = document.getElementById("brand-error-msg");
const skuErrorMsg               = document.getElementById("sku-error-msg");
const upcErrorMsg               = document.getElementById("upc-error-msg");
const shortDescriptionErrorMsg  = document.getElementById("short-description-error-msg");



const detailDescriptionTextAreaSelector   = "#detailed-description";
const shortDescriptionTextAreaSelector    = "#short-description";
const metaDescriptionTextAreaSelector     = "#meta-description";
const warrantyDescriptionTextAreaSelector = "#warranty-description";


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



function nextPage(event, step) {
    event.preventDefault();

    const pageNumber = parseInt(step);
    const page = addNewProductPages[pageNumber];

   

    // TODO: Handle form data for each page here.
    // For now, just redirect to the next page as part of the Minimum Viable Product (MVP).

    if (!page) {
        throw new Error("Something went wrong and the page number couldn't be found!!!");
    }

    // use the if-statement for now, later switch it to a switch statement
    if (pageNumber - 1 === 1) {
       handleBasicInformationForm(pageNumber)
    }

    // redirectToNewPage(page);
}


function prevPage(event, pageNumber) {
    event.preventDefault();
    const page = addNewProductPages[parseInt(pageNumber)];

    
     // TODO: Handle form data for each page here.
    // For now, just redirect to the previous page as part of the Minimum Viable Product (MVP).

    if (!page) {
        throw new Error("Something went wrong and the page number couldn't be found!!!");
    }

    redirectToNewPage(page);
}

window.nextPage = nextPage;
window.prevPage = prevPage;


async function populateCountrySelect() {
    const countriesSelectForm = document.querySelector("#countries");
    try {
        const filePath      = "../../../../countries.txt";
        const countriesData = await loadFile(filePath);

        if (countriesData) {
            const countries = countriesData.split('\n');

            countries.forEach((country) => {
                const value = country;
                const text  = country;

                const option = createOption(value, text);
                countriesSelectForm.appendChild(option);
            });
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

function createOption(value, text) {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = text;
    return option
}


function getAddProductDictOrCreate() {
    let addProduct = getItemFromLocalStorage("addProduct", true);

    if (!addProduct) {
        addProduct = {};
    };
    return addProduct;
}

function handleBasicInformationForm(pageNumber) {
    const form = document.getElementById("basic-product-information-form");

    if (!form) {
        throw new Error("Something went wrong and the form elements couldn't be found!!!")
    };

   

   
    const formData = new FormData(form);

    let productNameField      = true;
    let selectCategoryField   = true;
    let addCategoryField      = true;
    let brandField            = true;
    let skuField              = true;
    let upcField              = true;
    let shortDescriptionField = true;
     

    const {productName, selectCategory, addCategory, brand, sku, upc, shortDescription } = {
            productName: formData.get("product-name"),
            selectCategory: formData.get("select-category"),
            addCategory: formData.get("add-category"),
            brand: formData.get("brand"),
            sku: formData.get("sku"),
            upc: formData.get("upc"),
            shortDescription: formData.get("short-description")
      };

    if (!productName) {
        productNameField = false;
        showErrorMsg(productNameErrorMsg);
    };

    if (!selectCategory) {
        selectCategoryField = false;
        showErrorMsg(selectCategoryErrorMsg);
    };
    
    if (!brand) {
        brandField = false;
        showErrorMsg(brandErrorsg);
    };

    if (!sku) {
        skuField = false;
        showErrorMsg(skuErrorMsg);
    };

    if (!upc) {
        upcField = false;
        showErrorMsg(upcErrorMsg)
    };

    if (!shortDescription) {
        shortDescriptionField = false;
        showErrorMsg(shortDescriptionErrorMsg)
    }

    
    if (productNameField && selectCategoryField && brandField && skuField && upcField && shortDescriptionField) {

        const addProduct = getAddProductDictOrCreate();

        addProduct.productName       = productName;
        addProduct.selectCategory    = selectCategory;
        addProduct.addCategory       = addCategory;
        addProduct.brand             = brand;
        addProduct.sku               = sku;
        addProduct.upc               = upc;
        addProduct.shortDescription  =  shortDescription;

        saveToLocalStorage("addProduct", addProduct, true);
        redirectToNewPage(pageNumber);

    } else {
        // alert for now - later change to a more message
        alert("One or more of the elements are missing!!1");
    }
    
   
  

}

populateCountrySelect();


function showErrorMsg(msgElement, show=true) {
    msgElement.style.display = show ? "block": "none"
}