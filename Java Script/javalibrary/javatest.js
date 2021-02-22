function sum() {
    var x = document.getElementById('num1').value;
    var y = document.getElementById('num2').value;
    x = parseInt(x);
    y = parseInt(y);
    var sum = x + y;
    if (sum === 20) {
        document.getElementById('del').innerHTML = "shaste talaE";

    }
    else {
        document.getElementById('del').innerHTML = sum;

    }
    switch (sum) {
        case 15:
            alert(15);
            break;
        case 17:
            alert(17);
            break;

    }

}
var names = ["ali", "arezoo", "mamad", "aran"];
var namegroops = "";
for (var i = 0; i < names.length; i++) {
    namegroops += names[i] + "<br/>";
}
document.getElementById('asl').innerHTML = namegroops;
for (n in names) {
    alert(names[n]);
}
var namegrooops = "";
var i = 0;
while (i < names.length) {
    namegrooops += names[i] + "<br/>";
    i++;
}
document.getElementById('bsl').innerHTML = namegrooops;


function run() {
    var w = document.getElementById('num3').value;
    var massage = document.getElementById('ssl');
    massage.innerHTML = "";
    try {
        if (w == "") throw "empty";
        if (isNaN(w)) throw "in not a number";
        w = Number(w);
        if (w > 20) throw "is too hight";
        if (w < 10) throw "is too low";
        if (w <= 20 || w >= 10) throw "is Good";
    }
    catch (err) {
        massage.innerHTML = 'input is =' + err;
    }
    finally {
        document.getElementById('num3').value = "";
    }

}

function my() {
    debugger;
    var n = document.forms['myforms']['txt1'].value;
    if (n == "") {
        alert('plz fill the test');
        return false;
    }
}

function person(name, family, age) {
    this.name = name;
    this.family = family;
    this.age = age;
}
var o = [];
o.push(new person('ali', 'ahmadi', 23));
o.push(new person('reza', 'ahadi', 11));
o.push(new person('pejman', 'arfaE', 16));
var text = '';
for (n in o) {
    text += o[n].name + '<br />';
}
document.getElementById('oss').innerHTML = text;

(function () {
    alert('helooooo');
})();

var myModel = {
    x: 42,
    getX: function () {
        return this.x;
    }
};

var ostadali = myModel.getX;
var oss = ostadali.bind(myModel);
document.getElementById('sss').innerHTML = oss();

(function () {
    function change() {

        document.getElementById('mypic').src = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSEhIVFhUXFRUXGBcXFRUYGBgYFxUXGBYYFRUYHSghGBolHRUVITEhJSkrLi4uFx8zODMtOSgtLisBCgoKDg0OGxAQGy0lICUtLS0tLS0rKy0tLS0tKy0tLS0tLSstLTItKy0uLS0tLS0tLS03LTUtLS0vKy0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAEBQMGAAIHAQj/xABEEAACAQIDBAcECAUCBgIDAAABAgMAEQQSIQUxQVEGEyJhcYGRMqHB8BQjQlJygrHRB2KSsuEzohVDg7PC8TSjU2Nz/8QAGgEAAgMBAQAAAAAAAAAAAAAAAgMAAQQFBv/EAC4RAAICAgICAQIEBgMBAAAAAAABAhEDIRIxBEFRYXETIrHwBRQygZGh0eHxUv/aAAwDAQACEQMRAD8A5Cd3lU8LHJpw+LH586jI08qk3ItuN7+IZre4ilBi7Ey3NqHqXERkGoqYgAjCMNxFNMGovc7hSvBpc08crEn8xoWWCYxyxvS212oxmuL1HFEdTbz5VEQGFx515FvqSYV5CdeXl60RQc8oCAD4+lLCx1NFStc8bW9KCY1EiGE3p5hVWOHVVu2ua9zYXuCvlQGAwLSBio0XLmYkALmva9+drDv0rWeXTINBuF+Q338/0NVLeglrZth9bsa3hlssh4sMvl82rSU5VtUUZ0qiyTDpmkAO69z5CpMdiM7E8/cNwHp/dWsItmPl+/zzrIISzAWuSd3wHnYVLLXwdC/hps8ACRrWBzm/EgWQXPIsD5jlV9xG3sPFo0g8uPPXd76quzOiU5QIJAAoAOpHaIzNuHeK2f8Ah5KdTKvqf2FYZ1KVtnRhcY0kNpumuGG4k+n71GnTXDn7w8h+9V/Ffw9nHssDVe2jsGeA9tCO/hVKEX7Lc5fB1TBbZhl9lxfkSAf1o+9cOjmZT2WI8Cf0qy7D6YyRWWTtL76qWL4LjlXs6Q7VGXofZu04sQuaNrniOI8qKZKS0PTsikk0PhWkb15iBZW8D+hobDvpURGHZqyob1lSirOGnd5VJJCQiHgVYjv+sdP1Q1Hw8qNxDL1EK6k2kbdoPrXAAPHcSfGumcUXMbeh/alppgykkigWG+26mIAnwLBe0eFSyzFzUDvZbDjx+FOtiw9kFUS1jmdrHXkBfQfqaGcuKs0+L47z5OC/Sxe261FSrlVV4nU/PzvrJ8jYgKnsFl3buF7d16k2oLSMOAt71BoFO2l9LCyeJKEZTtNRlxte3vr6aASlze3dpQwW7EUbEd4oN2ysSO/f4UxGU1nfW1QILkDwr1nonZUWaVRw1O6+4E7vKi6RFtjySEwYV1DWZ2ANjrw7LcbjtaHTzpDCNb8vn586eviYpWOeORmBNlXXTyI8KB2kI0FljdDyY8+65v686TGe+NbN0/Ff4X4vJV8bv9K/2LcQ1zapoRrfkKhgjuaNjiubAa3Cgd+838LC9NZiRoi+i+87/jfzFWfoFs3PMJWF1Tt25kGyKO8sb+VIHgJKxLc/abnqbgeJ+Iq27F6RwYUGOQPG4N2DRk6jRdx1Ua+o5UnLbjSH4VHlcjp0c/VJdiNNWPAXN2P4QT5DwrZtrqJMhtcqSPL99f6DXOMd/EOIr2AxOoIK3XdvF7ZkO4qbHW43a07FdJJM6NG7Dqz9WTa6jTsk/aAsBc7wBxrNDx5Ps1z8iC62d8j2mrEgH7Kt5Nmt/aa1nlSQFHAI5H50OtcFw3SiZWvmY9lV0cjRWBUXHAdoW/mNNcF0wUMC5xCgm5KurfYANg38yr5E8qJ+NJArycbLztvoXHJdoDlbkdx+fnlVGxuzZYGySoVPuPgeNXXZG2TKueGYTgHVLZZRpc9njuPAXtpT9XixMYDqGUjjvHhyIpfKUNMa4RltHK8HM8bB0Yg/PDiK6D0c6TCW0U3Ze2jcGtwvzt+hoXa3Q7KM0Oq8RxHzYUtg2YSRpuP+P3q5cZIqKcS94mLsnwP6UFBBRGwEcwDPr90nluFMUw9KSoa2AdRWUz6isqUVZ86VvLcqnIKf73Nhy1JNRHd5VMjXVQBrY37+0Tp5WrpHHI4V0cn7pphHh1w8ebKGkIv2ty35fPCliv2ZBzW/pb4Xp24GJS6EB7WN+HMacNaXldVfXs6n8Mg5LJ+HTyJLinXzur1fwJZdrzS9gkANoQFFtdONzThNlAXiBbLa+bS/ID9T5UJhNkCFhJM6gA3AF9TvG8D0Ar3FbacHsgAX4jW3frQSbesPRthHHjXP+JNuVql26V3avSd/6MjwixpA5FnaVL3vuJJtbhawqfGQEzXykgsnC4IAW/xpLtLaDykZtLbgtwAee/fTnZmNmmUgMoI3kjXX2e7geFSUZxXN17/tZeHL4ueX8tBSq4uNJXJxTTtX77BcXh/riiDiLDhqAT5C5qSaGNXEKoJJTvZ/ZXS+7woeOcRyBmOquQ3E63BPfxqXa2yXdzJFZ1ex3jlzO8aVbdNKT1Xf1EYYLJDJlxY7lz3HtqL+Fv3q60eYvZqwp/pNKbasSQq99lN/X1qXCYGJEQyMe2Rl048NwOvu1qXZGDeAM8rWFvYBuPHlfhpzqTASmNM0jqI7DKNC3lY+7XypcpyppO/r8/Y34/FwrJGU4KNxf5Wk+FNbl03aur2eYBOraSPVTYBXykgi178r3N7ftUfSBPqFDHM2cWNrE6G+np7qgm27ILkBbcLg37r60C87zMGc35DcBfl+/wC1FDFNzU5CPI/iHiw8aWDFcrtLVJJu/nbXp1ZrCuVb8dw7zvP7eQppBEIoesbew7PgePiTbyy99AZQzqvC9hwso9tvcffyp3gMOcViAAPq4xmI8PZHx8a0SZ5+KsddA+jrSEzMvauSAd2b7IPcP251bdu9B4Z1synMq2Vs7DzNri99SbGrb0e2QIIo0sL2ufde35rHyHKmz4W9Y5Sk3aNsVGK4s+btrdF58E+cxrNGpAuy9knla+t+QN9DpV46F4rY2Lyo+Ghin+44GVj/ACNubwNj3V0PaWygwsRcfDjblXNekfQFJGLr2LA2tqxPFpGNyeFhvPdvpsc16mA8HuBZul/R7DRQqsOHiTrJFQlUUEA3JsbaE2t51zvpVsLZsSMYMVIs6AE4edB2lJ/5Uka5bjkb37qMnn2phoOpltPEbWD/AOohXtDK4N7gC5vmAAPI20fpFFIyNjML24wbdchKWOlmUggjU6W366Gi5SUrW19Bbjap6f1EGG2Li8MzYmAMDCFe9t6vceYIBuK6j0exCzwLiI9Fk7RUfYfdIv8AUCfO9R7M6S4BMO6NiAzym8l45MuosFF1sFA0F++q70WxseCxRw3WA4fEWZGDdlJDoATyYADxC0M7nHfYzF+R2ujo+Da++pv+HRk3K7944GtMOlqOjrIka2Z1Y4VIsdSLHpUiJRJAORD1de1PkrKuiuR8vuNPKt1Zgikbhc/7iPS9audPKm0dosLFobz5yx0tkSV0A143W9+RrbZzCsyyG5NgL39/CtEmspX54/vUuJIuRa2p5c6FanLoEkjJJvRrMLX38R40uKEUTI1haoyiGXnUuGmZblSR4Ej9Kxt2vDdUIaoWm07R7JLeiMBNJmCxswvwU7/Ko54lUDUEn3UXsiI3zC+nEVUqoKEpRlcXTD8ZG5CIzEsCRvvc37TXPIWA8fG4MliTbcNB4c/O/v7qNllJUtpmeyjuW2/uuLnwI7qAxL5V08vh+pP5qXFeg5ybdtg8naaw3CjT2F+dBUOBisMx+fn4Vk13bLy3/Bfnvo/oLJ9mxliSBq1lUDgOAt5e7vrrn8OejgVVkI9p735qlzc8wWBtzDVTuimyc+S3tSNlQj7I3ySjS3ZUNbvVfvV2/YGGVR2VCqqhEA3BQBcDu0UflNZ8krdGvFDjHkxpDD+3x+PuqcR1NEmlS5KnEW8mwJ4QaWY7ZQbxp60daMlBKFhQytdFIxmx2vuBHfyuDbwuB6Uvm2Vf2owdQdw4bq6C8QoaTDDlSnjaNUfIT7KBJ0ahb2oUOt9VG+1vgKU7X/h5DKpEZ6o9wut+9L/paumthhyqJsP3VFyXsjcJeipdE8Pi4o+pxRVymiTK186cA4NjmHPiLcdTZY0ohcPU0UVXVuyckkexx6VukdECPSt1jolEQ5g3V1lFdXWVfEHmfJTjSj2xufDxRFR9XmAbic0krt/cPShpI9PKvJ4m6pGAOUZhoND22N789SPStGmZhdiF1JocammeHwXWXZnCxoAGexYkncqAbzWk2z79YYg4ESqWEllfW+5R3C9NTXQawTcVJLv/AD/j40yFl7I0r1IjIcqAaAkkmygC2rE7hrRP0BXjR4nbtOsbh+DniCN6+/dWNsJwHOdLgyALc3fq75iot3caq0Mj4uS742u9P9/vRHidnSAFmWyqoYMNUYXA0caXPAULiEANgeGl/jTLbK3xLqqFj2MqqCderW/ZFR7R2Q6q0hdCy2zop7SZt1xUUurLyeNLlJY06jab+3+CHC7JZl6xyI4/vtx/Au9jRODjGtrhDmPatm6oWuWI3XNl7sxovHspxCsyvJniV4o77mbQKb7l0LeQqA4WRRID1QVtGbMcqHXs5tzNqdFuaq77DyYOLcYReu38/wDC/bZp1/WNqCNL6i3Z3sR3aAD8NLpmMj+dNsZh2dVKsBkwcZI5gMSbe6g02a+YICvbiWQsxyhFI7Wa+626omgMnjZE6SsySUKNLX3Ad/C/6+lS4XDG1hvsfW2p8fkVJiYiI5VMMIMQjuwDknPuZXzb9QfOj9j4IyGOIXvIyKDxCA2Ld2mY+Yqm1RUsLjJJ/vdfqjpXQvBhY+utvURxD+XMLn87gC+6yKa6Ts+MKoXutfnzPnqfOq5suEAhVFljAsBuvawHkvD+ZasWGesaduzXkVRocxGpBQkL0SprQmc+S2bWrQrW968tVgkLLUTpRRFaFaFxDUgJo61MVGlaiYUFBqbB1ireOPWpQtSxpVqJJTNCmlbhKkYVgFFQvkaZa8qW1ZV0Sz5KlGnlT3Exxx7LhmyDrCZVva9wJ57ediRfw5UkkGg8PhTDFwt9AgaxZSZrDeqqJnzHxzeg8ap+vuRexLhcWgDxy5lVnEquupR+ZHz+0mM2qih+qd5JJMuaRlAAC7gq2oXrbXzHQi19+nwpXItjTlFNjo+ZkjDgq+L9+/7e3ur32OYdsOxDyq0mQgooKogbmwA14e/nXi7XZY5Fs2eUsWJbsjMTfIttCQbb6X4KW1weNHz4PMgPvq3FfBX85m/+vn77139v8GuzcaQ80jvZmhcBtxzWGW1uOmlH7Px88jKDIkeawMnVgsQNO3fQgAk+VIli1p1sqDrHROZ18N7e4GhlXZePys0Uoxk19m/YdtHC/RpYJ2d5pDmMmgBCldAqDdlBJ38eFqCwMkUJzDFs0etogrXa/wBlgdPO2vdT/OHllmN8qLlHPXfY7w1hlH4xVd2nPluSAGbtGwHEn0vpbuUUMdrY2Pkyx7q92rvvV9NXdLuyHC7WyaIrKxK53JD5UB9mNCLAAc7179PVcSZesldCLA5Vu+gBUggDLv4ctKF2dASCbat2R4tYfo3+4UfBFnm5rHYDdqb5QfM528qNpC15WWkr6dr/AMWj3aMs0uVZWyqzXEQA7KqPtMOQtv5jlarx0H2daVZWX2IzJbjdvq4Vtzy9ZpzvVX2HgTisSeKggdxAJ0/MwJ8FtxrrPRPBAq0nB3LDTeqdiLy0eT/qLSMrpUh2OUskuc3b+o7wUeVRffvPidT5cB3AUxhah1SpkrOh09jKCSjValUTUZG9NizHOAZnrbNQ6tW2ai5CXEmvWpNaZqhlmqOZFFm00tqhEl6W7SxeWw5m1G4RLgUCdsf+HxjbCozRSLUKJaiUp0EZ5s8YVgr160DUdAm2WsrM1ZUpEPlCVLDyo+RcQcFH2L4dRIVa17MZ5A2o3HM3hYeo2JWnq4949mwKqZkZcT1mmmXr5Rv4an3UmTevuGl2UWS37VE8Ysfn1NSYk2Oh9T8eND5SwJG7iK0oUDx6G9Ptn4tbZT7J39xpFc3tW4uKJlDbFwgG4II+eFNejUWrudyoffv9yn1quiarfsuPLhTzkYKO7cP3pOTSG4lbPJRaNE3Z7ysRy1sfd6xiqdjpuskNtATYdyjRfcKsm38TaN2H226tPwJbMfPsf1NSPo7hs8wNrhRm9Nw8CQF/NRQ0rJLbobvF1UWbdlBUfiysCe+zMf6FoRW6qBj9o6DnmYZQLdwufEU12xGC0cN/ZuzX4lsioD48fGvNi4MYjFoh1jhBkfvPAePHyqr1YVW6RZejGyTBh1jGks1lB4guO0R+BBfxHfXV8BgljjVFFgqgAcgAAB5AAeQqrdF8L1kpnPsoMicszau36W4WCmrnHWSTtm1KlojKV5logitctDRdniUQhqFVqVRVoXLZOr1uGqAVuDRC2iQmomWpVFbhKlWBdFc27C1gy6lWBtzA3ii8BtVCo1HzzFMsRh71XtobGUm+492l/Ggdx2jVCUZqpDwbTXnRcGNBrnOK2WUOZGdTzDMR5qbinGx8U2UZyL9361SzNEn4sWtF1kkGUnuNCpiKUyY/S19+nrWyS015rELA12N+urKV9dWVPxSfgnzvi+NPcO8L7MjjaYLIgmIQnRrzyEBxx4EcLnWkeMqwYaBW2ZAcoLBphqL2vPLqRy9k+nOrn0vuKj2zn+NWwGbQG9v8+d/SgI3trwvv1+eVMZSpdFc9nrFzE/dvrrytenKtMJyhgZlzWjZdFjTcCmhUG3HfWnlSDweN+Krv3XTf6FfMZluY1vkUu2oGnE2Opt3VolyCVViBvIUkKOF+VNFxkGHkdlEsr3ZSzMuVgT2jcak258anwW2oI1AQSoqFjlGU9ZmH2z3bvAVbk/SHQ8XDpTyJPd+/t9Pm9+vqIIpFuMx046foKYjFOkYcPKJUcZkIPVopuV0Og7vPxpxDleBY5FtmUWiV4xoDm6wEns3vY3POhse4kZokQCSbJ1jdYrqojsdMpJHs8bGq5W+g5eHHHj5807Xw+6/Xrv03oVbRiYCIBnfPEr2JLWJvfKOAstHbNnEMqfR1MiyKB9b2QWDXbK1hoMoHjzonZsgORmj+sgHVEmVFWwuDvN72J7u+hJjE2VOqmMMWZQUKOS7nMQWFwRZTuNS30SeDEo801Tqu/pe6+999L5CDjJXlYBAJmdmbPfKgA9q/3bEW/CDrfUrZe0Tgy8bL1vX5HDxasyg6oNe7QjdfjfQPEzSLIZXhOQp1JQt28mW5LHg37+dERG7orYZ+thTMi51AyA9jMSd4NvP0oX9i8eLBK1GX5r06fX2S+L/6O2dEcdDNhIpIDdGB4ZSGuQ4K/ZINxYaaC2lqsEZqjfwqQLs+Nw1zK8sraWsxcqQPDIKuqNWOWpNFR3FBQra1Qq1SqauymegVvWor2pYBhNepKKwpcVUdu/SIZLpYod1+B5XqN0HCHN0XeNhU4Nc5w/SiVdHAHjcD1prD0ilbcE8b3q1Mt+Fk9FwYVA8QNV1dsTH7vkv+a9O0ZOLH1t+lW5JlLw8iHMuAU8KCk2OnFRUCbVYcfXtf5rw7Xa+uUrxFrHyN7HwoGohLFmRIcIiblF/njXoFbTzBgCN1RiSgIk/ZvWVpnrKhdHz7im302VlXZ0XaN2aU20NiJnAuu8DS9xx8rp56MyyPhIlEYyjrO19pryyHQkagEnQcbVqfS+5gXsq2PQEm2o4X31Gkz5Qgle27Lma1uOm61FYyOwGh14+fD550EGtoQN58fn960x6FKTT0zyKCicJh8xsBvNq3w0up3c9+m73b93jVx/h9sLMTPILot8qnieAJ7zZfOhnPirCxw5SowdH8PHh3doAxC3+1ctpoNeZVbc70IMGkAsFUMAQ5AFzohOu+12XSr1tjDg5IwLgZpG5kxqzIbczLl8esFUba03akO/t29CzEjuvGlIhNyNM4KPQg2dhVmxPbFxmJbjewJOnl76tmPwyJLDCqKqqS7KgABZrIN286lb8copR0Lgu+c7g2p5aN+yn8tWjYmH6/HOx3RoT5sLIPyk+tquctgwjr7ira+Bu8aOPZXrJLbibGSTxGZQvg9WJejOHnSMYlD1oXVlYqxzaspI9oC5H/ALrNj4P6RtB9NF7R5Zcys3/2Rxrblmq0bQwPLQjdScmRqkmaMWNO7CtlwpDGsUShUQBVUcB4nU+J1O+mkUlVrCYsg5W0PuNN4JqRY/jocK1Sq1AQy0UjUaYuSCQ1SJQ6GiEokKkSg1DjMKsilTxqWvM1qIBWnaKVicJ1b5JBcHc1t9avsZCLpp4ae6rfjcKsqlWFVmdHgazXtwb9++g6Ophzuar2L2w0yey9+5h8RXn0ycb47+BHxpr1+beb1Mqx8TUq+jRzrtCI7QmP/KPqKnwMc8xIJVALX0zHXl6UxxM0ajs+p4VPsqMqhYjVze3IDdf3nzoXoDJkqFpUe5VhjsWNhpdjvLGw9SQLd9arLVd2rtMTSoQfq1lAX/8AY+dY7+Cs628GP2QaatLQ9GKM07D+trKX9fXlVZejjM4plsvFTxw3IBgOYgG28MQSDvBvfdSyY00kxIXAwjcw63x1lf3WFbJdJV7OXH2yu7TmzObCwubDTjztxpVPRcj3JNRPAWNhvrTHSFPbDth7MaeVUUakj0rt2E2euHiSNdLAXPDS2/8AMyH8tUvoHs18MQ8kL5iRY5SRbx5aHduuOVdCcdYwFiMxC2PLedPwt/trFnnylSN+CHGNvsUY+HKruRujW3dd1cp45Y4fQ1yrFNeItzLt7mP/AJe6usdMJMsErDeXew/AkkY96CuV42L6vL/O3oNP3osQOUY9EIrYdntukW/hdP3HoatXQvDZYppmOsiiQnukdyp7uzGppFs+Lq8FOOIUP/tzf+I9atuFw4jwVuBiwcf5SrIx8s5qS3ZI6om/h3h7tiJiNSwTwteRgOXbkYeQqy4uG5oHoJCRhsx3tJKT49Yw+FOp0rPk27H43RV8fg70LBiinZbdz/erHiIb0oxWFvS7NC2F4fE99MYJ6qwVo92o5ftyphhMZfd/mrspxLLG9FIaSYfEUxw81MixE4jBTWMK8hN6IC3pvZmbpgTCocQoYEMAR30c8NQtBQtBxmitz7E1vG5XuOo8qiGyJeMg/p/zVm6ivGhoOJqXlS6sS4fZarqxzkc91/CkPTDbBB+ixGzsmeRvuRlgiqP55HYKO7MeFPek22EwkJkbedFG8k2vu42AJt3W41zvZ8EkuLbPcOyJLKwPs5+sCoD/ACr2V7xnqJJJyYnLllLQ2wEGaQNayRgIg4DIDmZfAlUHi51BFMJJq3iQAPlAAtoBuCqmVQO7Qn05UETWdTuyl+VE3XV7Q9qyr5Es5a1R4+U5ETkD73Y/GmEGFvUh2aZJcltwHvAPxrp6MfFiHC4V5GCIpYncBXV+g/QNYrTYgBn4A6hf80d0M6MJCA5F2PE1dlIFIy5m9I04sCjt9kUeCQHNkF+duW7wofApeW/LN6g5R7jTC9B4df8AV8CPM5v8UhDmVPpy1oIh95oM35mLP6n9a540eaMHwPrmJ/S/nXR/4gR36sDd1oP9KMRVK2fhC6lBvySWH5VQH/ax860w6ETWx39EvFOOBw7D8xT4BGpw75sLghwk+j5vIS/Ff0r3ZcWaCN+EsYa/iAx91x+agdmSfVYWL/8ACWVr7/qcRGCTfumbyqeiMu/RaO2Fj8X/AO416YypQ+xI8sQXkz/3t8QaLelS2EmL5EoGeGm7rQksdIkjRGQkmhoGXD2NxvqwPFQ8uGoLaHJi3D4q2h0Pu/xTfDYil8uDrWNHTdqOR3+Ro1JFSiWfDT00hkvVUwuMG46Hvpth8V302MqMuTFY6vWpoVMTUnX03kjK4NGz0NM4AuakaUVRem3SC4OGhY5m9th9lSbEA8GJIUHme5rC2Miq7K7tTF/TsY0ra4fDnKi8JJAbgeq5zyCR8CbH9H1JEzsbtJICfAxoVA5dkihsFggkaQaXYFntuCmxYeBuqDja33aZYc/6nfIf7VX4VkzZeVpBxjuwknst35j+tvdag40ol20PgajiFZoypBnmSsqa1ZV8iFFwUAuKE2hN1eJYjeMlj/01qfC4oUm21jgcRIPwf9tK78Y/m2Ypy/Lo6B0f6dJcRzjLuAf7J8eR936VeYZgwBUgg8RXz6swpnsnbWIwzBoJNOMbXZD+X7PiLUrJ4ye4jcflepHeEatIPteI/U1UOjnTmHEWST6mX7rHssf5H4+BtVqV9/fb9axyi4uma01JWiu9OFuYu6Rj4gRSi3nnFV7YEFm/Lb1VF/Vz6VaekPaK90sX+5gppT0bg+vVeIZh5ISD70FOjL8ouUdjrZ+Gy4UxAdvDyMAOaq2eMeGRlHkaTLhVXGFM3Ynw0mT8YMTXHeygn/pDnVwkiySs32XADfoD5aD85pHtDZ/aUm/1asQRvtnR1K6e0AJVHeF7qilsposuxZM0YPHM9+5i5YjyLEUcwpPsqbIxVrASZWuPZz2C3H8rZUt36ak06IqAA7ionWiWFRsKVJDIsDaOvOrozJWZKXxGKYC0INa/RxRxjrUpVcC+YBNg1Yajz4jwNVbbXSFcFIqOSwYE7tQAbXPzwq7sNK4d09xomx0ttyhIx+UXPvNPw41KVMXlzOMbR0bZvTGCXRJAx5cfSjMR0pjTTtFvuIpZv6Ru8TpXAJ4yO0Du5aGnGyOlbIvVSXKHQlfbC31HC9/I2vxp0/Ha3ERHyb7R0TG9KMTiCQg6mPjrmkINrdoaITqLLmJ4GhYMKFOo13m53sQRYndZUz35FtOFa7Ix8Uq5omDZfsjTqweLg7mOvat3DS5J0EV9/i3ibWXwAAFYMk3dPQ5bJ8Gm9zvY+4btOG86cL24VmDN1v8Azye6RgP0qUGocJ7I7yx9WJ+NZmwydq8WvCa9FUSje9ZWlZVEo5NFi6W7UUmQvwNvcoHwr3NRsADqAd+v6mvT0cqxTHORRuHxdazbNYtZFZibkBQWNgCxsBroASeQBNAOrKdQR4gjcSDv7wR4g1ZRYEdWq0bC6VTYeysTJGOBOoH8rVz2HEkU2wuLuONudjbhx/Mv9Q50E4KSphwnKD0dawm2IsYH6pu2FLZDowIHZ04i53it9h2GIRhuPWkeDOxv53rlaSEOHRirDUMDYg1Z+i/S9VZY8V2GW4WX7B1BGf7vK+7wrJPC4r8pthnU9SOuygHU7tx8DofgfKo5Ibgc1NvIj97HyqLDzhgDvBHuNExt+3iPn40hMc4geBQW6ph7ANu+JtCPBToRyVedNI2ZNGuV4NvI7n5/i9eLETEQkkMpsw1B4Xt9rmpGh8jvFTRbQjFlZ1Vt2RmUNe26xOulteIseNGhMgthWtq2sB3fPKvDUZEeWr21eCvb0LRDVhWhFTGojQ0WmKeku0BBhpZT9lCfPcB6kV8+GYuzOd7MSfE11P8AjVtLJh4sODrLJmb8MYv/AHFfSuTJurZ48aVmfPK9Gsr6GlObW9MmFx8+tK3FjWlGcZYDGvEweNip5jkd4PMHkdKvuxemKPZZgEP3h7PmN49/lXNIZKJ76TlwQydhwySj0dqWYFcykEWuCDe/gayPQAcgB6CuP4XGyRm6Ow8CR/7qwYLppMtg6q/f7J92nurnz8GS/pZpj5KfZ0K9bA1WcD0pjkIWxUkgWPMm2hHjT1Z6yzwSh2PjNS6Cs1e0N11e0viwrRx8pTPYjYYsUnzi6OoZPaSRv9OTLnUOFJHZJANClaV4uPtG3d+gr0pyToUaYfZ8oE/XyyHMMwjjTqonhxEMhUJiHWVizqbEiwjNj2tVO0MVhpJsM0jYjFRx/wCu8rSK8oMzuwRTK3VgKwGjC5BOhJqux7XdmvMzOTlGZiSbKoVQSeQAA7hRYCtqDUIOP+A4TDKskvX4nrlVYEKRwAsxiYO0iYlitkfcy2u+tspsy6bY3BQiSLDvKrSQKDhYrJh45mmRutlMWIZGcRRopQBgSFYkHdVMSrsFDMzKgKqCSQqlixCg7hdifOlssPdaoQnw2NtRwlVt9IiCKlimtVUXZcujnSbEYEhVPWQX1iY+zz6s/ZPdu7uNdW6PdJIcWuaJu1xRtGHiK4JDi6PwONKMHjYo43EG1Z8mFS37H487jp9H0MhzsEL5Fyu7tfKRGmXNlf7Ju6i+hAzEEEA1z3aGGUYDamN676RgsSJPow6jsxsJCqGx7UYVgFBsAcuY2uL6bM6eo0Trioi5ME8TBf8AmLIguoHByUQcrE8bCkuK6HYnCJDJszGfS8Li5BGILuhkEiNdZoQbMAgIZtGW17La6swQ4xp9g5p8pWi9fwikb/huELuxV3li7RJKlGdky33LkRhbcMi2Au171Kq30PDx18fCqnPseKDDnCbPZlEfWlJDISFlYSLkRxrp1st2GqkqLkqQsfRrA4tMOY5p2V+tzISxmZY8q9hnc3N2DnebBt/AKzONvoZijOl2W2w+97jWyqv3vcf2pRHDKCp6+4VcpUoLObDtNY3Dbzpp5b9XwM7MzDFsoJuFESELoBYE6kaE7766WrPa/djGmNya0vWbgLm5sNdNe/Sl+1MTkRjfcDQ0MjGzi/8AFHafX7QcA9mJVjHpmb3mquRpat8VietleT77s3kTp7q0auhBUkjBN3JngFKsctmprS/HrejBBIjrTGLdal8S60dGajKJE5VKFodjY0RG16EJBGEFnQ8nQ+jA1c02h31SVe1vGjlxR50nLjUxkJcS1/8AEO+vaq30rvrKT/LoZ+KBml+K9o/PCsrK3mUBxFGYCsrKhEOUoHHVlZUILpajFZWVRCZKnirKyqLGUe4+Bq+7B/8AjTfgP6msrKiLXR0SH2U/An9oqdaysrky/qZ1l/SiVamjrysokLkbvuqudLP/AI8//wDKT+01lZRrtEX9LPn/AA24eFStWVldBHLPH3UBiqysqyyOKpRXtZUIeTVNhqysqiEzftUy1lZVMIysrKyqIf/Z';

        clearInterval(timeid);
    }
    var time = 0;
    var timeid = setInterval(change, 5000);

})();

var para = document.createElement('p');
var node = document.createTextNode('how are you doing ??!!');
para.appendChild(node);
var eleme = document.getElementById('dive1');
eleme.appendChild(para);

var childer = document.getElementById('pp1');
//eleme.removeChild(childer);
//eleme.insertBefore(para, childer);
eleme.replaceChild(para, childer);
var MyCollection = document.getElementsByTagName('p');
for (var i = 0; i < MyCollection.length; i++) {
    MyCollection[i].style.color = 'red';
}
console.log('AA');
document.getElementById('demoo').innerHTML = window.location.href + "<br> protocol: " + window.location.protocol;
function Assignbtn() {
    window.location.assign('https://google.com');
}


