
const boxes     = document.querySelectorAll(".box");
const MOUSEOUT  = "mouseout";
const MOUSEOVER =  "mouseover";


boxes.forEach((box) => {

    const imgContainer = box.querySelector(".img-box");
    const images       = imgContainer ? imgContainer.querySelectorAll("img") : [];

    if (images.length >=2) {

        box.addEventListener(MOUSEOVER, (e) => handleImagesRotation(e.type, images));
        box.addEventListener(MOUSEOUT, (e) => handleImagesRotation(e.type, images));
    }
   
    function handleImagesRotation(type, images) {

        const [img, img2]           = images;
        const DELAY_IN_MILLISECONDS = 400;

        switch (true) {

            case type === "mouseover":
                img.style.transform = "rotate(180deg)";

                setTimeout(() => {
                    img.style.display  = "none";
                    img2.style.display = "block";
                }, DELAY_IN_MILLISECONDS);

                break;
            
            case type === "mouseout":
                img.style.transform = "rotate(360deg)";
                
                setTimeout(() => {
                    img.style.display = "block";
                    img2.style.display = "none";
                }, DELAY_IN_MILLISECONDS);
                break;
        }
       
    }

   
})


