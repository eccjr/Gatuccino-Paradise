/* =======================================================
    Reservation Validation
========================================================== */

const reservationDate = document.getElementById("ipt-date"); // Reservation Date Input
const reservationTime = { // Reservation Time Input
    hours: document.getElementById("ipt-hours"),
    minutes: document.getElementById("ipt-minutes"),
}

/* Gets minDate and maxDate for Reservation Date */
var now = new Date();
var minDate = now.toISOString().substring(0, 10);
var maxDate = new Date(now.setDate(now.getDate() + 30)).toISOString().substring(0, 10);
reservationDate.setAttribute("min", minDate);
reservationDate.setAttribute("max", maxDate);

/* Gets minTime for Reservation Time */
var minHours = now.getHours();
var minMinutes = now.getMinutes(); minMinutes += 35 - (minMinutes % 5);

if(minMinutes > 55) minHours += 1;
reservationTime.hours.setAttribute("min", (minHours < 8 || minHours > 18) ? 8 : minHours);
reservationTime.hours.setAttribute("value", (minHours < 8 || minHours > 18) ? 8 : minHours);

if(minHours < 8 || minHours > 18) minMinutes = 0;
reservationTime.minutes.setAttribute("min", (minMinutes > 55) ? 0 : minMinutes);
reservationTime.minutes.setAttribute("value", (minMinutes > 55) ? 0 : minMinutes);

var weekDay = new Date(reservationDate.value).getDay();
reservationTime.hours.setAttribute("max", (weekDay == 0 || weekDay == 6) ? 19 : 18);

export function validateDate(e) {
    const isWednesday = e.target.parentElement.querySelector(".is-wednesday");
    let weekDay = (e.target.valueAsDate).getUTCDay();

    /* Gets minTime for Reservation Time */
    reservationTime.hours.setAttribute("max", (weekDay === 0 || weekDay === 6) ? 18 : 17);

    if(weekDay == 3) {
        isWednesday.classList.remove("inactive");
        return true;
    } else {
        isWednesday.classList.add("inactive");
        return false;
    }
}
