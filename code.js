var toggleLeft = document.querySelector('button[id="toggle-left"]');
var toggleRight = document.querySelector('button[id="toggle-right"]');

function toggleClose(elem) {
    var element = document.querySelector(elem);
    element.classList.toggle("closed");
}

toggleLeft.addEventListener('click',function() { toggleClose("start"); },false);
toggleRight.addEventListener('click',function() { toggleClose("end"); },false);