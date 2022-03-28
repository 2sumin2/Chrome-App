const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const sayHello = document.querySelector("#greeting");
const savedUsername = localStorage.getItem("username");
const taskTable = document.querySelector(".weeklytask");
const clearBtn = document.querySelector("#deleteAll");
const sideBox = document.querySelector(".sidebox");
const mainBox = document.querySelector(".mainbox");
const ths = taskTable.querySelectorAll("th");
const tds = taskTable.querySelectorAll("td");

function resizehandlerMore() {
    for (i = 0; i < 3; i += 2) {
        ths[i].classList.remove("hidden");
    }
    for (i = 0; i < 7; i++) {
        tds[i].classList.remove("hidden");
        ths[i + 3].classList.remove("hidden");
        tds[i].classList.remove("zerosize");
        ths[i + 3].classList.remove("zerosize");
        tds[i].classList.remove("fullsize");
        ths[i + 3].classList.remove("fullsize");
    }
}

function resizehandler() {
    for (i = 0; i < 7; i++) {
        tds[i].style.height = `${window.outerHeight / 4}px`;
    }
    if (window.outerWidth < 600) {
        sideBox.classList.add("hidden");
        mainBox.style.width = "88%";

        //taskTable.style = "margin-left:20%";
        for (i = 0; i < 3; i += 2) {
            ths[i].classList.add("hidden");
        }
        for (i = 0; i < 7; i++) {
            const today = new Date();
            if (tds[i].querySelector("ul").id != today.getDay()) {
                tds[i].classList.add("hidden");
                ths[i + 3].classList.add("hidden");
                tds[i].classList.add("zerosize");
                ths[i + 3].classList.add("zerosize");
            }
            tds[today.getDay()].classList.add("fullsize");
            ths[today.getDay() + 3].classList.add("fullsize");
        }
    } else if (window.outerWidth < 1500) {
        //taskTable.style = "margin-left:0";
        sideBox.classList.add("hidden");
        mainBox.style.width = "95%";
        resizehandlerMore();
    } else {
        if (savedUsername != null) {
            console.log(savedUsername);
            sideBox.classList.remove("hidden");
        }
        mainBox.style.width = "80%";
        resizehandlerMore();
    }
}

function loginPage() {
    loginForm.classList.remove("hidden");
    taskTable.classList.add("hidden");
    clearBtn.classList.add("hidden");
    sideBox.classList.add("hidden");
    mainBox.classList.add("hidden");
}
function MainPage() {
    loginForm.classList.add("hidden");
    taskTable.classList.remove("hidden");
    clearBtn.classList.remove("hidden");
    sideBox.classList.remove("hidden");
    mainBox.classList.remove("hidden");
}
function onLogIn(event) {
    event.preventDefault();
    const username = loginInput.value;
    MainPage();
    localStorage.setItem("username", username);
    printGreeting(username);
}

function printGreeting(username) {
    sayHello.innerText = `Hi, ${username}`;
    sayHello.classList.remove("hidden");
}

if (savedUsername == null) {
    loginPage();
} else {
    printGreeting(savedUsername);
    MainPage();
}

loginForm.addEventListener("submit", onLogIn);
window.addEventListener("resize", resizehandler);

resizehandler();
