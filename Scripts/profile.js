let baseURL = "https://floating-sands-20442.herokuapp.com/view-profile";
let accesstoken = window.localStorage.getItem("jwt-token");

function viewProfile(url) {
	fetch(url, {
		method: "GET",
	})
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
		});
}
