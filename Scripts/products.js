let products = [];
let cart = [];
console.log(cart);
const updt = document.querySelector("#update-form");

fetch("https://floating-sands-20442.herokuapp.com/show-products")
	.then((res) => res.json())
	.then((data) => {
		console.log(data);
		products = data.data;
		renderFruits(products);
	});

function renderFruits(products) {
	let container = document.querySelector(".products");

	container.innerHTML = "";

	products.forEach((product) => {
		container.innerHTML += `
		<div class="product">
			<h3>Name: ${product[1]}</h3>
			<p>Price: R${product[2]}</p>
			<p>Description: <q>${product[3]}</q></p>
			<p>Type: ${product[4]}</p>
			<p>Quantity: ${product[5]}</p>
			<button onclick="addCart(${product[0]})">Add to Cart</button>
		</div>
		`;
	});
}

function addCart(id) {
	let product = products.find((item) => {
		return item[0] == id;
	});
	console.log(product);
	cart.push(product);
	console.log(cart);
}

function editProduct(modalID) {
	document.getElementById(modalID).classList.toggle("active");
}

function editFruits() {
	let id = document.getElementById("filter").value;
	const price = document.querySelector("#price");
	const quantity = document.querySelector("#quantity");
	const body = {
		price: price,
		quantity: quantity,
	};
	fetch(`https://floating-sands-20442.herokuapp.com/edit-products/${id}`, {
		method: "PUT",
		body: JSON.stringify(body),
		headers: {
			"Content-type": "application/json",
		},
	})
		.then((res) => res.json())
		.then((json) => console.log(json));
}

function updateForm(event) {
	event.preventDefault();
	editFruits();
}

updt.addEventListener("submit", updateForm);

// function searchForProducts() {
// 	let searchTerm = document.querySelector("#filter").value;
// 	console.log(searchTerm);
// 	let searchedProducts = products.filter((product) =>
// 		product[1].toLowerCase().includes(searchTerm.toLowerCase()),
// 	);
// 	console.log(searchedProducts);
// 	renderFruits(searchedProducts);
// }

function showCart() {
	document.getElementById("cart").classList.toggle("active");
	let container = document.querySelector("#cart");
	container.innerHTML = "";
	cart.forEach((item) => {
		container.innerHTML += `
		<div class="carts">
			<h3>Name: ${item[1]}</h3>
			<p>Price: R${item[2]}</p>
			<p>Description: <q>${item[3]}</q></p>
			<p>Type: ${item[4]}</p>
			<p>Quantity: ${item[5]}</p>
		</div>
		`;
	});
}

function toggleModel() {}
