var toggleLeft = document.getElementById("toggle-left");
var toggleRight = document.getElementById("toggle-right");

function toggleClose(elem) {
    elem.classList.toggle("closed");
}

toggleLeft.addEventListener("click", toggleClose(toggleLeft));
toggleRight.addEventListener("click", toggleClose(toggleRight));