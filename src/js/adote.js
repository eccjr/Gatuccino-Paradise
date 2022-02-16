import { testRegexes } from "./form-validation/regexValidation.js";
import { validateDate } from "./form-validation/datesHandler.js";

const username = document.getElementById("ipt-fullname");
var testDateTime = true;

function validateForm(e) {
    function validateForm(e) {
        if(!testRegexes() && !testDateTime) {
            let formModal = document.getElementById("formModal");
            let animationModal = new bootstrap.Modal(document.getElementById("animationModal"));
    
            /* Resets Form */
            document.getElementById("sign-up").reset(); 
    
            animationModal.show();
            /* let successMsg = `Obrigado por realizar sua reserva, ${username.value}!`;
            alert(successMsg); */
        } else e.preventDefault();
    }
    
}

document.getElementById("ipt-date").addEventListener("input", (e) => {
    testDateTime = validateDate(e);
}); // eventListener

document.getElementById("adoption").addEventListener("submit", validateForm); // eventListener