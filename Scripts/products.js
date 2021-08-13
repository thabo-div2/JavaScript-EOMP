let baseURL = "https://floating-sands-20442.herokuapp.com/show-products";
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
				container.innerHTML = `
                    <div class="product-container">
                        <h3>${product[1]}</h3>
                        <p>R${product[2]}</p>
                        <p>Description: <q>${product[3]}</q></p>
                        <p>Type: ${product[4]}</p>
						<!-- Trigger/Open The Modal -->
						<button id="myBtn">Update product</button>

						<!-- The Modal -->
						<div id="myModal" class="prod-modal">

						<!-- Modal content -->
						<div class="prod-modal-content">
							<span class="close">&times;</span>
							<p></p>
						</div>

						</div>
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
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
