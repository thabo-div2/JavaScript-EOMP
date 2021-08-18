let users = [];
let info = [];

fetch("https://floating-sands-20442.herokuapp.com/show-users")
	.then((res) => res.json())
	.then((data) => {
		console.log(data);
		users = data.data;
		renderUsers(users);
	});

function renderUsers(object) {
	let container = document.querySelector(".view-users");

	container.innerHTML = "";

	users.forEach((user) => {
		container.innerHTML += `
        <div class="users">
            <h2>Name: ${user[1]} ${user[2]}</h2>
            <p>Address: ${user[3]}</p>
            <p>Email: ${user[4]}</p>
            <p>Username: ${user[5]}</p>
        </div>
        `;
	});
}
