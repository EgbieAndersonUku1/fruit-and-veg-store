import orders from "../../../order.js";
import createTableHeaderRow from "../utils/createTableHeaders.js";
import { getItemFromLocalStorage,  saveToLocalStorage, redirectToNewPage } from "../utils/utils.js";


const productReviewTable = document.getElementById("products-review-table");
const pagination          = document.querySelector(".table-pagination");
const notFound            = document.querySelector(".not-found");


function createProductTable(orders, show=true) {

    if (!productReviewTable) {
        return;
    }
    if (!show) {
        productReviewTable.style.display = "none";
        pagination.style.display         = "none";
        notFound.style.display           = "block";
        return;
    } else {
        productReviewTable.style.display = "table";
        pagination.style.display         = "flex";
        notFound.style.display           = "none";
    }


        productReviewTable.innerHTML = "";
        const headers = ["Product ID", "Product Name", "Purchase Date", "Review Status", "Action", "Product Image"];
        
        const tableHeading = createTableHeaderRow(headers);
        const tableBody    = buildTableBody(orders);

        if (productReviewTable) {
            productReviewTable.appendChild(tableHeading);
            productReviewTable.appendChild(tableBody);
        }
    

}


function buildTableBody(orders) {
    const fragment = document.createDocumentFragment();

    if (!orders || !Array.isArray(orders)) {
        console.error("Orders data is not available or not an array.");
        return fragment;
    }


    orders.forEach((order) => {

        const tableMainRow = document.createElement("tr");
        const tableALink = createTableLink("Add/Edit", `${order.id}`);
        const tableImg = createTableImage(order);


        const NUMBER_OF_COLS_TO_CREATE = 6; 
        const tableDataElements       = [];

        // Create the <td> elements and store them in an array
        for (let i = 0; i < NUMBER_OF_COLS_TO_CREATE; i++) {
            tableDataElements.push(document.createElement("td"));
        }

        let [tableData1, tableData2, tableData3, tableData4, tableData5, tableData6] = tableDataElements;

        tableData1.textContent = `${order.id}`;
        tableData2.textContent = `${order.name}`;
        tableData3.textContent = `${order.dateOrderPlaced}`;
        tableData4             = getReviewStatus(tableData4, order);
        tableData5.appendChild(tableALink);
        tableData6.appendChild(tableImg);

       tableDataElements.forEach((tableData) => {
            tableMainRow.appendChild(tableData);

        })


        fragment.appendChild(tableMainRow);
    })

    return fragment;

}



function getReviewStatus(tableRowToUpdate, product) {

    let reviews = getItemFromLocalStorage("productReviews", true);
    let reviewsFound = true;

    if (!reviews) {
      reviewsFound = false;
      reviews = orders;
    }

    reviews.forEach((review) => {
        
        if (!reviewsFound) {
            tableRowToUpdate.textContent = "Not reviewed";
        } else if (reviewsFound && review.id === product.id && tableRowToUpdate.textContent !== "Pending review") {
            tableRowToUpdate.textContent = "Pending review";
        } else if (tableRowToUpdate.textContent !== "Pending review") {
            tableRowToUpdate.textContent = "Not reviewed";
        }
    })

    return tableRowToUpdate
}


function createTableLink(linkText, productID, hrefTag = "#", className = "table-link") {

    const tableLink = document.createElement("a");
    tableLink.href = hrefTag;
    tableLink.className = className;
    tableLink.textContent = linkText;
    tableLink.dataset.productID = productID;


    tableLink.addEventListener("click", handleLinkClick);

    return tableLink;

}

function createTableImage(order, className = "table-img") {
    const tableImg     = document.createElement("img");
    tableImg.src       = order.img;
    tableImg.alt       = `${order.name} icon`;
    tableImg.className = className;
    return tableImg;
}


function handleLinkClick(e) {
    const productID = e.currentTarget.dataset.productID;

    if (productID) {
        saveToLocalStorage("productTableLink", { id: parseInt(productID) }, true);
    }
    const urlPage = "add-review.html";
    redirectToNewPage(urlPage);
}


export default createProductTable