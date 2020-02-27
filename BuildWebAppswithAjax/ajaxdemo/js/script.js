
"use strict";

(function () {
    var url = "http://api.openweathermap.org/data/2.5/weather?zip=94040,us";
    // var url = "http://api.openweathermap.org/data/2.5/weather?q=London,England";
    var apiKey = "b9db2d68d39c9344a13282d6977e4386"; // Replace "APIKEY" with your own API key; otherwise, your HTTP request will not work
    var httpRequest;
    makeRequest();

	// create and send an XHR request
	function makeRequest() {
		httpRequest = new XMLHttpRequest();
		httpRequest.onreadystatechange = responseMethod;
		httpRequest.open('GET', url + '&appid=' + apiKey);
		httpRequest.send();
	}
	// handle XHR response
	function responseMethod() {
		if (httpRequest.readyState === 4) {
			if (httpRequest.status === 200) {
				updateUISuccess(httpRequest.responseText);
			} else {
				updateUIError();
			}
		}
	}
	function updateUISuccess(responseText) {
		var response = JSON.parse(httpRequest.responseText);
		var condition = response.weather[0].main;
		var degC = response.main.temp - 273.15;
		var degCInt = Math.floor(degC);
		var degF = degC * 1.8 + 32;
		var degFInt = Math.floor(degF);
	    var weatherBox = document.getElementById("weather");
	weatherBox.innerHTML = "<p>" + degCInt + "&#176; C / " + degFInt + "&#176; F</p><p>" + condition + "</p>";
}
// handle XHR error
 function updateUIError() {
     var weatherBox = document.getElementById("weather");
     weatherBox.className = "hidden";
 }
})();

console.log("hello world");
//var url = "http://api.openweathermap.org/data/2.5/weather?zip=94040,us";

// b9db2d68d39c9344a13282d6977e4386