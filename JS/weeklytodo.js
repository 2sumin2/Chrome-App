const toDoList = document.querySelectorAll(".todo-list");
const toDoForm = document.querySelectorAll(".todo-list-form");
const toDoInput = document.querySelectorAll('.todo-list-form input[type="text"]');
const deleteAllBtn = document.querySelector("#deleteAll");
const categoryMonth = document.querySelector("#category1");
const categoryWeek = document.querySelector("#category2");
const yearMonthWeek = document.querySelector("#year-month-week");
const today = new Date();
let year = today.getFullYear();
let month = today.getMonth();
let date = today.getDate();
const firstDateDay = new Date(year, month, 1).getDay();
const thisWeek = Math.ceil((firstDateDay + date) / 7);
const week = ["1st", "2nd", "3rd", "4th", "5th"];

const toDos = [[], [], [], [], [], [], []];
//[task, ["0":[]]]
function saveToDo(day) {
    localStorage.setItem(day, JSON.stringify(toDos[day]));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    const day = li.parentElement.id;
    toDos[day] = toDos[day].filter((toDo) => toDo.id !== parseInt(li.id));
    console.log(li);
    li.remove();
    saveToDo(day);
}

function finishToDo(event) {
    const li = event.target.parentElement;
    const day = li.parentElement.id;

    for (i = 0; i < toDos[day].length; i++) {
        if (toDos[day][i].id == li.id) {
            const changeElement = toDos[day][i];
            if (changeElement.done == "yes") {
                event.target.innerText = "☐ ";
                changeElement.done = "no";
            } else {
                event.target.innerText = "✓ ";
                changeElement.done = "yes";
            }
        }
    }
    li.classList.toggle("done");
    saveToDo(day);
}

function printToDo(day, newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id;
    console.log(li.id);
    const checkBtn = document.createElement("button");
    const span = document.createElement("span");
    const deleteBtn = document.createElement("button");
    span.innerText = newToDo.text;
    if (newToDo.done == "yes") {
        checkBtn.innerText = "✓ ";
        li.classList.add("done");
    } else {
        checkBtn.innerText = "☐ ";
    }
    checkBtn.classList.toggle("check");
    deleteBtn.innerText = " 〤";
    deleteBtn.addEventListener("click", deleteToDo);
    checkBtn.addEventListener("click", finishToDo);
    li.appendChild(checkBtn);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    toDoList[day].appendChild(li);
}

function toDoSubmit(day, event) {
    event.preventDefault();
    console.log(day);

    const newToDo = toDoInput[day].value;
    if (newToDo.split() != "") {
        const newToDoObj = {
            text: newToDo,
            id: Date.now(),
            done: "no"
        }
        toDos[day].push(newToDoObj);
        toDoInput[day].value = "";
        printToDo(day, newToDoObj);
        saveToDo(day);
    };

}

for (i = 0; i < 7; i++) {
    const savedToDos = localStorage.getItem(i);
    if (savedToDos != null) {
        const parseToDos = JSON.parse(savedToDos);
        toDos[i] = parseToDos;
        parseToDos.forEach((item) => printToDo(i, item));
    }
}



yearMonthWeek.innerText = `${year} - ${monthNames[month]} - ${week[thisWeek - 1]} week`;

function clearTable() {
    if (taskTable.classList.contains("hidden")) {
        for (i = 7; i < 38; i++) {
            localStorage.removeItem(i);
        }
    } else {
        for (i = 0; i < 7; i++) {
            localStorage.removeItem(i);
        }
    }
    window.location.reload();
}

deleteAllBtn.addEventListener("click", clearTable);

categoryMonth.addEventListener("click", function () {
    taskTable.classList.add("hidden");
    monthlyTaskTable.classList.remove("hidden");
});
categoryWeek.addEventListener("click", function () {
    taskTable.classList.remove("hidden");
    monthlyTaskTable.classList.add("hidden");
});
