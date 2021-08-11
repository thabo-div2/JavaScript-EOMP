let baseURL = "https://floating-sands-20442.herokuapp.com/auth";
let accesstoken = window.localStorage.getItem("jwt-token");

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
