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
    for (var i = 0; i < 6; i++) {
        var modify = document.getElementById('update2');
        console.log(data.data[i].email);
        groops += data.data[i].email + '<br/>';
    }
    modify.innerHTML = groops;
});

//"24/02/2021"
//to
//"2021/02/24"

function GetFormattedDate(X) {
    debugger;
    var d = new Date();
    console.log(d);
    //var a = d.();
    //console.log(a);
    //var ca = d.split('/');
    var month = d.getMonth();
    if (month < 10) month = "0" + month;
    var day = d.getDate();
    if (day < 10) day = "0" + day;
    var year = d.getFullYear();
    if (X === 'mmm,dd,yyyy') {
        return document.getElementById('datatimechenge').innerHTML = month + "/" + day + "/" + year;
    }
    if (X === 'yyyy,dd,mmm') {
        return document.getElementById('datatimechenge').innerHTML = year + "/" + day + "/" + month;
    }
    if (X === 'yyyy,mmm,dd') {
        return document.getElementById('datatimechenge').innerHTML = year + "/" + month + "/" + day;
    }
    if (X === 'dd,mmm,yyyy') {
        return document.getElementById('datatimechenge').innerHTML = month + "/" + day + "/" + year;
    }
}

GetFormattedDate('yyyy,dd,mmm');

