

var api = {
	root: "https://api.themoviedb.org/3",
	token: "bd748618d4d26c7927138d9cddf279fd" // TODO put your api key here
}

/**
 * Makes an AJAX request to themoviedb.org, asking for some movies
 * if successful, prints the results to the console
 */
function testTheAPI() {
	$.ajax({
		url: api.root + "/discover/movie",
		data: {
			api_key: api.token,
		},
		success: function(response) {
			console.log("We got a response from The Movie DB!");
			console.log(response);
			console.log(response["results"][2]["title"]);
		}
	});
}


console.log("The script loaded!");
testTheAPI();
