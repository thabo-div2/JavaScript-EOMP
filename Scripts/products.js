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
                        <h3>${btn[1]}</h3>
                        <p>R${btn[2]}</p>
                        <p>Description: <q>${btn[3]}</q></p>
                        <p>Type: ${btn[4]}</p>
                    </div>
                `;
			});
		});
}

getProducts(baseURL);
