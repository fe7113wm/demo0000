var request = new XMLHttpRequest();
request.open('GET', 'data.txt')
request.send();
console.log(request);
document.getElementById('demo').innterHTML = request.responseText;
