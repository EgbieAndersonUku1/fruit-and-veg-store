/**
 * Retrieves all form entries from a given form element.
 *
 * This function creates a `FormData` object from the provided form element
 * and converts it into a plain JavaScript object where each key is a form field name
 * and each value is the corresponding field value.
 *
 * @param {HTMLFormElement} form - The form element to extract data from.
 * @returns {Object} An object where each key is a form field name and each value is the field's value.
 */
function getFormEntries(form) {
    const formData = new FormData(form);
    const formEntries = {};

    for (const [key, value] of formData.entries()) {
        formEntries[key] = value;
    }

    return formEntries;
}


export {
    getFormEntries,
}