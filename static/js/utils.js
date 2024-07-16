
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
    if (stringfy) {
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
  

  
export {
    generateSessionKey,
    saveToLocalStorage,
    getItemFromLocalStorage,
    removeItemFromLocalStorage,
    redirectToNewPage,
    getFormattedCurrentDate,
};