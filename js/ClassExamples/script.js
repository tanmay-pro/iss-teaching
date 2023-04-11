// script.js
const redButton = document.getElementById("redButton");
const greenButton = document.getElementById("greenButton");
const blueButton = document.getElementById("blueButton");

redButton.addEventListener("click", () => {
	document.body.style.backgroundColor = "red";
});

greenButton.addEventListener("click", () => {
	document.body.style.backgroundColor = "green";
});

blueButton.addEventListener("click", () => {
	document.body.style.backgroundColor = "blue";
});
