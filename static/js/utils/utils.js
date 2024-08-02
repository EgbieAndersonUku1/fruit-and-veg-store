
function getRandomCharacter(character) {
    return character.charAt(Math.floor((Math.random() * character.length)));
}

// To be used in conjuction to with a JWT in order to generate a secure JWT_TOKEN
function generateSessionKey() {

    const capital     = "ABCDEFGHIJKLMNOPQRSTUVWXYXZ";
    const lower       = "abcdefghijklmnopqrstuvwxyz";
    const punctuation = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    const string      = `${capital}${lower}${punctuation}`;

    const sessionKeyArray = [];
  

    for (let i=0; i < string.length; i++) {
        const char = getRandomCharacter(string);
        sessionKeyArray.push(char);
    }

    const sessionKeyString = sessionKeyArray.join("");
    return `SessionKey$-${sessionKeyString}`;
}


function saveToLocalStorage(name, valueToSave, stringfy = false) {
    if (!stringfy) {
        localStorage.setItem(name, valueToSave); 
    } else {
        localStorage.setItem(name, JSON.stringify(valueToSave)); 
    }
}


function getItemFromLocalStorage(name, parse = false) {
    const item = localStorage.getItem(name);
    return parse ? JSON.parse(item) : item; 
}


function removeItemFromLocalStorage(name) {
    localStorage.removeItem(name);
}

function redirectToNewPage(newPageUrl) {
    window.location.href = newPageUrl;
}


function getCurrentDay() {
    return new Date().getDate();
  }
  
function getFormattedCurrentDate() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // months are 0-based
    const day = currentDate.getDate();
    return `${year}-${month}-${day}`;
  }
  


/**
 * Retrieves the values of all checkbox elements in the provided collection.
 *
 * This reusable function takes a collection of checkbox elements (either an array or NodeList)
 * and returns an array of their values. It throws an error if the input is not a valid collection
 * of elements. Only the values of input elements of type "checkbox" are included in the output.
 *
 * @param {Array|NodeList} checkboxElements - The collection of checkbox elements.
 * @returns {Array} - An array containing the values of the checkbox elements.
 * @throws {Error} - If the input is not a valid collection of elements.
 *
 * @example
 * const checkboxes = document.querySelectorAll('input[type="checkbox"]');
 * const values = getAllCheckBoxElementsValue(checkboxes);
 * console.log(values); // Output: Array of values of all checkboxes
 */
function getAllCheckBoxElementsValue(checkboxElements) {
    if (!checkboxElements || (!Array.isArray(checkboxElements) && !(checkboxElements instanceof NodeList))) {
        throw new Error("The input is not a valid collection of elements");
    }

    const selectedValues = [];
    checkboxElements.forEach((element) => {
        if (element instanceof HTMLInputElement && element.type === 'checkbox') {
            selectedValues.push(element.value);
        }
    });

    return selectedValues;
};


function getCurrentUrl() {
    return window.location.href.split("/");
}

  
export {
    generateSessionKey,
    saveToLocalStorage,
    getItemFromLocalStorage,
    removeItemFromLocalStorage,
    redirectToNewPage,
    getFormattedCurrentDate,
    getAllCheckBoxElementsValue,
    getCurrentUrl,
};