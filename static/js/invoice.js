import getItemByID from "./itemUtils.js";
import orders from "../../order.js";
import { getItemFromLocalStorage, getFormattedCurrentDate } from "./utils.js";



function updateInvoice() {
   
    const order = getItemByID(getItemFromLocalStorage("invoice"), orders);
    
    if (!order) {
        throw new Error("The invoice objects was not found!!!")
    }

    try {
        setTitle(order);
        setOrderDispatchDate(order);
        getOrderDetails(order);
        getItemOrder(order);
        getItemPayment(order);
    
       
    } catch (error) {
        console.error(error);   
    }
   
}


function getOrderDetails(order) {
    
    const orderDetailsElements  = document.querySelectorAll(".order-details div");
    if (orderDetailsElements < 3 ) {
        throw new Error("The length of the elements must be 3");
    };
    const [orderDateDivElement, orderNumberDivElement, orderTotalDivElement] = orderDetailsElements;

    setDateToDateElement(orderDateDivElement, order)
    setOrderNumberToOrderNumberElement(orderNumberDivElement, order);
    setTotalToOrderTotalElement(orderTotalDivElement, order);
}


function getItemOrder(order) {
    const orderItemsElements = document.querySelectorAll(".order-item div");

    if (orderItemsElements.length < 3) {
        throw new Error("The length of the elements must be 3");
    };
    const [itemNameDivElement, shippingAddressDiv, shippingSpeedDiv]  = orderItemsElements;
    setItemTitleToTitleElement(itemNameDivElement, order);
    setAddressToAddressElement(shippingAddressDiv, order);
    setShippingSpeedToSpeedElement(shippingSpeedDiv, order);

    setItemPrice(order);
}



function getItemPayment(order) {
    const paymentElements = document.querySelectorAll(".order-details__payment .row");

    if (paymentElements.length < 3)  {
        throw new Error("The length of the elements must be 3");
    };

    const [row, row2, row3] = paymentElements;
    const payee = order.payee[0];
   

    // Extract the elements of row 1 - payment information
    const [paymentInfoElement, costBreakdownElement, costElement] = row.querySelectorAll("div");
    setTextContentOfParagraph(paymentInfoElement, `${payee.card.cardType} ending in ${payee.card.endingDigit} `);

    validateElement(costElement);
   
    const [subtotalPElement, packagingElement] = costElement.querySelectorAll("p");

    validateElement(subtotalPElement);
    validateElement(packagingElement);

    subtotalPElement.textContent = `£${order.costBreakdown.subtotal}`;
    packagingElement.textContent = `£${order.costBreakdown.postageAndPackaging}`;
  

    // Extract the elements of row 2 - cost
    const [shippingAddressElement, costBreakdownElement2, costElement2] = row2.querySelectorAll("div");
    validateElement(shippingAddressElement);
    validateElement(costElement2);

   
    setAddressToAddressElement(shippingAddressElement, order)
   
    const [beforeVatCost, VAT] = costElement2.querySelectorAll("p");
    validateElement(beforeVatCost);
    validateElement(VAT);

    beforeVatCost.textContent = `£${order.costBreakdown.beforeVAT}`;
    VAT.textContent           = `£${order.costBreakdown.vat}`;
        
    
    // Extract elements of row 3
    const [paymentInfoElement3, costBreakdownElement3, costElement3] =  row3.querySelectorAll("div");
    validateElement(paymentInfoElement3)
    validateElement(costBreakdownElement3);
    validateElement(costElement3);
    setTextContentOfParagraph(costBreakdownElement3, `${payee.card.cardType} ending in ${payee.card.endingDigit}: Created on: ${getFormattedCurrentDate()}`);

    
    const [grandTotalPElement, costPElement] = costElement3.querySelectorAll("p");
    validateElement(grandTotalPElement);
    validateElement(costPElement);

    grandTotalPElement.textContent = order.costBreakdown.grandTotal;
    costPElement.textContent  = order.costBreakdown.total;

    
}



function setTitle(order) {
    const h3TitleElement  = document.getElementById("invoice-title");
    validateElements(h3TitleElement, order);
    h3TitleElement.textContent = `Final details for order: ${order.orderID}`;
}



function setDateToDateElement(orderDateDivElement, order) {

    validateElements(orderDateDivElement, order);
    const dateElement = orderDateDivElement?.querySelector("time");
    dateElement.textContent = order.dateOrderPlaced;

}

function setOrderNumberToOrderNumberElement(orderNumberDivElement, order) {

    validateElements(orderNumberDivElement, order)
    setTextContentOfParagraph(orderNumberDivElement, `EUorganics order number: ${order.orderID}`)
}

function setTotalToOrderTotalElement(orderTotalDivElement, order) {
    validateElements(orderTotalDivElement, order);
    setTextContentOfParagraph(orderTotalDivElement, `Order Total: £${order.total}` )
}


function setItemTitleToTitleElement(itemNameElement,  order) {
    validateElements(itemNameElement, order);
    setTextContentOfParagraph(itemNameElement, order.name);
}

function setShippingSpeedToSpeedElement(speedElement, order) {
    validateElements(speedElement, order);
    setTextContentOfParagraph(speedElement, order.shippingSpeed);
}

function setAddressToAddressElement(addressElement, order) {
    validateElements(addressElement, order);

    const [address, city, postcode] = addressElement.querySelectorAll(".address-details p");
   

    address.textContent = order.payee[0].details.shippingAddress;
    city.textContent    = order.payee[0].details.city;
    postcode.textContent = order.payee[0].details.postcode;
   
}


function setItemPrice(order) {
    const orderPriceElement = document.querySelector(".order-price");
    validateElements(orderPriceElement, order);

    setTextContentOfParagraph(orderPriceElement, `£${order.total}`)
}


function setOrderDispatchDate(order) {
    const dispatchedDateElement = document.querySelector(".order-dispatched");

    validateElement(dispatchedDateElement);
    dispatchedDateElement.textContent = order.dateToDeliver;

}

/**
 * Utility function to validate the input elements.
 * @param {HTMLElement} element - The HTML element to validate.
 * @param {Object} order - The order object to validate.
 * @throws Will throw an error if element is not an HTMLElement or order is falsy.
 */
function validateElements(element, order) {
    if (!(element instanceof HTMLElement) || !order) {
        throw new Error("One or more of the elements is empty");
    }
}


/**
 * Utility function to validate the input elements.
 * @param {HTMLElement} element - The HTML element to validate.
 * @param {Object} order - The order object to validate.
 * @throws Will throw an error if element is not an HTMLElement or order is falsy.
 */
function validateElement(element) {
    if (!(element instanceof HTMLElement)) {
        throw new Error("One or more of the elements is empty");
    }
}


/**
 * Utility function to set the text content of a <p> element within a parent element.
 * @param {HTMLElement} parentElement - The parent element containing the <p> element.
 * @param {string} text - The text content to set.
 */
function setTextContentOfParagraph(parentElement, text) {
    const pElement = parentElement.querySelector("p");
    if (pElement) {
        pElement.textContent = text;
    } else {
        console.warn("No <p> element found within the provided element.");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    function print() {
        print()
    }
    
    updateInvoice();
});




