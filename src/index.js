import css from "./styling.css";

document.addEventListener("DOMContentLoaded", () => {
	const selectDrop = document.getElementById("countries");

	fetch("https://restcountries.com/v3.1/all")
		.then((res) => {
			return res.json();
		})
		.then((data) => {
			let output = "";
			data.forEach((country) => {
				output += `<option value="${country.name.official}">${country.name.official}</option>`;
			});

			selectDrop.innerHTML = output;
		})
		.catch((err) => {
			console.log(err);
		});
});

const bodyTag = document.querySelector("body");
const form = document.querySelector("form");
const emailInput = document.querySelector("#email");
const emailError = document.querySelector("#mail + div.error");
const submitButton = document.querySelector("button[type='submit']");

//validations variables
const emailRegExp =
	/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

loadFooter();

//Every time we change the value of the input, we check to see if it contains valid data.
document.addEventListener("input", (event) => {
	const element = event.target;
	//Email
	if (element) {
		//Country
	} else if (element) {
		//Zip code
	} else if (element) {
	
	//Password 
	} else {
	}
});

//If the data is not valid, we run showError() to show the appropriate error.
function showError(inputElement) {}

function loadFooter() {
	const currentYear = new Date().getFullYear();
	const footer = document.createElement("footer");
	const footerContent = document.createElement("div");
	footerContent.innerHTML = `Author: Sophia <a href="https://github.com/sophiavf">GitHub</a> &copy ${currentYear}`;
	footer.appendChild(footerContent);
	bodyTag.append(footer);
}
