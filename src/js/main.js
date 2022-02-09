import { validateDate } from "./form-validation/datesHandler.js";
import { testRegexes } from "./form-validation/regexValidation.js";

const username = document.getElementById("ipt-fullname");
var testDateTime = true;

function validateForm(e) {
	if(!testRegexes() && !testDateTime) {
		let successMsg = `Obrigado por realizar sua reserva, ${username.value}!`;
		alert(successMsg);
	} else e.preventDefault();
}

document.getElementById("ipt-date").addEventListener("input", (e) => {
    testDateTime = validateDate(e);
}); // eventListener
document.getElementById("sign-up").addEventListener("submit", validateForm); // eventListener