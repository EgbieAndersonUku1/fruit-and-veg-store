const addToCartMsg         = document.querySelector(".addToItem-logged-msg");
const dimBackgroundElement = document.querySelector(".dim-overlay");



function displayAddToCartMessage() {

    // Display the add-to-cart message and dim background
    addToCartMsg.style.display         = "flex";
    dimBackgroundElement.style.display = "block";
    const DISPLAY_TIME_MS              = 3000; 


    setTimeout(() => {
        addToCartMsg.style.display = "none";
        dimBackgroundElement.style.display = "none";
    }, DISPLAY_TIME_MS);

}


export {
    displayAddToCartMessage
}