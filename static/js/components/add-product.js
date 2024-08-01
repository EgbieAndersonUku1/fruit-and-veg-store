import addNewProductPages from "../pages/pages.js";
import { redirectToNewPage } from "../utils/utils.js";
import { minimumCharactersToUse } from "./characterCounter.js";
import loadFile from "../utils/loader.js";
import { getItemFromLocalStorage, saveToLocalStorage } from "../utils/utils.js";
import { getFormEntries } from "../utils/formUtils.js";


// form


const basicForm = document.getElementById("basic-product-information-form");
basicForm.addEventListener("submit", handleBasicInformationForm)


// field selectors for textArea fields
const detailDescriptionTextAreaSelector   = "#detailed-description";
const shortDescriptionTextAreaSelector    = "#short-description";
const metaDescriptionTextAreaSelector     = "#meta-description";
const warrantyDescriptionTextAreaSelector = "#warranty-description";


// basic category fields
const selectProductCategoryElement  = document.getElementById("select-category");
const addCategoryLabelElement       = document.getElementById("add-category-label");
const addCategoryInputFieldElement  =  document.getElementById("add-category");
const basicFormTextAreaFieldElement = document.getElementById("short-description");




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



// populate field
async function populateCountrySelect() {
    const countriesSelectForm = document.querySelector("#countries");

    if (!countriesSelectForm) {
        console.warn("The countries elements selector wasn't found!!")
        return;
    }
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



function handleBasicInformationForm(e) {

    e.preventDefault();
    const pageNumber = 2;

    if (basicForm.reportValidity()) {
        const formEntries = getFormEntries(basicForm);
        handleFormCompletion(formEntries, pageNumber)
    } else {
        console.log("not passed")
    }
  
}





function handleFormCompletion(addProductObj, pageNumber) {
           
    saveToLocalStorage("addProduct", addProductObj, true);
    redirectToNewPage(addNewProductPages[pageNumber])
    
}






function showErrorMsg(msgElement, show=true) {
    msgElement.style.display = show ? "block": "none"
}


populateCountrySelect();

