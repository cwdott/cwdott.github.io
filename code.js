var toggleLeft = document.getElementById("toggle-left");
var toggleRight = document.getElementById("toggle-right");

function toggleClose(elem) {
    var element = document.getElementById(elem);
    element.classList.toggle("closed");
}

toggleLeft.addEventListener("click", toggleLeft.innerHTML("cheesecake"));
toggleRight.addEventListener("click", toggleClose(toggleRight));