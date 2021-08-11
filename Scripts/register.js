// // fetching my api
// const baseURL = "https://pacific-shelf-48886.herokuapp.com/user-registration/";

// const form = document.querySelector("#form");
// const log = document.getElementById("log");

// function userRegistration(url) {
//     const fname = document.querySelector("#first_name").value;
//     const surname = document.querySelector("#last_name").value;
//     const address = document.querySelector("#address").value;
//     const email = document.querySelector("#email").value;
//     const username = document.querySelector("#username").value;
//     const password = document.querySelector("#password").value;
//     const body = {
//         first_name: fname,
//         last_name: surname,
//         address: address,
//         email: email,
//         username: username,
//         password: password,
//     };
// 	fetch(url, {
// 		method: "POST",
// 		body: JSON.stringify(body),
// 		headers: {
// 			"Content-type": "application/json; charset=UTF-8",
// 		},
// 		mode: "no-cors",
// 	})
// 		.then((res) => res.json())
// 		.then((json) => console.log(json));
// }

// function submitForm(event) {
// 	log.textContent = "You have successfully logged ";
// 	event.preventDefault();
// 	userRegistration(baseURL);
// }

// form.addEventListener("submit", submitForm);
