let products = [];
let cart = [];
const storage = window.localStorage;
console.log(cart);
const updt = document.querySelector("#update-form");

fetch("https://floating-sands-20442.herokuapp.com/show-products")
	.then((res) => res.json())
	.then((data) => {
		console.log(data);
		products = data.data;
		renderFruits(products);
		storage.setItem("product_id", data["data"][0][0]);
	});

function renderFruits(products) {
	let container = document.querySelector(".products");

	container.innerHTML = "";

	products.forEach((product) => {
		container.innerHTML += `
		<div class="product">
			<h3>Name: ${product[0]}. ${product[1]}</h3>
			<p>Price: R${product[2]}</p>
			<p>Description: <q>${product[3]}</q></p>
			<p>Type: ${product[4]}</p>
			<p>Quantity: ${product[5]}</p>
			<button onclick="addCart(${product[0]})">Add to Cart</button>
			<button class="model-btn" onClick="openModal(${product[0]})">Update product</button>
			<div class="update-bg">
				<div class="update-modal">
					<form method="POST" class="form-model" id="edit-form">
						<input type="number" id="edit-price" required />
						<input type="number" id="edit-quantity required />
					</form>
					<span class="update-modal-close">X</span>
					<button type="submit" onclick="event.preventDefault(), update(${product[0]})">Update</button>
				</div>
			</div>
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

// function editFruits() {
// 	let id = document.getElementById("filter").value;
// 	const price = document.querySelector("#price").value;
// 	const quantity = document.querySelector("#quantity").value;
// 	const body = {
// 		price: price,
// 		quantity: quantity,
// 	};
// 	fetch(`https://floating-sands-20442.herokuapp.com/edit-products/${id}`, {
// 		method: "PUT",
// 		body: JSON.stringify(body),
// 		headers: {
// 			"Content-type": "application/json",
// 		},
// 	})
// 		.then((res) => res.json())
// 		.then((json) => console.log(json));
// }

function updateForm(event) {
	event.preventDefault();
	editFruits();
}

updt.addEventListener("submit", updateForm);

function searchForProducts() {
	let searchTerm = document.querySelector("#filter").value;
	console.log(searchTerm);
	let searchedProducts = products.filter((product) =>
		product[1].toLowerCase().includes(searchTerm.toLowerCase()),
	);
	console.log(searchedProducts);
	renderFruits(searchedProducts);
}

function showCart() {
	document.getElementById("cart").classList.toggle("active");
	let container = document.querySelector("#cart");
	container.innerHTML = "";
	console.log(cart);
	cart.forEach((item) => {
		console.log(item);
		container.innerHTML += `
		<div class="carts">
			<span onclick="showCart()" class="close">&times;</span>
			<div>
				<h3>Name: ${item[0]} ${item[1]}</h3>
				<p>Price: R${item[2]}</p>
				<p>Description: <q>${item[3]}</q></p>
				<p>Type: ${item[4]}</p>
				<p>Quantity: ${item[5]}</p>
			</div>
		</div>
		`;
	});
}

function toggleModel() {
	document.querySelector(".delete-product").classList.toggle("active");
}

function deleteProd() {
	let id = document.querySelector("#delete-filter").value;

	fetch(`https://floating-sands-20442.herokuapp.com/delete-products/${id}`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	})
		.then((res) => res.json())
		.then((res) => {
			console.log(res);
			window.location.reload();
		});
}
function openModal(id) {
	let buttons = document.getElementsByClassName("model-btn");
	for (let i = 0; i < buttons.length; i++) {
		let button = buttons[i];
		let updateBg = document.querySelector(".update-bg");
		let updateClose = document.querySelector(".update-modal-close");

		button.addEventListener("click", function () {
			updateBg.classList.add("update-bg-active");
		});

		// updateClose.addEventListener("click", function () {
		// 	updateBg.classList.remove("update-bg-active");
		// });
	}
}

function update() {
	const price = document.querySelector("#price").value;
	const quantity = document.querySelector("#quantity").value;
	const body = {
		price: price,
		quantity: quantity,
	};
	fetch(
		`https://floating-sands-20442.herokuapp.com/edit-products/${storage.getItem(
			"product_id",
		)}`,
		{
			method: "PUT",
			body: JSON.stringify(body),
			headers: {
				"Content-type": "application/json",
			},
		},
	)
		.then((res) => res.json())
		.then((res) => {
			console.log(res);
		});
}
