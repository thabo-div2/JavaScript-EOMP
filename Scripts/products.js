const baseURL = "https://floating-sands-20442.herokuapp.com/show-products";
const baseURL2 = "https://floating-sands-20442.herokuapp.com/delete-products/";

function getProducts(url) {
	fetch(url, {
		method: "GET",
	})
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
			let products = data.data;
			let container = document.querySelector(".products");
			container.innerHTML = "";
			products.forEach((product) => {
				container.innerHTML += `
                    <div class="product-container">
                        <h3>${product[1]}</h3>
                        <p>R${product[2]}</p>
                        <p>Description: <q>${product[3]}</q></p>
                        <p>Type: ${product[4]}</p>
                    </div>
                `;
			});
		});
}

getProducts(baseURL);

// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
// btn.onclick = function () {
// 	modal.style.display = "block";
// };

function editProduct(modalID) {
	document.getElementById(modalID).classList.toggle("active");
}

function filterItems(e) {
	const filter = document.querySelector("#filter");
	const itemsList = document.querySelector(".product-container");
	let text = e.target.value.toLowerCase();
	// Get lis
	let items = itemsList.getElementsByTagName("h3");
	// Convert to an array
	Array.from(items).forEach(function (item) {
		let itemName = item.firstChild.textContent;
		if (itemName.toLowerCase().indexOf(text) != -1) {
			item.style.display = "block";
		} else {
			item.style.display = "none";
		}
	});
	fetch(baseURL)
		.then((res) => res.json())
		.then((data) => {
			let products = data.data;
			if (text == products[1]) {
			}
		});
}

filter.addEventListener("keyup", filterItems);
