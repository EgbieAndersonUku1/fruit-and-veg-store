import orders from "../../../order.js";
import createProductTable from "../components/createReviewTable.js";

const filledStarsSrc   = "../../../static/img/icons/star-filled.svg";
const unfilledStarsSrc = "../../../static/img/icons/star-unfilled.svg";

const ratingDiv  = document.querySelector(".product-ratings");
const clearBtn   = document.getElementById("clear-btn");


addEventListenerToStar();


function addEventListenerToStar() {

    if (ratingDiv) {
        ratingDiv.addEventListener("click", handleStarClick);
    }
   
}


function handleStarClick(e) {

    if (e.target.tagName === 'A' || e.target.tagName === 'IMG') {
        e.preventDefault();

        
        if (clearBtn.style.display !== "block") {
            clearBtn.style.display = "block";
        }
  
        const star = e.target.closest('a');
        renderStar(parseInt(star.dataset.value));

    }
}



/**
 * Renders stars in the ratingDiv element.
 * 
 * This function clears the ratingDiv element and appends a new set of stars to it.
 * By default, it renders colored stars. If the renderEmptyStars flag is set to true,
 * it renders empty, uncoloured stars.
 * 
 * @param {number} numOfStars - The number of stars to render.
 * @param {boolean} [renderEmptyStars=false] - Flag to determine if the stars should be empty (uncoloured).
 *                                             If true, renders empty stars.
 *                                             If false, renders coloured stars.
 */
function renderStar(numOfStars, renderEmptyStars=false) {
    ratingDiv.innerHTML = "";
    let stars;
    if (!renderEmptyStars) {
        stars = createRatingStars(numOfStars, numOfStars);
    } else {
        stars = createRatingStars(numOfStars, numOfStars, numOfStars, true);

        if (clearBtn.style.display === "block") {
            clearBtn.style.display = "none";
        }
     
    }
    ratingDiv.appendChild(stars);
}




function createRatingStars(numOfStarsToCreate, rating, totalNumberOfStars = 5, createEmptyStars=false) {
    const fragment = document.createDocumentFragment();
    
    for (let i = 1; i <= totalNumberOfStars; i++) {
        const aTag = document.createElement("a");
        const imgTag = document.createElement("img");

        aTag.dataset.value   = i;
        imgTag.dataset.value = i;
        aTag.id              = rating;
        aTag.href            = "#";

        if (i <= numOfStarsToCreate && (!createEmptyStars)) {
            imgTag.src = filledStarsSrc;
            imgTag.alt = "star-filled";
            imgTag.classList.add("star-filled", "star-rating");
           
        } else {
            imgTag.src = unfilledStarsSrc;
            imgTag.alt = "star-unfilled";
            imgTag.classList.add("star-unfilled", "star-rating");
         
        }

        aTag.appendChild(imgTag);
        fragment.appendChild(aTag);
    }
    return fragment;
}




createProductTable(orders);



export default renderStar;