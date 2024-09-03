const billingAddressRadioContainer = document.getElementById("billing-address-radio-buttons");
const billingAddressElement        = document.getElementById("billing-address-details")
billingAddressRadioContainer.addEventListener("click", handleRadioButtonClick);


console.log(billingAddressElement);


function handleRadioButtonClick(e) {
 
    const value  = e.target.value;

    switch(true) {
        case value.toLowerCase() === "no":
            billingAddressElement.classList.remove("d-none");
            break;
        case value.toLowerCase() === "yes":
            billingAddressElement.classList.add("d-none");
            break;

    }
}




