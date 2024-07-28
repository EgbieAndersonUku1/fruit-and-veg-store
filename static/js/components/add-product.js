import addNewProductPages from "../pages/pages.js";
import { redirectToNewPage } from "../utils/utils.js";


function nextPage(event, pageNumber) {
    event.preventDefault();
    const page = addNewProductPages[parseInt(pageNumber)];

   

    // TODO: Handle form data for each page here.
    // For now, just redirect to the next page as part of the Minimum Viable Product (MVP).

    if (!page) {
        throw new Error("Something went wrong and the page number couldn't be found!!!");
    }

    redirectToNewPage(page);
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
