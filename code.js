var toggleLeft = document.getElementById("toggle-left");
var toggleRight = document.getElementById("toggle-right");

toggleLeft.addEventListener("click", toggleClose(toggleLeft));
toggleRight.addEventListener("click", toggleClose(toggleRight));

function toggleClose(elem) {
    var element = document.getElementById(elem);
    element.classList.toggle("closed");
}