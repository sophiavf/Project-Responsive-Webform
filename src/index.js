import css from "./styling.css";

//Populated selection element with options for all countries via API on DOMContentLoad
document.addEventListener("DOMContentLoaded", () => {
	const selectDrop = document.getElementById("countries");

	fetch("https://restcountries.com/v3.1/all")
		.then((res) => {
			return res.json();
		})
		.then((data) => {
			let output = "<option value='blank'></option>";
			data.forEach((country) => {
				output += `<option value="${country.name.official}">${country.name.official}</option>`;
			});

			selectDrop.innerHTML = output;
		})
		.catch((err) => {
			console.log(err);
		});
});
const emailRegExp =
	/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/; // USA zip code Regex pattern
const bodyTag = document.querySelector("body");
const form = document.querySelector("form");

const emailInput = document.querySelector("#email");
const countrySelect = document.querySelector("#countries");
const zipCodeInput = document.querySelector("#zipCode");
const pw1 = document.querySelector("#password");
const pw2 = document.querySelector("#password-confirmation");

const zipErrorMsg = "Please provide a correct zip code!";
const passwordErrorMsg = "Passwords do not match";
const emailErrorMsg = "Please provide a correct email address!";
const countryErrorMsg = "Please select a country!";

//validations variables

loadFooter();

//Every time we change the value of the input, we check to see if it contains valid data.
document.addEventListener("input", (event) => {
	const context = "input";
	const element = event.target;
	//Based on input type, the validity is checked
	//Email
	//1. check if it matches the Regex pattern
	if (element.id === "email") {
		//typeMismatch returns true if the value does not match the specified pattern
		const isValid = emailValidity(context);
		if (!isValid) {
			showError(emailErrorMsg, element);
		} else {
			removeError(element);
		}
		//Zip code
		//1.Check if it matches the Regex code
	} else if (element.id === "zipCode") {
		const isValid = zipCodeValidity(context);
		if (!isValid) {
			showError(zipErrorMsg, element);
		} else {
			removeError(element);
		}
	} else if (
		element.id === "password" ||
		element.id === "password-confirmation"
	) {
		//Password
		//1. Check if passwords match
		const isValid = passwordValidity(context);
		if (!isValid) {
			showError(passwordErrorMsg, pw1);
		} else {
			removeError(pw1);
		}
	}
});

function emailValidity(providedContext) {
	if (providedContext === "input") {
		//On input, if the field is left blank or it matches the regex pattern it will return true
		return emailInput.value.length === 0 || emailRegExp.test(emailInput.value);
	} else {
		//On submit, if the required field is empty or does not match the regex pattern, this will return false
		return emailInput.value.length !== 0 && emailRegExp.test(emailInput.value);
	}
}
function countryValidity(providedContext) {
	const value = countrySelect.value;
	if (providedContext === "input") {
		return value === "blank" || value !== null;
	} else {
		return value !== "blank" && value !== null;
	}
}
function zipCodeValidity(providedContext) {
	if (providedContext === "input") {
		//On input, if the field is left blank or it matches the regex pattern it will return true
		return (
			zipCodeInput.value.length === 0 || isValidZip.test(zipCodeInput.value)
		);
	} else {
		//On submit, if the required field is empty or does not match the regex pattern, this will return false
		return (
			zipCodeInput.value.length !== 0 && isValidZip.test(zipCodeInput.value)
		);
	}
}
function passwordValidity(providedContext) {
	if (providedContext === "input") {
		//On input, if both fields are left blank or they are the same, it will return true
		return pw1.value === pw2.value || (pw1.value && pw2.value) === undefined;
	} else {
		//On submit, if password fields are empty or do not match each other, this will return false
		return pw1.value === pw2.value && (pw1.value && pw2.value) !== undefined;
	}
}

// This defines what happens when the user tries to submit the data
// Form provides an error message if the button is pushed with any active errors or unfilled required fields
form.addEventListener("submit", (event) => {
	event.preventDefault();

	if (!emailValidity()) {
		showError(emailErrorMsg, emailInput);
	}
	if (!zipCodeValidity()) {
		showError(zipErrorMsg, zipCodeInput);
	}
	if (!passwordValidity()) {
		showError(passwordErrorMsg, pw1);
	}
	if (!countryValidity()) showError(countryErrorMsg, countrySelect);

	if (
		emailValidity() &&
		zipCodeValidity() &&
		passwordValidity() &&
		countryValidity()
	) {
		alert("The form has been successfully submitted. Thank you!");
	} else {
		alert(
			"The form cannot be submitted due to an issue. Please see the error messages below the fields for more info"
		);
	}
});

//If the data is not valid, we run showError() to show the appropriate error.
function showError(errorMessage, element) {
	const elementError = element.nextElementSibling;
	element.setCustomValidity(errorMessage);
	element.className = "invalid";
	elementError.textContent = errorMessage;
	elementError.className = "error active";
}
function removeError(element) {
	const elementError = document.querySelector(`#${element.id} + div.error`);
	element.setCustomValidity("");
	element.className = "valid";
	elementError.textContent = "";
	elementError.className = "error";
}

function loadFooter() {
	const currentYear = new Date().getFullYear();
	const footer = document.createElement("footer");
	const footerContent = document.createElement("div");
	footerContent.innerHTML = `Author: Sophia <a href="https://github.com/sophiavf">GitHub</a> &copy ${currentYear}`;
	footer.appendChild(footerContent);
	bodyTag.append(footer);
}
