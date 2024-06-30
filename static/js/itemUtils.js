function getItemByID(id, itemsList) {

    if (!Array.isArray(itemsList)) {
        throw new Error("The items list must an array");
    }
    return itemsList.find((item) => item.id === parseInt(id));
}


export default getItemByID