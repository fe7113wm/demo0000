var request = new XMLHttpRequest();
request.open('GET', 'data.txt', false);
request.send();
console.log(request);
document.getElementById('demo').innerHTML = request.responseText;
