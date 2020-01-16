for (var i = 0; i < 100; i++) {
    // var request = new XMLHttpRequest();
    var request; 
    if(window.XMLHttpRequest){
        request = new XMLHttpRequest();
    } else {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }
    request.open('GET', 'data.txt');
    
    request.onreadystatechange = function () {
        // document.getElementById('demo').innerHTML = request.responseText;
        if ((request.status === 200) && (request.readyState === 4)) {
            console.log(request);
            document.writeln(request.responseText);
        }
    }
    request.send();
}