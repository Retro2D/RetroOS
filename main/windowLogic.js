var appSelected = undefined;
var largestIndex = 1;

function selectApplication(app) {
    app.classList.add("selected");
    appSelected = app;
}

function unselectApplication(app) {
    app.classList.remove("selected");
    appSelected = undefined;
}

function handleSelection(app) {

    if (appSelected == app) {
        unselectApplication(app);
        openWindow(app);

    } else {
        selectApplication(app);
    }
}

dragElement(document.getElementById("welcomeWindow"))
dragElement(document.getElementById("demoApplication"))

function dragElement(element) {
    if (element !==undefined && element !==null) {
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
            if (element.offsetTop - (initialY - e.clientY) < 600) { // Well, that was a good case study on what not to do.
                console.log(e.clientY)
                if (element.offsetTop - (initialY - e.clientY > 45)) {
                    currentY = initialY - e.clientY;
                } else {
                    element.style.top = "46px"; // Resets window Y to a functional value.
                }
            }
            else {
                element.style.top = "599px"; // Same as above note, this time for values too high.
            }
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
}

// Variables for window handles

var welcomeWindow = document.querySelector("#welcomeWindow");
var welcomeClose = document.querySelector("#welcomeClose");
var welcomeOpen = document.querySelector("#RetroButton");

var demoWindow = document.querySelector("#demoApplication");
var demoClose = document.querySelector("#demoClose")
var demoOpen = document.querySelector("#demoIcon");

//Functions for window events

function closeWindow(element) {
    element.style.display = "none";
}

function openWindow(element) {
    element.style.display = "inline";
}

//Conditions for said events

if (welcomeClose !==undefined && welcomeClose !==null) {
    welcomeClose.addEventListener("click", function() {
        closeWindow(welcomeWindow);
    });
}

if (welcomeOpen !==undefined && welcomeOpen !==null) {
    welcomeOpen.addEventListener("click", function() {
        openWindow(welcomeWindow);
    });
}

if (demoClose !==undefined && demoClose !==null) {
    demoClose.addEventListener("click", function() {
        closeWindow(demoWindow);
    });
}

if (demoOpen !==undefined && demoOpen !==null) {
    demoOpen.addEventListener("click", function() {
        console.log("Selected demo app")
        handleSelection(demoWindow);
    });
}