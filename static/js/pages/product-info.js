import { createTableHeaderRow, createTableRow } from "../utils/createTableElements.js";
import { createTableLink } from "../utils/linkUtils.js";
import { getItemFromLocalStorage, removeItemFromLocalStorage, saveToLocalStorage } from "../utils/utils.js";
import { getItemIndexAndValueByID } from "../utils/itemUtils.js";

import AlertUtils from "../utils/alerts.js";

const allProductsDivElement     =  document.getElementById("all-products");
const liveProductDivElement     =  document.getElementById("live-products");
const notLiveProductDivElement  =  document.getElementById("not-live");
const productMessage            =  document.getElementById("product-msg");
const clearProductButtonElement =  document.getElementById("clearBtn");
const tabDivElement             =  document.getElementById("tabs");
const tabsElements              =  document.querySelectorAll(".tab");
const tabContents               =  document.querySelectorAll(".tab-content");


let productTableElement;        // to be assigned later when the `createTable` function is called


const LIVE_TEXT            = "Go live";
const DEACTIVATE_TEXT      = "Deactivate";
const SAVE_TABLE_NAME      = "products-list";
const GO_LIVE_CLASS        = "go-live";
const ACTION_LINK_CLASS    = "action-link";

const productEntries       = getItemFromLocalStorage(SAVE_TABLE_NAME, true);

document.addEventListener("DOMContentLoaded", setUp);
clearProductButtonElement.addEventListener("click", handleClearButton);
tabDivElement.addEventListener("click", handleTabDelegation);




function showMessage(msg) {
    productMessage.textContent = msg;
    return;
}

function createTable() {
    if (!validateElements()) return;

    clearTable();
    
    if (!productEntries || productEntries.length === 0 || productEntries == null) {
        showMessage("You have not yet added a product");
        return;
    }
   
    const headers     = ["ID", "Product Name", "Category", "Stock Quantity", "is Live", "Date created", "Action", "Action"];
    const table       = document.createElement("table");
    table.className   = "product-table";
    const tHeaders    = createTableHeaderRow(headers);

    table.appendChild(tHeaders);

    const fragment = document.createDocumentFragment();
    appendTableRows(fragment, productEntries);

    table.appendChild(fragment);
    allProductsDivElement.appendChild(table);

    getProductTableElement();
   
}


// The table is dynamically generated when `createTable` is called. As a result,
// `productTableElement = document.querySelector(".product-table");` will return null 
// if executed before `createTable` runs, because the `.product-table` class doesn't exist yet.
//
// Declaring `productTableElement` at the top of the page won't solve this issue, 
// as it will remain null if the table is created later. Since `createTable` only 
// adds the `.product-table` class and generates the table once, `document.querySelector(".product-table")` 
// needs to be called after the table is created to ensure `productTableElement` is correctly assigned.
//
// This function ensures `productTableElement` is assigned only when needed. It checks if 
// `productTableElement` is null, assigns it if necessary, and logs a message. This ensures 
// the function is only called once to avoid unnecessary DOM queries.
function getProductTableElement() {
    if (!productTableElement) {
        productTableElement = document.querySelector(".product-table");
        console.log("called once");
    }
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
    const { id, "product-name": name, "select-a-category": selectedCategory, 
          "add-category": addedCategory, "quantity-stock": stock, isLive, dateCreated } = product;

    const productCategory = selectedCategory === "new" ? addedCategory : selectedCategory;

    if (id && name && productCategory && stock && isLive !== '' && dateCreated) {
        return { id, name, productCategory, stock, isLive, dateCreated };
    } else {
        console.error("One or more elements are missing for product ID:", id);
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
    const { id, name, productCategory, stock, isLive, dateCreated } = productData;
    
    const listOfDataColumns = [
        id, name, productCategory, stock, isLive, dateCreated,
        "", // placeholder for the go live link
        ""  // placeholder for the action link
    ];

    const linkText = isLive ? DEACTIVATE_TEXT : LIVE_TEXT;
    const additionalInformation = {
        6: createTableLink({ linkText: linkText, productID: id, className: GO_LIVE_CLASS }),
        7: createTableLink({ linkText: "Edit/Delete", productID: id, className: ACTION_LINK_CLASS }),
    };

    return createTableRow(listOfDataColumns, additionalInformation);
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
        
        clearTable();
        showMessage("You have not yet added a product");
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
            removeItemFromLocalStorage(SAVE_TABLE_NAME);
            clearTable();
            showMessage("You have not yet added a product");
            // console.log("Test")
        }, 
        followUpAlertAttrs: {
            title: "Completed!",
            text: "The action has been successfully completed.",
            icon: "success",
            confirmButtonText: "Great"
        }
        
    });

  
}



createTable();


productTableElement?.addEventListener("click", handleEventDelegation);

function handleEventDelegation(e) {
    e.preventDefault();
    let clickedCell = e.target;

    switch(true){
        case clickedCell.className === GO_LIVE_CLASS:
        processGoLiveCell(clickedCell);
    }
 
};

// Constants for Tab IDs
const ALL_PRODUCT_TAB_ID      = "all-products-tab";
const LIVE_PRODUCT_TAB_ID     = "live-products-tab";
const NOT_LIVE_PRODUCT_TAB_ID = "not-live-products-tab";



// Map of tab IDs to their corresponding content and tab elements
const tabMap = {
    [ALL_PRODUCT_TAB_ID]: {
        contentElement: allProductsDivElement,
        tabElement: tabsElements[0],
    },
    [LIVE_PRODUCT_TAB_ID]: {
        contentElement: liveProductDivElement,
        tabElement: tabsElements[1],
    },
    [NOT_LIVE_PRODUCT_TAB_ID]: {
        contentElement: notLiveProductDivElement,
        tabElement: tabsElements[2],
    }
};

// Function to handle tab delegation
function handleTabDelegation(e) {
    e.preventDefault();

    const clickedTab = e.target;
    const tabInfo    = tabMap[clickedTab.id];

    if (!tabInfo) {
        console.warn(`Unhandled tab ID: ${clickedTab.id}`);
        return;
    }

    hideAllTabContent();
    removeActiveFromTabs();

    toggleTabContentVisibility(tabInfo.contentElement);
    toggleActiveTabVisibility(tabInfo.tabElement);
}

// Function to hide all tab content
function hideAllTabContent() {
    tabContents.forEach((tabElement) => {
        if (!tabElement) {
            console.warn(`Element not found: ${tabElement}`);
            return;
        }

        tabElement.classList.add("hide");
    });
}

// Function to remove the 'active' class from all tabs
function removeActiveFromTabs() {
    tabsElements.forEach((tabElement) => {
        if (!tabElement) {
            console.warn(`Tab element not found: ${tabElement}`);
            return;
        }

        tabElement.classList.remove("active");
    });
}

function toggleTabContentVisibility(tabElement) {
    tabElement.classList.toggle("hide");
}

function toggleActiveTabVisibility(tabElement) {
    tabElement.classList.toggle("active");
}


function setUp() {
    hideAllTabContent();

    toggleTabContentVisibility(allProductsDivElement);
    removeActiveFromTabs();

    const firstTab = tabsElements[0];
    toggleActiveTabVisibility(firstTab);
}



function processGoLiveCell(clickedCell) {
    const productID         = clickedCell.dataset.productID;
    const [index, product]  = getItemIndexAndValueByID(productID, productEntries);

    const row               = clickedCell.closest('tr'); // Find the closest 'tr' element that is the table row element
    const rowIndex          = Array.prototype.indexOf.call(row.parentNode.children, row); 
    const cellIndexToUpdate = 4;

    updateProductElements(index, product, clickedCell); 
    updateProductLiveStatusCell(rowIndex, cellIndexToUpdate, product);
}


function updateProductLiveStatusCell(rowIndex, cellIndexToUpdate, product) {
    let rows = productTableElement.querySelectorAll('tr');

    // Check if the rowIndex is within the range of available rows
    if (rowIndex >= 0 && rowIndex < rows.length) {
        let row = rows[rowIndex];
        updateCellInRow(row, cellIndexToUpdate, product);
    } else {
        console.error('Row index is out of range. Available rows:', rows.length);
    }
}


function updateCellInRow(row, cellIndexToUpdate, product) {
    let cells = row.querySelectorAll('td');
    
    // Check if the cellIndexToUpdate is within the range of available cells in the row
    if (cellIndexToUpdate >= 0 && cellIndexToUpdate < cells.length) {

        // Update the content of the specified cell only
        cells[cellIndexToUpdate].textContent = product.isLive;
    } else {
        console.error('Cell index is out of range. Available cells in row:', cells.length);
    }
}


function updateProductElements(index, product, link) {
   
    let text;

    if (!validateIndex(index) || !validateLink(link)) {
        return;
    };

    switch(true) {
        case link.textContent.toUpperCase() === LIVE_TEXT.toUpperCase():

            link.textContent             = DEACTIVATE_TEXT;
            product.isLive               = true;
            text                         = "Your Product Is Now Live";
            productEntries[index].isLive = product.isLive;
            break;
        
        case link.textContent.toUpperCase() === DEACTIVATE_TEXT.toUpperCase():
            link.textContent             = LIVE_TEXT;
            product.isLive               = false;
            text                         = "Your Product has Been Deactivated";
            productEntries[index].isLive = product.isLive;           
            break;
    }
    
    AlertUtils.showAlert({"title": "Update Successful",
        text:text,
        icon: "success",
        confirmButtonText: "Great!!",
    });

    saveToLocalStorage(SAVE_TABLE_NAME, productEntries, true);
   
}


function validateIndex(index) {
    if (index === undefined || index === null) {
        console.error("Something went wrong and the id couldn't be found");
        return false;
    }
    return true;
}

function validateLink(link) {
    if (!link) {
        console.error("Something went wrong and the link couldn't be found");
        return false;
    }
    return true;
};


