import { saveToLocalStorage, redirectToNewPage } from "./utils.js";

const viewItemButtons  = document.querySelectorAll(".order-information .info-btns .view-item-btn");



viewItemButtons.forEach((buttonElement) => {
    buttonElement.addEventListener("click", (e) => {
        const id = buttonElement.getAttribute('data-order-id');
    
        if (id) {
            saveToLocalStorage("itemOrder", id);
            const urlPage = "view-item.html";
            redirectToNewPage(urlPage);
            
        }
        
    })
})