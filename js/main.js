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

function getElementTr(index, list) {
	let elementTr = document.createElement("tr");
	elementTr.classList.add("tr_items");
	let elementTd = document.createElement("td");
	elementTd.classList.add("td_items");

	return elementTr;
}