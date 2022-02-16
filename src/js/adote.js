import { testRegexes } from "./form-validation/regexValidation.js";
import { validateDate } from "./form-validation/datesHandler.js";

const username = document.getElementById("ipt-fullname");
var testDateTime = true;

function validateForm(e) {
    if(!testRegexes() && !testDateTime) {
        let animationModal = new bootstrap.Modal(document.getElementById("animationModal"));

        /* Resets Form */
        document.getElementById("adoption").reset(); 

        animationModal.show();
        /* let successMsg = `Obrigado por realizar sua reserva, ${username.value}!`;
        alert(successMsg); */
    } else e.preventDefault();
    
}

document.getElementById("ipt-date").addEventListener("input", (e) => {
    testDateTime = validateDate(e);
}); // eventListener

document.getElementById("adoption").addEventListener("submit", validateForm); // eventListener