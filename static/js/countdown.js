const datesElements = document.querySelectorAll(".deal-end p");

if (datesElements.length < 4) {
    throw new Error("The number of elements found must be four!!")
}

const [daysElem, hrsElem, minsElem, secsElem] = datesElements;


function dealCountDown(numOfdays = 7, hours = 23, minutes = 59, seconds = 59) {

    if (typeof numOfdays !== "number" || typeof hours !== "number" 
        || typeof minutes !== "number" || typeof seconds !== "number") {
        throw new Error("All parameters must be numbers");
    }

    let days = numOfdays;
    let hrs = hours;
    let mins = minutes;
    let secs = seconds;

    const interval = setInterval(() => {
        secs -= 1;

        if (secs < 0) {
            mins -= 1;
            secs = 59;
        }

        if (mins < 0) {
            hrs -= 1;
            mins = 59;
        }

        if (hrs < 0) {
            days -= 1;
            hrs = 23;
        }

        if (days < 0) {
            clearInterval(interval); // Stop the countdown
            console.log("Countdown ended.");
            return;
        }

        updateUI(days, hrs, mins, secs)
       

    }, 1000); 
}

function updateUI(days, hrs, mins, secs) {
    
 
    daysElem.textContent = days > 1 ? `${days} days` : `${days} day`;
    hrsElem.textContent  = hrs > 1 ? `${hrs} hours` : `${hrs} hour`;
    minsElem.textContent = mins > 1 ? `${mins} minutes` : `${mins} minute`;
    secsElem.textContent = secs > 1 ? `${secs} seconds` : `${secs} second`;
}

export default dealCountDown;

