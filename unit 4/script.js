$.getJSON('data.json', function(data){
    // console.log(data)
    var output ='<ul class="searchinfo">';
    $.each(data, function(key, val){
        output += '<li>';
        output += '<h2>'+val.artistname+'</h2>';
        output +='<img src="images/' + val.albumImg + '.jpeg"'+' alt='+val.album+'"/>'
        output +='<p>' + val.bio+'</p>';
        output += '</li>';
    });
    output +='</ul>';
    $("#update").html(output)
});