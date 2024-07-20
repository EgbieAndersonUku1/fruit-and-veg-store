import orders from "../../order.js";
import { getItemFromLocalStorage,  saveToLocalStorage, redirectToNewPage } from "./utils.js";


const filledStarsSrc   = "../../../static/img/icons/star-filled.svg";
const unfilledStarsSrc = "../../../static/img/icons/star-unfilled.svg";

const ratingDiv  = document.querySelector(".product-ratings");
const clearBtn   = document.getElementById("clear-btn");

addEventListenerToStar();


function addEventListenerToStar() {

    if (ratingDiv) {
        ratingDiv.addEventListener("click", handleStarClick);
    }
   
}


function handleStarClick(e) {

    if (e.target.tagName === 'A' || e.target.tagName === 'IMG') {
        e.preventDefault();
        
        if (clearBtn.style.display !== "block") {
            clearBtn.style.display = "block";
        }
        
        const star = e.target.closest('a');
        renderStar(parseInt(star.dataset.value));

    }
}




/**
 * Renders stars in the ratingDiv element.
 * 
 * This function clears the ratingDiv element and appends a new set of stars to it.
 * By default, it renders colored stars. If the renderEmptyStars flag is set to true,
 * it renders empty, uncoloured stars.
 * 
 * @param {number} numOfStars - The number of stars to render.
 * @param {boolean} [renderEmptyStars=false] - Flag to determine if the stars should be empty (uncoloured).
 *                                             If true, renders empty stars.
 *                                             If false, renders coloured stars.
 */
function renderStar(numOfStars, renderEmptyStars=false) {
    ratingDiv.innerHTML = "";
    let stars;
    if (!renderEmptyStars) {
        stars = createRatingStars(numOfStars, numOfStars);
    } else {
        stars = createRatingStars(numOfStars, numOfStars, numOfStars, true);

        if (clearBtn.style.display === "block") {
            clearBtn.style.display = "none";
        }
     
    }
    ratingDiv.appendChild(stars);
}




function createRatingStars(numOfStarsToCreate, rating, totalNumberOfStars = 5, createEmptyStars=false) {
    const fragment = document.createDocumentFragment();
    
    for (let i = 1; i <= totalNumberOfStars; i++) {
        const aTag = document.createElement("a");
        const imgTag = document.createElement("img");

        aTag.dataset.value   = i;
        imgTag.dataset.value = i;
        aTag.id              = rating;
        aTag.href            = "#";

        if (i <= numOfStarsToCreate && (!createEmptyStars)) {
            imgTag.src = filledStarsSrc;
            imgTag.alt = "star-filled";
            imgTag.classList.add("star-filled", "star-rating");
           
        } else {
            imgTag.src = unfilledStarsSrc;
            imgTag.alt = "star-unfilled";
            imgTag.classList.add("star-unfilled", "star-rating");
         
        }

        aTag.appendChild(imgTag);
        fragment.appendChild(aTag);
    }
    return fragment;
}


function createProductTable() {
    const productReviewTable = document.getElementById("products-review-table");
    const tableHeading = createTableHeading();
    const tableBody    = buildTableBody();

    if (productReviewTable) {
        productReviewTable.appendChild(tableHeading);
        productReviewTable.appendChild(tableBody);
    }
   
}

function createTableHeading() {

    const tableMainRow = document.createElement("tr");
    const tableHeader1 = document.createElement("th");
    const tableHeader2 = document.createElement("th");
    const tableHeader3 = document.createElement("th");
    const tableHeader4 = document.createElement("th");
    const tableHeader5 = document.createElement("th");
    const tableHeader6 = document.createElement("th");

    tableHeader1.textContent = "Product ID";
    tableHeader2.textContent = "Product Name";
    tableHeader3.textContent = "Purchase Date";
    tableHeader4.textContent = "Review Status";
    tableHeader5.textContent = "Action";
    tableHeader6.textContent = "Product Image";

    tableMainRow.appendChild(tableHeader1);
    tableMainRow.appendChild(tableHeader2);
    tableMainRow.appendChild(tableHeader3);
    tableMainRow.appendChild(tableHeader4);
    tableMainRow.appendChild(tableHeader5);
    tableMainRow.appendChild(tableHeader6);

    return tableMainRow;

}


function buildTableBody() {
    const fragment = document.createDocumentFragment();

    if (!orders || !Array.isArray(orders)) {
        console.error("Orders data is not available or not an array.");
        return fragment;
    }

   
        orders.forEach((order) => {

            const tableMainRow  = document.createElement("tr");
            const tableALink    = createTableLink("Add/Edit", `${order.id}`);
            const tableImg      = createTableImage(order)

            let [tableData1, tableData2, tableData3, tableData4, tableData5, tableData6] = [
                         document.createElement("td"), 
                         document.createElement("td"),  
                         document.createElement("td"),
                         document.createElement("td"), 
                         document.createElement("td"), 
                         document.createElement("td") 
            ]
          

            tableData1.textContent = `${order.id}`;
            tableData2.textContent = `${order.name}`;
            tableData3.textContent = `${order.dateOrderPlaced}`;
            tableData4             =  getReviewStatus(tableData4, order);
            tableData5.appendChild(tableALink);
            tableData6.appendChild(tableImg);

            [ tableData1, tableData2, tableData3, tableData4, tableData5, tableData6].forEach((tableData) => {
                tableMainRow.appendChild(tableData);
               
            })

            
            fragment.appendChild(tableMainRow);
        })

        return fragment;
    
}

function getReviewStatus(tableRowToUpdate, product) {
    const item = getItemFromLocalStorage(`product-id-${product.id}`, true);
  
    if (item === null) {
         
        tableRowToUpdate.textContent = "Not reviewed"; 
    } else {
        tableRowToUpdate.textContent = item.review.hasReviewed ? "Pending review": "Not reviewed"; 

    }
    return tableRowToUpdate
}


function createTableLink(linkText, productID, hrefTag="#", className="table-link") {

    const tableLink             = document.createElement("a");
    tableLink.href              = hrefTag;
    tableLink.className         = className;
    tableLink.textContent       = linkText;
    tableLink.dataset.productID = productID;

  
    tableLink.addEventListener("click", handleLinkClick);

    return tableLink;
    
}

function createTableImage(order, className="table-img") {
    const tableImg     =  document.createElement("img");
    tableImg.src       = order.img;
    tableImg.alt       = `${order.name} icon`;
    tableImg.className = className;
    return tableImg;
}

function handleLinkClick(e) {
    const productID = e.currentTarget.dataset.productID;

    console.log(productID);
    if (productID) {
        saveToLocalStorage("productTableLink", {id: parseInt(productID)}, true);
    }
    const urlPage = "add-review.html";
    redirectToNewPage(urlPage);
}



createProductTable();

export default renderStar;