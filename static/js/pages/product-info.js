
import { createTableHeaderRow, createTableRow } from "../utils/createTableElements.js";
import { createTableLink } from "../utils/linkUtils.js";
import { getItemFromLocalStorage, removeItemFromLocalStorage } from "../utils/utils.js";
import AlertUtils from "../utils/alerts.js";

const allProductsDivElement = document.getElementById("all-products");
const productMessage        = document.getElementById("product-msg");
const clearProductButtonElement = document.getElementById("clearBtn");
const SAVE_TABLE_NAME = "products-list";

clearProductButtonElement.addEventListener("click", handleClearButton);

function showMessage(msg) {
    productMessage.textContent = msg;
    return;
}

function createTable() {
    if (!validateElements()) return;

  
    const productEntries = getItemFromLocalStorage(SAVE_TABLE_NAME, true);

    clearTable();
    
    if (!productEntries || productEntries.length === 0 || productEntries == null) {
        showMessage("You have not yet added a product");
        return;
    }

    const headers = ["ID", "Product Name", "Category", "Stock Quantity", "is Live", "Date created", "Action", "Action"];

    const table    = document.createElement("table");
    const tHeaders = createTableHeaderRow(headers);

    table.appendChild(tHeaders);

    const fragment = document.createDocumentFragment();
    appendTableRows(fragment, productEntries);

    table.appendChild(fragment);
    allProductsDivElement.appendChild(table);
}



function validateElements() {
    if (!(productMessage instanceof HTMLElement)) {
        console.warn("productMessage is not an instance of HTMLElement.");
        return false;
    }
    return true;
}


function clearTable() {
    productMessage.textContent = "";
    allProductsDivElement.innerHTML = ""; // Clear the existing table, if any data exists
}



function validateProductData(product) {
    const { itemID, "product-name": name, "select-a-category": selectedCategory, 
          "add-category": addedCategory, "quantity-stock": stock, isLive, dateCreated } = product;

    const productCategory = selectedCategory === "new" ? addedCategory : selectedCategory;

    if (itemID && name && productCategory && stock && isLive !== '' && dateCreated) {
        return { itemID, name, productCategory, stock, isLive, dateCreated };
    } else {
        console.error("One or more elements are missing for product ID:", itemID);
        return null;
    }
}


function appendTableRows(fragment, productEntries) {
    productEntries.forEach((product) => {
        const productData = validateProductData(product);
        if (productData) {
            const row = createTableRowData(productData);
            fragment.appendChild(row);
        }
    });
}


function createTableRowData(productData) {
    const { itemID: id, name, productCategory, stock, isLive, dateCreated } = productData;
    
    const listOfDataColumns = [
        id, name, productCategory, stock, isLive, dateCreated,
        "", // placeholder for the go live link
        ""  // placeholder for the action link
    ];

    const linkText = isLive ? "Deactivate" : "Go live";
    const additionalInformation = {
        6: createTableLink({ linkText: linkText, productID: id, className: "go-live", handleClick: handleVisibilityToggle }),
        7: createTableLink({ linkText: "Edit/Delete", productID: id, className: "action-link", handleClick: handleDeleteLinkClick }),
    };

    return createTableRow(listOfDataColumns, additionalInformation);
}



function handleVisibilityToggle(e) {
    e.preventDefault();
    console.log(e);

    // for now do nothing - later we handle the indvidual clicks
}


function handleDeleteLinkClick(e) {
    e.preventDefault();
    console.log(e);

    // for now do nothing - later we handle the indvidual clicks
}


function handleClearButton() {
    const productEntries = getItemFromLocalStorage(SAVE_TABLE_NAME, true);

    if (!productEntries) {
        AlertUtils.showAlert({
            title: "No Items to Delete",
            text: "There are no items available to delete.",
            icon: "info",
            confirmButtonText: "OK",
        });        
        return;
    };


    AlertUtils.showConfirmationAlert({
        title:  "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        confirmButtonText: "Yes, delete it",
        colorButtonOptions: {
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
        },
        func: () => {
            removeItemFromLocalStorage(SAVE_TABLE_NAME)
            // console.log("Test")
        }, 
        followUpAlertAttrs: {
            title: "Completed!",
            text: "The action has been successfully completed.",
            icon: "success"
        }
        
    });

    clearTable();
    showMessage("You have not yet added a product");
}

createTable();