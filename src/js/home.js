import { validateDate } from "./form-validation/datesHandler.js";
import { testRegexes } from "./form-validation/regexValidation.js";

const username = document.getElementById("ipt-fullname");
var testDateTime = true;

function validateForm(e) {
	if(!testRegexes() && !testDateTime) {
		let formModal = document.getElementById("formModal");
		let animationModal = new bootstrap.Modal(document.getElementById("animationModal"));

		/* Closes FormModal */
		document.body.className = "";
		document.body.style = null;
		formModal.classList.remove("show");
		document.querySelector(".modal-backdrop.fade.show").remove();
		formModal.removeAttribute("arial-modal");
		formModal.style = null;

		/* Resets Form */
		document.getElementById("sign-up").reset(); 

		animationModal.show();
		/* let successMsg = `Obrigado por realizar sua reserva, ${username.value}!`;
		alert(successMsg); */
	} else e.preventDefault();
}

document.getElementById("ipt-date").addEventListener("input", (e) => {
    testDateTime = validateDate(e);
}); // eventListener
document.getElementById("sign-up").addEventListener("submit", validateForm); // eventListener