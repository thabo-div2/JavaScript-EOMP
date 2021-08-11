let baseURL = "https://floating-sands-20442.herokuapp.com/show-products";

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
			products.forEach((btn) => {
				container.innerHTML = `
                    <div class="product-container">
                        <p>${btn}</p>
                    </div>
                `;
			});
		});
}

getProducts(baseURL);
