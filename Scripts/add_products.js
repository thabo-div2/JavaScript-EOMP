const baseURL = "https://floating-sands-20442.herokuapp.com/create-products";
const accesstoken = window.localStorage.getItem("jwt-token");
const storage = window.localStorage;

const add = document.querySelector("#add-form");

function createProducts() {
	const pname = document.querySelector("#name").value;
	const price = document.querySelector("#price").value;
	const desc = document.querySelector("#description").value;
	const type = document.querySelector("#type").value;
	const quantity = document.querySelector("#quantity").value;
	const body = {
		name: pname,
		price: price,
		description: desc,
		type: type,
		quantity: quantity,
		total: price * quantity,
	};
	console.log(body);
	console.log(window.localStorage.getItem("jwt-token"))
	fetch(baseURL, {
		method: "POST",
		body: JSON.stringify({
			'name': pname,
			'price': price,
			'description': desc,
			'type': type,
			'quantity': quantity,
			'total': (price * quantity),
		}),
		headers: {
			"Authorization": `jwt ${window.localStorage.getItem("jwt-token")}`,
			"Content-type": "application/json",
		},
		mode: "no-cors"
	})
		.then((res) => res.json()).then((data) => {
			console.log(data);
		});
}

function addProduct(event) {
	event.preventDefault();
	createProducts(baseURL);
}

add.addEventListener("submit", addProduct);
