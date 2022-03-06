const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const sayHello = document.querySelector("#greeting");
const savedUsername = localStorage.getItem("username");
const taskTable = document.querySelector(".weeklytask");
const clearBtn = document.querySelector("#deleteAll");

function onLogIn(event) {
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add("hidden");
    taskTable.classList.remove("hidden");
    clearBtn.classList.remove("hidden");
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
    taskTable.classList.remove("hidden");
    clearBtn.classList.remove("hidden");
}

loginForm.addEventListener("submit", onLogIn);


