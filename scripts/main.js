//Текущее время для странцы приложения
window.onload = function() {
  setInterval(function() {
    // Seconds
    let seconds = new Date().getSeconds();
    document.getElementById("seconds").innerHTML = (seconds < 10 ? '0' : '') + seconds;

    // Minutes
    let minutes = new Date().getMinutes();
    document.getElementById("minutes").innerHTML = (minutes < 10 ? '0' : '') + minutes;

    // Hours
    let hours = new Date().getHours();
    document.getElementById("hours").innerHTML = (hours < 10 ? '0' : '') + hours;
  }, 1000);
}

//Блок кода для получения списка
function getButton(text) {
	let button = document.createElement("Button");
	button.textContent = text;
	return button;
}

function getDiv(className) {
	let div = document.createElement("div");
	div.classList.add(className);
	return div;
}

let listArray = [
	{
		date: "24.02.2024",
		customer: "Пупкин Вася",
		carBrand: "Honda",
		typesOfWork: "Замена ступичного подшипника",
		parts: "Ступичный подшипник",
		price: 2500,
	},
];

function getElementTr(list) {
	let elementTr = document.createElement("tr");
	elementTr.classList.add("tr_item");
	let elementTdOne = document.createElement("td");
	elementTdOne.classList.add("td_item");
	let elementTdTwo = document.createElement("td");
	elementTdTwo.classList.add("td_item");
	let elementTdThree = document.createElement("td");
	elementTdThree.classList.add("td_item");
	let elementTdFour = document.createElement("td");
	elementTdFour.classList.add("td_item");
	let elementTdFive = document.createElement("td");
	elementTdFive.classList.add("td_item");
	let elementTdSix = document.createElement("td");
	elementTdSix.classList.add("td_item");

	elementTdOne.textContent = list.date;
	elementTdTwo.textContent = list.customer;
	elementTdThree.textContent = list.carBrand;
	elementTdFour.textContent = list.typesOfWork;
	elementTdFive.textContent = list.parts;
	elementTdSix.textContent = list.price;

	elementTr.append(elementTdOne, elementTdTwo, elementTdThree, elementTdFour, elementTdFive, elementTdSix)
	return elementTr;
}