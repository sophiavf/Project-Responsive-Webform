import css from "./styling.css";

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
const isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
const bodyTag = document.querySelector("body");
const form = document.querySelector("form");
const emailInput = document.querySelector("#email");
const emailError = document.querySelector("#mail + div.error");
const submitButton = document.querySelector("button[type='submit']");

const pw1 = document.querySelector("#password");
const pw2 = document.querySelector("#password-confirmation");

//validations variables

loadFooter();

//Every time we change the value of the input, we check to see if it contains valid data.
document.addEventListener("input", (event) => {
	const element = event.target;
	const elementError = document.querySelector("#${element.id} + div.error");

	if (element.validity.valid) {
		elementError.textContent = "";
		elementError.className = "error";
		element.className = "valid";
	} else {
		event.preventDefault();
		//Email
		//1. check if it matches the Regex pattern
		if (element.id === "email") {
			//typeMismatch returns true if the value does not match the specified pattern
			element.setCustomValidity("I am expecting a correct email address!");
			//Country
			//1. check if the user has made a selection
		} else if (element.id === "") {
			//Zip code
			//1.Check if it matches the Regex code
		} else if (element) {
			//Password
			//1. Check if passwords match
		} else {
			if (matchPassword()) {
			}
		}
	}
});

//If the data is not valid, we run showError() to show the appropriate error.

function matchPassword() {
	// if the confirm?password input is onfocus, this function is run to check if the passwords match
	if (pw1.value !== pw2.value || pw1.value === undefined) {
		error.className = "errorMessage active";
		passwordInputs.className = "error invalid";
		error.textContent = "*Passwords do not match";
		pw1.setCustomValidity("*Passwords do not match");
		return false;
	} else {
		//if the passwords match, the error message is removed
		error.textContent = "";
		error.className = "error";
		passwordInputs.className = "error";
		pw1.setCustomValidity("");
		return true;
	}
}

function showError(inputElement) {}

function removeError(inputElement) {}

// This defines what happens when the user tries to submit the data
form.addEventListener("submit", (event) => {
	event.preventDefault();
});

function loadFooter() {
	const currentYear = new Date().getFullYear();
	const footer = document.createElement("footer");
	const footerContent = document.createElement("div");
	footerContent.innerHTML = `Author: Sophia <a href="https://github.com/sophiavf">GitHub</a> &copy ${currentYear}`;
	footer.appendChild(footerContent);
	bodyTag.append(footer);
}

// Form provides an error message if the button is pushed with any active errors or unfilled required fields
