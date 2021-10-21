function changeName() {
    var element = document.getElementById("name");
    element.innerHTML = "Elizabeth Rose";
}


function myFunction() {
    var myobj = document.getElementById("demo");
    myobj.remove();
    var clicks = 2;
    var add = 418;
    function click() {
        clicks -= 1;
        add +=1;
        document.getElementById("clicks").innerHTML = clicks;
        document.getElementById("add").innerHTML = add;
    }
    click();
}


function myFunctions() {
    var myobj = document.getElementById("demo");
    myobj.remove();
    var clicks = 2;
    function click() {
        clicks -= 1;
        document.getElementById("clicks").innerHTML = clicks;
    }
    click();
}

