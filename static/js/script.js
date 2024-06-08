
const cards        = document.querySelectorAll(".card");
const productMenus = document.querySelectorAll(".featured-products__container__cards__product_menu");
const boxes        = document.querySelectorAll(".box");
const MOUSEOUT     = "mouseout";
const MOUSEOVER    =  "mouseover";



boxes.forEach((box) => {

    const imgContainer = box.querySelector(".img-box");
    const images       = imgContainer ? imgContainer.querySelectorAll("img") : [];

    addImageRotationListeners(box, images);
   
})


cards.forEach((card) => {

    const cardMenu = card.querySelector(".head .featured-products__container__cards__product_menu");
    const imgContainer = card.querySelector(".head .img-container");
    const images       = imgContainer ? imgContainer.querySelectorAll("img") : [];

    addImageRotationListeners(card, images, false);
    
    card.addEventListener(MOUSEOVER, () => handleCardMenuDisplay(cardMenu));
    card.addEventListener(MOUSEOUT, () => handleCardMenuDisplayRemoval(cardMenu));
   
  
})




function addImageRotationListeners(element, images, rotateImageFlag=true) {
    if (images.length >= 2) {
        element.addEventListener('mouseover', (e) => handleImagesRotation(e.type, images, rotateImageFlag));
        element.addEventListener('mouseout', (e) => handleImagesRotation(e.type, images, rotateImageFlag));
    }
}



function handleImagesRotation(type, images, rotate=true) {

    const [img, img2]           = images;
    const DELAY_IN_MILLISECONDS = 400;

    switch (true) {

        case type === "mouseover":
            if (rotate) {
                img.style.transform = "rotate(180deg)";
            }
          

            setTimeout(() => {
                img.style.display  = "none";
                img2.style.display = "block";
            }, DELAY_IN_MILLISECONDS);

            break;
        
        case type === "mouseout":
            if (rotate) {
                img.style.transform = "rotate(360deg)";
            }
          
            
            setTimeout(() => {
                img.style.display = "block";
                img2.style.display = "none";
            }, DELAY_IN_MILLISECONDS);
            break;
    }
   
}




function handleCardMenuDisplay(cardMenu) {
    cardMenu.classList.add("show");
}

function handleCardMenuDisplayRemoval(cardMenu){
    cardMenu.classList.remove("show");
}