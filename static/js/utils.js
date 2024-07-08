
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


export default generateSessionKey;