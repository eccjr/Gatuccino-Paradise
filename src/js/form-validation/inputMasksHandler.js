/* =======================================================
	Input Masks
========================================================== */

export const phone = document.getElementById("ipt-phone"); // Phone Number Input

/* Phone Number Mask */
export function inputHandler(masks) {
	let m = phone.value.length > 14 ? 1 : 0;
	VMasker(phone).unMask();
	VMasker(phone).maskPattern(masks[m]);
	phone.value = VMasker.toPattern(phone.value, masks[m]);
}