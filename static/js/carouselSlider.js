/**
 * The CarouselSlider component is designed to create a reusable and interactive carousel that can be used in any project
 * requiring a carousel element.
 * 
 * The CSS is not included as it can be styled independently according to the user's design. However, the HTML should be
 * structured as follows. The class names are subject to change, especially if you have multiple carousels on the same page
 * and need the CarouselSlider to differentiate between them. In such cases, you can use a unique ID for the CarouselSlider class
 * or a direct path to set CarouselSlider selectors.
 * 
 * The following HTML structure is assumed for the component to function correctly:
 * 
 * <div class="carousel-container">
 *     <div class="carousel">
 *         <div class="card-carousel">Card 1</div>
 *         <div class="card-carousel">Card 2</div>
 *         <div class="card-carousel">Card 3</div>
 *         <!-- Additional cards as needed -->
 *         <div class="card-carousel">Card (n + 1)</div>
 *     </div>
 *     <button class="carousel-button left-button prev-card">&#10094;</button>
 *     <button class="carousel-button right-button next-card">&#10095;</button>
 * </div>
 * 
 * Explanation:
 * 1. The outermost <div> with class "carousel-container" wraps the entire carousel structure. This class name can vary,
 *    as it is not directly referenced by the CarouselSlider class.
 * 
 * 2. Inside this container, there is a <div> with class "carousel" which contains multiple <div> elements with class "card-carousel".
 *    Each card represents an individual slide within the carousel.
 * 
 * 3. Two buttons are placed outside the "carousel" <div> but within the "carousel-container".
 *    These buttons have classes "prev-card" and "next-card", respectively, to navigate through the cards.
 * 
 * Usage:
 * 
 * The CarouselSlider class handles the initialization and functionality of the carousel.
 * It provides methods to set the main carousel container, previous and next buttons, and the carousel cards.
 * Call the 'init' method after setting the selectors to initialize the event listeners.
 * 
 * Example Usage with Default Selectors:
 * If your HTML structure uses the default parameter names (.carousel, .prev-card, .next-card, .card-carousel), initialize as follows:
 * 
 * const carousel = new CarouselSlider();
 * carousel.setCarouselContainer();
 * carousel.setPrevButton();
 * carousel.setNextButton();
 * carousel.setCardSelector();
 * carousel.init();
 * 
 * If your HTML structure has different class names or IDs, specify them using set methods before calling 'init':
 * 
 * const carousel = new CarouselSlider();
 * carousel.setCarouselContainer('new-carousel-selector');
 * carousel.setPrevButton('new-prev-button-selector');
 * carousel.setNextButton('new-next-button-selector');
 * carousel.setCardSelector('new-card-selector');
 * carousel.init();
 * 
 * Example with Multiple Carousels on the Same Page:
 * If you have multiple carousels on the same page, use unique IDs or direct paths for each carousel.
 * 
 * HTML:
 * 
 * <div id="carousel1" class="carousel-container">
 *     <div class="carousel">
 *         <div class="card-carousel">Card 1</div>
 *         <div class="card-carousel">Card 2</div>
 *         <!-- Additional cards as needed -->
 *     </div>
 *     <button class="carousel-button left-button prev-card">&#10094;</button>
 *     <button class="carousel-button right-button next-card">&#10095;</button>
 * </div>
 * 
 * <div id="carousel2" class="carousel-container">
 *     <div class="carousel">
 *         <div class="card-carousel">Card A</div>
 *         <div class="card-carousel">Card B</div>
 *         <!-- Additional cards as needed -->
 *     </div>
 *     <button class="carousel-button left-button prev-card">&#10094;</button>
 *     <button class="carousel-button right-button next-card">&#10095;</button>
 * </div>
 * 
 * JavaScript:
 * 
 * const carousel1 = new CarouselSlider();
 * carousel1.setCarouselContainer('#carousel1 .carousel');
 * carousel1.setPrevButton('#carousel1 .prev-card');
 * carousel1.setNextButton('#carousel1 .next-card');
 * carousel1.setCardSelector('#carousel1 .card-carousel');
 * carousel1.init();
 * 
 * const carousel2 = new CarouselSlider();
 * carousel2.setCarouselContainer('#carousel2 .carousel');
 * carousel2.setPrevButton('#carousel2 .prev-card');
 * carousel2.setNextButton('#carousel2 .next-card');
 * carousel2.setCardSelector('#carousel2 .card-carousel');
 * carousel2.init();
 */

class CarouselSlider {

    constructor() {
        this._currentIndex         = 0;
        this._mainCarouselDiv      = null;
        this._prevCardButton       = null;
        this._nextCardButton       = null;
        this._carouselCardElements = null;
    }

    /**
     * Sets the main carousel container element.
     * @param {string} [selector='.carousel'] - The CSS selector for the main carousel container.
     * @throws Will throw an error if the carousel container element is not found.
     */
    setCarouselContainer(selector = '.carousel') {
        this._mainCarouselDiv = document.querySelector(selector);
        this._isElementValid({element: this._mainCarouselDiv, errorMsg: `Carousel container "${selector}" not found!` });
    }

    /**
     * Sets the previous button element.
     * @param {string} [selector='.prev-card'] - The CSS selector for the previous button.
     * @throws Will throw an error if the previous button element is not found.
     */
    setPrevButton(selector = '.prev-card') {
        this._prevCardButton = document.querySelector(selector);
        this._isElementValid({element: this._prevCardButton, errorMsg: `Previous button "${selector}" not found!` });
    }

    /**
     * Sets the next button element.
     * @param {string} [selector='.next-card'] - The CSS selector for the next button.
     * @throws Will throw an error if the next button element is not found.
     */
    setNextButton(selector = '.next-card') {
        this._nextCardButton = document.querySelector(selector);
        this._isElementValid({element: this._nextCardButton, errorMsg: `Next button "${selector}" not found!` });
    }

    /**
     * Sets the carousel card elements.
     * @param {string} [selector='.card-carousel'] - The CSS selector for the carousel cards.
     * @throws Will throw an error if no carousel card elements are found.
     */
    setCardSelector(selector = '.card-carousel') {
        this._carouselCardElements = document.querySelectorAll(selector);
        if (this._carouselCardElements.length === 0) {
            throw new Error(`No cards found with selector "${selector}"!`);
        }
    }

    /**
     * Validates if the element is present in the DOM.
     * @param {Object} params - The parameters object.
     * @param {HTMLElement} params.element - The DOM element to validate.
     * @param {string} params.errorMsg - The error message to throw if the element is not found.
     * @throws Will throw an error if the element is not found.
     * @private
     */
    _isElementValid({element, errorMsg}) {
        if (!element) {
            throw new Error(errorMsg);
        }
    }

    /**
     * Updates the carousel position based on the current index.
     * @private
     */
    _updateCarousel() {
        const cardWidth = this._mainCarouselDiv.offsetWidth;
        const newTransformValue = -this._currentIndex * cardWidth;
        this._mainCarouselDiv.style.transform = `translateX(${newTransformValue}px)`;
    }

    /**
     * Handles the click event for the previous card button.
     * @private
     */
    _handlePrevCard() {
        if (this._currentIndex > 0) {
            this._currentIndex--;
        } else {
            this._currentIndex = this._carouselCardElements.length - 1; 
        }
        this._updateCarousel();
    }

    /**
     * Handles the click event for the next card button.
     * @private
     */
    _handleNextCard() {
        if (this._currentIndex < this._carouselCardElements.length - 1) {
            this._currentIndex++;
        } else {
            this._currentIndex = 0;  // Loop back to the first card
        }
        this._updateCarousel();
    }

    /**
     * Initializes the carousel by adding event listeners to the previous and next buttons.
     * @throws Will throw an error if the carousel is not fully initialized.
     */
    init() {
        if (!this._mainCarouselDiv || !this._prevCardButton || !this._nextCardButton || !this._carouselCardElements) {
            throw new Error("CarouselSlider is not fully initialized. Ensure all selectors are set.");
        }

        this._prevCardButton.addEventListener("click", () => this._handlePrevCard());
        this._nextCardButton.addEventListener("click", () => this._handleNextCard());
    }
}

export default CarouselSlider;