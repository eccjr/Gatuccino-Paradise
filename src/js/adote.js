import { testRegexes } from "./form-validation/regexValidation.js";
import { validateDate } from "./form-validation/datesHandler.js";

const username = document.getElementById("ipt-fullname");
var testDateTime = true;

function validateForm(e) {
    if(!testRegexes() && !testDateTime) {
        let successMsg = `Obrigado por adotar nosso gatinho, ${username.value}!`;
		alert(successMsg);
	} else e.preventDefault();
}

document.getElementById("ipt-date").addEventListener("input", (e) => {
    testDateTime = validateDate(e);
}); // eventListener

document.getElementById("adoption").addEventListener("submit", validateForm); // eventListener