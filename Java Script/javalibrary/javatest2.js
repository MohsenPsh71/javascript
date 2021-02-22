var request

if (window.XMLHttpRequest) {
    request = new XMLHttpRequest()
} else {
    request = new ActiveXObject('Microsoft.XMLHTTP')
}

request.open('GET', 'https://reqres.in/api/users');
request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
        console.log(request);
        var z = request.responseText
        var y = JSON.parse(z)

        var modify = document.getElementById('update');

        modify.innerHTML = y.data[4].email;


    }
}

request.send();

fetch('https://reqres.in/api/users').then(Response => {
    return Response.json();
}).then(data => {
    console.log(data)
    var groops = "";
    for (var i = 0; i < 6 ;i++) {
        var modify = document.getElementById('update2');
        console.log(data.data[i].email);
        groops += data.data[i].email + '<br/>';
    }
    modify.innerHTML = groops;
});
