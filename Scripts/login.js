const baseURL = "https://floating-sands-20442.herokuapp.com/auth";
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
		.then((res) => res.json()).then((data) => {
			console.log(data);
			if (data['description'] == 'Invalid credentials') {
				alert('Error not valid login in!')
			}
			else {
				myStorage = window.localStorage
				console.log(data['access_token'])
				myStorage.setItem('jwt-token', data['access_token'])
				window.location.href = './products.html'
			}
		});
}

function submitForm(event) {
	event.preventDefault();
	login(baseURL);
}

form.addEventListener("submit", submitForm);

