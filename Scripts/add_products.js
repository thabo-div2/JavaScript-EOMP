let baseURL = "https://floating-sands-20442.herokuapp.com/create-products";
let accesstoken = window.localStorage.getItem("jwt-token");

const add = document.querySelector("#add-form");

function createProducts() {
	const pname = document.querySelector("#name");
	const price = document.querySelector("#price");
	const desc = document.querySelector("#description");
	const type = document.querySelector("#type");
	const quantity = document.querySelector("#quantity");
	const body = {
		name: pname,
		price: price,
		description: desc,
		type: type,
	};
	fetch(baseURL, {
		method: "POST",
		body: JSON.stringify(body),
		headers: {
			"Content-type": "application/json; charset=UTF-8",
			Authorization: `jwt ${window.localStorage.getItem("jwt-token")}`,
		},
	})
		.then((res) => res.json())
		.then((res) => {
			console.log(res);
		});
}

function addProduct(event) {
	event.preventDefault();
	createProducts(baseURL);
}

add.addEventListener("submit", addProduct);
