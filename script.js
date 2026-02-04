
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

let bgm1 = document.getElementById("snowReg");
bgm1.volume = 0.25;

let bgm2 = document.getElementById("snowBad");
bgm2.volume = 0.25;

// Function is to toggle classes
function toggleClassOnElements(selector, className) {
    document.querySelectorAll(selector).forEach(element => {
        element.classList.toggle(className);
    });
}

document.getElementById("finder-holder").addEventListener("click", () => {
    toggleClassOnElements("#finder-holder", "appSelected");
});

document.getElementById("word-holder").addEventListener("click", () => {
    toggleClassOnElements("#word-holder", "appSelected");
});

document.getElementById("safari-holder").addEventListener("click", () => {
    toggleClassOnElements("#safari-holder", "appSelected");
});

document.getElementById("qtp-holder").addEventListener("click", () => {
    toggleClassOnElements("#qtp-holder", "appSelected");
});

document.getElementById("photobooth-holder").addEventListener("click", () => {
    toggleClassOnElements("#photobooth-holder", "appSelected");
});

document.getElementById("preview-holder").addEventListener("click", () => {
    toggleClassOnElements("#preview-holder", "appSelected");
});

document.getElementById("berries").addEventListener("click", () => {
    toggleClassOnElements("#preview-holder", "appSelected");
});

document.getElementById("snowyroof").addEventListener("click", () => {
    toggleClassOnElements("#preview-holder", "appSelected");
});

document.getElementById("deadmau5").addEventListener("click", () => {
    toggleClassOnElements("#preview-holder", "appSelected");
});

function stopMusic() {
    bgm1.pause();
}

document.getElementById("evilclose").addEventListener("click", () => {
    bgm2.play();
});

document.getElementById("trash-holder").addEventListener("click", () => {
    toggleClassOnElements("#trash-holder", "appSelected");
});

function dontknow() {
    alert("i don't know how to use that.");
}

function dontcare() {
    alert("that thing's boring. i don't care about that.");
}

function songs() {
    alert("my mom and dad made some songs on that. they play together.");
}

function movies() {
    alert("i made so many movies. mostly trailers.");
}

function cantsee() {
    alert("Can't see me.");
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
let appHolders = document.getElementsByClassName('appHolder');
let closeBtns = document.getElementsByClassName('close');
let minBtns = document.getElementsByClassName('min');
let maxBtns = document.getElementsByClassName('max');

for(let appIcon of appIcons) {
    appIcon.onclick = function(event) {
        document.querySelector(event.target.getAttribute('href') ).style.display = 'block';
        document.querySelector(event.target.getAttribute('href') ).style.position = 'absolute';
    }
}

// for(let appHolder of appHolders) {
//     appHolder.onclick = function(event) {
//         toggleClassOnElements(event.target , "appSelected");
//     }
// }


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

//background change
let uiBackground = document.getElementById('ui');
// let bgs = document.getElementsByClassName('bg');
let currentBg = document.getElementById('currentBg');

// for(let bg of bgs) {
//     bg.onclick = function(event) {
//         toggleClassOnElements("#ui", "bgAurora");
//         currentBg.src = 'assets/aurora.jpg';
//     }
// }

document.getElementById("aurora").addEventListener("click", () => {
    uiBackground.className = 'bgAurora';
    currentBg.src = 'assets/aurora.jpg';
});

document.getElementById("iceberg").addEventListener("click", () => {
    uiBackground.className = 'bgIceberg';
    currentBg.src = 'assets/iceberg.jpg';
});

document.getElementById("water").addEventListener("click", () => {
    uiBackground.className = 'bgWater';
    currentBg.src = 'assets/water.jpg';
});

document.getElementById("tiger").addEventListener("click", () => {
    uiBackground.className = 'bgTiger';
    currentBg.src = 'assets/tiger.jpg';
});

document.getElementById("snowyhills").addEventListener("click", () => {
    uiBackground.className = 'bgSnowy';
    currentBg.src = 'assets/snowy_hills.jpg';
});

document.getElementById("tranquil").addEventListener("click", () => {
    uiBackground.className = 'bgTranquil';
    currentBg.src = 'assets/tranquil_surface.jpg';
});