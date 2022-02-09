import { phone, inputHandler } from './inputMasksHandler.js';

/* =========================================
	Regex Validation
========================================= */

const email = document.getElementById("ipt-email"); // Email Address Input

// Regexes
const emailRegex = /^([\w\-\+\.]{1,64})(\@)([a-zA-Z\d\.\-]{1,64})(\.[a-zA-Z\d]{2,63})$/;
const phoneRegex = /^\(?(\d{2})\)? ?(\d{4,5})-?(\d{4})$/;

// ErrorHandler Function
export function testRegexes() {
    if(!emailRegex.test(email.value)
    || !phoneRegex.test(phone.value))
        return true;
    
    return false;
}

const phoneMask = ['(99) 9999-9999', '(99) 99999-9999'];
phone.addEventListener("input", inputHandler.bind(undefined, phoneMask));