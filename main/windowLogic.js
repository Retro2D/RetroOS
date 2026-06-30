dragElement(document.getElementById("welcomeWindow"))

function dragElement(element) {
    var initialX = 0, initialY = 0, currentX = 0, currentY = 0;

    if (document.getElementById(element.id + "header")) {
        document.getElementById(element.id + "header").onmousedown = startDrag;

    } else {
        element.onmousedown = startDrag;
    }

    function startDrag(e) {
        e = e || window.event;
        e.preventDefault();

        initialX = e.clientX;
        initialY = e.clientY;

        document.onmouseup = stopDrag;
        document.onmousemove = DragElement;

        }

    function DragElement(e) {
        e = e || window.event;
        e.preventDefault();

        currentX = initialX - e.clientX;
        currentY = initialY - e.clientY;
        initialX = e.clientX;
        initialY = e.clientY;

        element.style.top = (element.offsetTop - currentY) + "px";
        element.style.left = (element.offsetLeft - currentX) + "px";
    }

    function stopDrag() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}