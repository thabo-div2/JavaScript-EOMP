let baseURL = "https://floating-sands-20442.herokuapp.com/auth";
const accesstoken = window.localStorage.getItem("jwt-token");

const form = document.querySelector("#form");

function login(url) {
	const username = document.querySelector("#username").value;
	const password = document.querySelector("#password").value;
	const body = {
		username: username,
		password: password,
	};
	fetch(url, {
		method: "POST",
		body: JSON.stringify(body),
		headers: {
			"Content-type": "application/json; charset=UTF-8",
		},
	})
		.then((res) => res.json())
		.then((json) => {
			console.log(json);
			myStorage = window.localStorage;
			console.log(json["access_token"]);
			myStorage.setItem("jwt-token", json["access_token"]);
		});
}

function submitForm(event) {
	event.preventDefault();
	login(baseURL);
	window.location.href = "/products.html";
}

form.addEventListener("submit", submitForm);

function createProducts() {
	const pname = document.querySelector("#name");
	const price = document.querySelector("#price");
	const desc = document.querySelector("#description");
	const type = document.querySelector("#type");
	const body = {
		name: pname,
		price: price,
		description: desc,
		type: type,
	};
	fetch("https://floating-sands-20442.herokuapp.com/create-products", {
		method: "POST",
		body: JSON.stringify(body),
		headers: {
			"Content-type": "application/json; charset=UTF-8",
			Authorization: `jwt ${window.localStorage.getItem("jwt-token")}`,
		},
	})
		.then((res) => res.json())
		.then((json) => {
			console.log(json);
		});
}
