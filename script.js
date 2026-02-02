
// document.getElementsByClassName("items").addEventListener("submit", () => {
//     document.getElementsByClassName("login").style.opacity = "0";
// });

// document.getElementsByClassName("items").addEventListener("submit", () => {
//     toggleClassOnElements(".login");
//     document.body.classList.toggle("unlocked");
// });

// const d = new Date();

// const time = d.getHours() + ":" + String(d.getMinutes()).padStart(2, "0");

// document.getElementById("time").innerHTML = time;

let bgm = document.getElementById("snowReg");
bgm.volume = 0.25;

// Function is to toggle classes
function toggleClassOnElements(selector, className) {
    document.querySelectorAll(selector).forEach(element => {
        element.classList.toggle(className);
    });
}

// draggable object function
document.querySelectorAll(".drag").forEach(element => {
    let offsetX, offsetY, isDragging = false;

    element.addEventListener("pointerdown", (event) => {
        isDragging = true;
        offsetX = event.clientX - element.getBoundingClientRect().left;
        offsetY = event.clientY - element.getBoundingClientRect().top;
        element.style.position = "absolute";
        element.style.zIndex = "1000";
    });

    document.addEventListener("pointermove", (event) => {
        if (!isDragging) return;
        element.style.left = `${event.clientX - offsetX}px`;
        element.style.top = `${event.clientY - offsetY}px`;
        //use the ` key!!! not apostrophes
    });

    document.addEventListener("pointerup", () => {
        isDragging = false;
    });
});

// //modals (window)
let apps = document.getElementsByClassName('window');
let appIcons = document.getElementsByClassName('appIcon');
let closeBtns = document.getElementsByClassName('close');
let minBtns = document.getElementsByClassName('min');
let maxBtns = document.getElementsByClassName('max');

for(let appIcon of appIcons) {
    appIcon.onclick = function(event) {
        document.querySelector(event.target.getAttribute('href') ).style.display = 'block';
    }
}

// for(let closeBtn of closeBtns) {
//     closeBtn.onmouseover = function(event) {
//         event.target.src = img.src.replace("assets/close_.png", "assets/close_hover.png");
//     }
// }

for(let closeBtn of closeBtns) {
    closeBtn.onmouseover = function(event) {
        event.target.src = 'assets/close_hover.png';
    }
    closeBtn.onmouseout = function(event) {
        event.target.src = 'assets/close_.png';
    }
}

for(let closeBtn of closeBtns) {
    closeBtn.onclick = function(event) {
        event.target.parentNode.parentNode.style.display = 'none';
    }
}

for(let minBtn of minBtns) {
    minBtn.onmouseover = function(event) {
        event.target.src = 'assets/min_hover.png';
    }
    minBtn.onmouseout = function(event) {
        event.target.src = 'assets/min_.png';
    }
}

for(let maxBtn of maxBtns) {
    maxBtn.onmouseover = function(event) {
        event.target.src = 'assets/max_hover.png';
    }
    maxBtn.onmouseout = function(event) {
        event.target.src = 'assets/max_.png';
    }
}

// window.onclick = function(event) {
//     if(event.target.classList.contains('window') ) {
//         for(let app of apps) {
//             if(typeof app.style !== 'undefined') {
//                 app.style.display = 'none';    
//             }
//         }
//     }
// }

window.onkeydown = function(event) {
    if (event.key == 'Escape') {
        for(let app of apps) {
            app.style.display = 'none';
        }
    }
}

