var toggleLeft = document.querySelector('button[id="toggle-left"]');
var toggleRight = document.querySelector('button[id="toggle-right"]');

function toggleClose(elem) {
    elem.classList.toggle("closed");
}

toggleLeft.addEventListener('click',function() { toggleClose(start); },false);
toggleRight.addEventListener('click',function() { toggleClose(end); },false);