

/**
 * Sets up input handlers for the specified form field and icon.
 * @param {string} fieldSelector - CSS selector for the input field.
 * @param {string} iconSelector - CSS selector for the icon.
 */
function handleFormFieldElement(fieldSelector, iconSelector) {
    const inputFieldElement = document.querySelector(fieldSelector);
    const iconElement = document.querySelector(iconSelector);

    if (!inputFieldElement || !iconElement) {
        console.error("Error: Input field or icon element not found.");
        return;
    }
    setupInputHandlers(inputFieldElement, iconElement);
}

/**
 * Adds event listeners for keydown and blur events to the specified elements.
 * @param {HTMLElement} element - The input field element.
 * @param {HTMLElement} elementIcon - The icon element.
 */
function setupInputHandlers(element, elementIcon) {
    if (!isElementValid(element) || !isElementValid(elementIcon)) {
       console.error("Error: Invalid element or icon element.");
       return;
    } 

    element.addEventListener("keydown", (e) => handleInputEvent(e, elementIcon, element));
    element.addEventListener("blur", (e) => handleInputEvent(e, elementIcon, element));
}

/**
 * Handles input events and toggles the display of the icon element.
 * @param {Event} e - The event object.
 * @param {HTMLElement} elementIcon - The icon element.
 * @param {HTMLElement} element - The input field element.
 */
function handleInputEvent(e, elementIcon, element) {
    if (e.key === "Enter" || (e.type === "blur" && element.value)) {
        elementIcon.style.display = "flex";
    } else {
        elementIcon.style.display = "none";
    }
}



/**
 * This function `minimumCharactersToUse` is a reusable function designed for character count tracking in projects
 * where a `<textarea>` field is used.
 * 
 * To use this function, the project must include a `<textarea>` field in the form, similar to:
 * 
 * <textarea class="someClassNameHere" cols="30" rows="10" required maxlength="1500" minlength="50" placeholder="What you liked or disliked?">
 *     <p class="minimum-characters">Minimum characters to use: 50</p>
 *     <p class="maximum-characters">Maximum characters to use: 1000</p>
 * </textarea>
 * 
 * **HTML Structure Requirements:**
 * 1. The `<textarea>` element must have a class or ID to identify it.
 * 2. The first `<p>` tag, which displays the minimum character count, must have a class name. 
 * 3. The second `<p>` tag, which displays the maximum and remaining characters, must have a class name.
 * 4. Both `<p>` tags must include a message. The message should end with a semicolon, as the function appends the character 
 *    count to the message. For example:
 *    - If the message is "Number of characters remaining: " and the remaining characters are 50, 
 *      the display will be "Number of characters remaining: 50".
 * 
 * **Parameters for the Function:**
 * The following parameters must be included in the parameter object:
 * - minCharClass: {string} - CSS selector for the minimum characters count element.
 * - minCharMessage: {string} - Message to display for minimum characters.
 * - maxCharClass: {string} - CSS selector for the maximum characters count element.
 * - maxCharMessage: {string} - Message to display for maximum characters.
 * - minCharsLimit: {number} - Minimum number of characters allowed.
 * - maxCharsLimit: {number} - Maximum number of characters allowed.
 * 
 * **Example Parameter Object:**
 * const params = {
 *   minCharClass: '.minimum-characters',
 *   minCharMessage: 'Minimum characters to use: ',
 *   maxCharClass: '.maximum-characters',
 *   maxCharMessage: 'Number of characters remaining: ',
 *   minCharsLimit: 50,
 *   maxCharsLimit: 1000
 * };
 * 
 * **Example Usage:**
 * const textAreaClassNameSelector = ".textArea"; // Use "." for class selectors or "#" for ID selectors
 * minimumCharactersToUse(textAreaClassNameSelector, params);
 * 
 * **Note:**
 * The CSS for the color changes is mandatory. To enable the color changes, the following CSS classes must be defined:
 * 
 * .light-red {
 *   color: red;
 * }
 * 
 * .black-color {
 *   color: black;
 * }
 * 
 * .dark-green {
 *   color: var(--dark-green);
 * }
 * 
 * Styling the `<textarea>` box and its elements is optional but must follow the above CSS for character count displays.
 * 
 * @param {string} fieldElementSelector - CSS selector for the `<textarea>` field element.
 * @param {Object} params - Object containing various parameters for character limits and messages.
 * @param {string} params.minCharClass - CSS selector for the minimum characters element.
 * @param {string} params.minCharMessage - Message to display for minimum characters.
 * @param {string} params.maxCharClass - CSS selector for the maximum characters element.
 * @param {string} params.maxCharMessage - Message to display for maximum characters.
 * @param {number} params.minCharsLimit - Minimum characters limit.
 * @param {number} params.maxCharsLimit - Maximum characters limit.
 * @throws {Error} If the parameter object is not valid or does not contain the required keys.
 */
function minimumCharactersToUse(fieldElementSelector, params) {
    const fieldElement = document.querySelector(fieldElementSelector);

    if (!fieldElement) {
        console.error("Error: Field element not found.");
        return;
    }

    if (typeof params !== "object") {
        throw new Error("The parameter must be an object.");
    }

    const requiredKeys = [
        "minCharClass",
        "minCharMessage",
        "maxCharClass",
        "maxCharMessage",
        "minCharsLimit",
        "maxCharsLimit"
    ];

    for (const key of requiredKeys) {
        if (!params.hasOwnProperty(key)) {
            throw new Error(`Missing required parameter: ${key}`);
        }
    }

    fieldElement.addEventListener("input", (e) => handleCharacterCountEvent(e, params));
}

/**
 * Handles the input event to check both minimum and maximum character limits.
 * @param {Event} e - The event object.
 * @param {object} params - Object containing various parameters for character limits and messages.
 */
function handleCharacterCountEvent(e, params) {
    handleCharCount(e, params.minCharsLimit, params.minCharClass, params.minCharMessage);
    handleCharCount(e, params.maxCharsLimit, params.maxCharClass, params.maxCharMessage);
}

/**
 * Handles the character count for the specified limit.
 * @param {Event} e - The event object.
 * @param {number} limit - The character limit.
 * @param {string} classSelector - CSS selector for the output element.
 * @param {string} message - The message to display.
 */
function handleCharCount(e, limit, classSelector, message) {
    updateCharacterDisplay(e, limit, classSelector, message);
}

/**
 * Updates the character count display based on the limit.
 * @param {Event} e - The event object.
 * @param {number} limit - The character limit.
 * @param {string} outputSelector - CSS selector for the output element.
 * @param {string} messagePrefix - The prefix for the message to display.
 */
function updateCharacterDisplay(e, limit, outputSelector, messagePrefix) {
    const charsUsed = e.target.value.length;
    const charsRemaining = limit - charsUsed;
    const outputElement = document.querySelector(outputSelector);
    const message = `${messagePrefix}`;

    updateTextString(outputElement, charsRemaining, limit, message);
}

/**
 * Updates the text content and styles of the string element.
 * @param {HTMLElement} stringElement - The element displaying the character count.
 * @param {number} charsRemaining - The number of remaining characters.
 * @param {number} limit - The character limit.
 * @param {string} msg - The message to display.
 */
function updateTextString(stringElement, charsRemaining, limit, msg) {
    const EMPTY_VALUE = 0;
    if (stringElement) {
        stringElement.classList.remove("light-red", "black-color", "dark-green");
    }

    if (charsRemaining >= 0) {
        stringElement.textContent = `${msg} ${charsRemaining}`;
    }

    switch (true) {
        case charsRemaining === EMPTY_VALUE:
            stringElement.classList.add("black-color");
            break;
        case charsRemaining < EMPTY_VALUE:
            stringElement.classList.add("dark-green");
            break;
        case charsRemaining < limit:
            stringElement.classList.add("light-red");
            break;
    }
}


/**
 * Validates if the element is a valid DOM element.
 * @param {any} element - The element to validate.
 * @returns {boolean} True if the element is valid, false otherwise.
 */
function isElementValid(element) {
    return !!element && element instanceof Element;
}

export {
    handleFormFieldElement,
    minimumCharactersToUse,
};
