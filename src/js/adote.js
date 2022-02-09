import { testRegexes } from "./form-validation/regexValidation.js";

const username = document.getElementById("ipt-fullname");

function validateForm(e) {
    if(!testRegexes()) {
        let successMsg = `Obrigado por adotar nosso gatinho, ${username.value}!`;
		alert(successMsg);
	} else e.preventDefault();
}

document.getElementById("adoption").addEventListener("submit", validateForm); // eventListener