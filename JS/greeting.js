const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const sayHello = document.querySelector("#greeting");
const savedUsername = localStorage.getItem("username");
const taskTable = document.querySelector(".weeklytask");
const clearBtn = document.querySelector("#deleteAll");
const sideBox = document.querySelector(".sidebox");
const mainBox = document.querySelector(".mainbox");

function resizehandler() {
    if(window.outerWidth<1500) {
        sideBox.classList.add("hidden");
        mainBox.style.width = "95%";
    } else {
        sideBox.classList.remove("hidden");
        mainBox.style.width = "80%";
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
    loginForm.classList.remove("hidden");
} else {
    printGreeting(savedUsername);
    MainPage();
}

loginForm.addEventListener("submit", onLogIn);
window.addEventListener("resize", resizehandler);

resizehandler();