function changeName() {
    var element = document.getElementById("name");
    element.innerHTML = "Elizabeth Rose";
}

var requestCount = document.querySelector("#requests");
var connectionCount = document.querySelector("#connections");



function accept(id) {
    var element = document.querySelector(id);
    element.remove();
    requestCount.innerText--;
    connectionCount.innerText++;
}

function deny(id) {
    var element = document.querySelector(id);
    element.remove();
    requestCount.innerText--;
}