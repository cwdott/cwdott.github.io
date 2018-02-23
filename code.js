var toggleLeft = document.querySelector('button[id="toggle-left"]');
var toggleRight = document.querySelector('button[id="toggle-right"]');

function toggleClose(elem) {
    elem.classList.toggle("closed");
}

toggleLeft.innerHTML(cheesecake);

toggleLeft.addEventListener('click',function() { toggleClose(toggleLeft); },false);
toggleRight.addEventListener('click',function() { toggleClose(toggleRight); },false);