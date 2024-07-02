/**
 * Finds an item in the items list by its ID.
 * 
 * @param {string|number} id - The ID of the item to find.
 * @param {Array} itemsList - The list of items to search through.
 * @returns {Object|undefined} - The item object if found, otherwise undefined.
 * @throws Will throw an error if itemsList parameter is not an array.
 */
function getItemByID(id, itemsList) {
    if (!Array.isArray(itemsList)) {
        throw new Error("The items list must be an array");
    }

    return itemsList.find((item) => item.id === parseInt(id));
}


export default getItemByID