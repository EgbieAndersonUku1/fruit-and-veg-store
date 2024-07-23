




/**
 * Filters an array of items to include only those with "Pending review" status.
 * 
 * @param {Array} items - The array of items to filter.
 * @returns {Array} - The filtered array of items with "Pending review" status.
 * @throws {Error} - If the input is not an array or if any object in the array does not have an 'isReviewed' property.
 */
function filterByReviewPending(items) {
    return filterByHelper(items, (item) => {
        if (typeof item.isReviewed !== 'string') {
            throw new Error('The "isReviewed" property must be a string');
        }
        return item.isReviewed.toLowerCase() === "pending review".toLowerCase();
    });
}


/**
 * Filters an array of items to include only those with "Not reviewed" status.
 * 
 * @param {Array} items - The array of items to filter.
 * @returns {Array} - The filtered array of items with "Not reviewed" status.
 * @throws {Error} - If the input is not an array or if any object in the array does not have an 'isReviewed' property.
 */
function filterByNotReviewed(items) {
    return filterByHelper(items, (item) => {
        if (typeof item.isReviewed !== 'string') {
            throw new Error('The "isReviewed" property must be a string');
        }
        return item.isReviewed.toLowerCase() === "not reviewed".toLowerCase();
    });
}

/**
 * Helper function to filter items based on a provided filtering function.
 * 
 * @param {Array} items - The array of items to filter.
 * @param {Function} filterBy - The function used to filter items. It should return a boolean indicating if the item should be included.
 * @returns {Array} - The filtered array of items.
 * @throws {Error} - If the input is not an array or if any object in the array does not have an 'isReviewed' property.
 */
function filterByHelper(items, filterBy) {
    if (!Array.isArray(items)) {
        throw new Error(`The items must be an array, not type: ${typeof items}`);
    }

    return items.filter((item) => {
        if (!item.hasOwnProperty('isReviewed')) {
            throw new Error('All objects in the array must have an "isReviewed" property');
        }

        return filterBy(item);
    });
}



export  {
    filterByReviewPending,
    filterByNotReviewed
}