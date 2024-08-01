

/**
 * Retrieves the minimum character count for a text or textarea field.
 *
 * @param {HTMLInputElement|HTMLTextAreaElement} fieldElement - The input or textarea element.
 * @returns {number|null} - The minimum character count, or null if not specified.
 * @throws {Error} - Throws an error if the element is not a text or textarea field.
 */
function getMinCharCount(fieldElement) {
    if (!fieldElement) {
        throw new Error("The element returned is blank");
    }

    if (fieldElement.type === "textarea" || fieldElement.type === "text") {
        const minChar = fieldElement.getAttribute("minlength");
        return minChar ? parseInt(minChar, 10) : null;
    }   
   
    throw new Error("The field must be either a text or textarea field");
}



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
    getMinCharCount
}