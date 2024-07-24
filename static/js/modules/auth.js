const authenticationContainer = document.querySelector(".authentication");
const loginLinkElement        =  document.getElementById("login");
const closeWindowIconElement  = document.querySelector(".auth-close-icon");


loginLinkElement?.addEventListener("click", handleLoginClick);
closeWindowIconElement?.addEventListener("click", handleCloseIcon);


function handleLoginClick(e) {
    e.preventDefault();

    if (!authenticationContainer) {
        throw new Error("The authentication container couldnt be found!!");
    }
    authenticationContainer.classList.add("show");
}


function handleCloseIcon(e) {
    e.preventDefault();
    console.log("clicked")
    if (!closeWindowIconElement) {
        throw new Error("The window close icon wasn't found!!");
    };

 
    authenticationContainer.classList.remove("show");
              
}