function preventNumberInputTyping(event) {
    console.log("preventNumberInputTyping called with key:", event.key, "code:", event.keyCode);

    // Allow: backspace, delete, tab, escape, enter, home, end, arrow keys
    const allowedKeys = [46, 8, 9, 27, 13, 37, 38, 39, 40]; 

    // Allow Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X, and function keys
    if (
        allowedKeys.includes(event.keyCode) ||
        (event.keyCode >= 112 && event.keyCode <= 123) || // F1 - F12 keys
        (event.keyCode === 65 && event.ctrlKey === true) || // Ctrl+A
        (event.keyCode === 67 && event.ctrlKey === true) || // Ctrl+C
        (event.keyCode === 86 && event.ctrlKey === true) || // Ctrl+V
        (event.keyCode === 88 && event.ctrlKey === true) || // Ctrl+X
        (event.keyCode === 35 || event.keyCode === 36)      // home & end
    ) {
        return; 
    }

    event.preventDefault();
}


export default preventNumberInputTyping;