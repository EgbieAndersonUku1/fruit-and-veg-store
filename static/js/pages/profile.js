import { validateElement } from "../errors/customErrors.js";


const billingAddressRadioContainer = document.getElementById("billing-address-radio-buttons");
const billingAddressElement        = document.getElementById("billing-address-details");

billingAddressRadioContainer?.addEventListener("click", handleRadioButtonClick);


function handleRadioButtonClick(e) {
    
    validateElement(billingAddressElement, "The billing address element couldn't be found", true);

    const value  = e.target.value;

    switch(true) {
        case value.toLowerCase() === "no":
            billingAddressElement.classList.remove("d-none");
            break;
        default:
            billingAddressElement.classList.add("d-none");
            break;

    }
}




