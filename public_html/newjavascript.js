function myFunction() {
    var x = document.getElementsByTagName('div');

    for (var i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = 'green';
    }
}


function myCreateFunction() {
    var table = document.getElementById("myTable");
    var persons = [];
    for (var i = 0; i < 5; i++) {
        var name = "hello" + i;
        var lastname = "hello" + i;
        var phone = 12345671 + i;
        var mail = "mymail" + i + "@gmail.com";
        persons.push(name + ", " + lastname + ", " + phone + ", " + mail);
    }


    //   var persons = [name + lastname, "Volvo", "BMW"];



    for (i = 0; i < persons.length; i++) {
        var tr = document.createElement('TR');
        var td = document.createElement('TD')
        td.appendChild(document.createTextNode(persons[i]));
        tr.appendChild(td)
        table.appendChild(tr);
    }

}

function mouseoverfunc(id)
{
    var para = document.getElementById("mydiv" + id)
    var node = para.innerHTML = "hello" + id;
    para.appendChild(node);
}

function removefunc(id)
{
    var para = document.getElementById("mydiv" + id)
    var node = para.innerHTML = "";
    para.appendChild(node);
}




function randompopup(id)
{
    window.alert("you clicked div, " + id);
    console.log("you clicked div, " + id);
}

function writetotable()
{
    var getform = document.getElementById("someform");


    var table = document.getElementById("myTable2");

    for (i = 0; i < getform.elements.length; i++) {
        console.log(getform.elements[i].value);
        var tr = document.createElement('TR');
        var td = document.createElement('TD')
        td.appendChild(document.createTextNode(getform.elements[i].value));
        tr.appendChild(td)
        table.appendChild(tr);
    }

}



function createlist()
{
    console.log("ive been reached!");
    var getlist = document.getElementById("myullist").getElementsByTagName("li");

    for (var i = 0; i < getlist.length; i++) {

        if (i % 2 === 0)
        {
            getlist[i].style.color = 'gray';
        } else
        {
            // if not even.
            getlist[i].style.color = 'red';
        }

    }
}


function listreducesize()
{
    var ul = document.getElementById('myullist');
    ul.onmouseout = function (event) {
        var target = getEventTarget(event);
        target.style.fontSize = "22px";
    }
}

function listdoublesize()
{
    var ul = document.getElementById('myullist');
    ul.onmouseover = function (event) {
        var target = getEventTarget(event);
        target.style.fontSize = "44px";
    }
}


function greetconsole()
{
    var ul = document.getElementById('myullist');
    ul.onclick = function (event) {
        var target = getEventTarget(event);
        alert("You clicked... " + target.innerHTML);
        console.log("You clicked... " + target.innerHTML);
    }
}

function getEventTarget(e) {
    e = e || window.event;
    return e.target || e.srcElement;
}

///// calculator..



function calculate(string)
{
    // get a string and decide what to do with it.
    var getdisplay = document.getElementById('display');
    if (string === "=") // if string equals = then do the math otherwise keep adding to string..
    {
        var calculate = eval(getdisplay.innerHTML);
        getdisplay.innerHTML = calculate;

    } else {
        var usedisplay = getdisplay.innerHTML + string;
        getdisplay.innerHTML = usedisplay;
    }
}



