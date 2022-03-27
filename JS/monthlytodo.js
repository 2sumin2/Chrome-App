const monthlyTaskTable = document.querySelector(".monthlytask");
const yearMonth = monthlyTaskTable.querySelector("#year-month");
const previousMonBtn = monthlyTaskTable.querySelector("#premonth");
const nextMonBtn = monthlyTaskTable.querySelector("#nextmonth");
//const today = new Date();
//let year = today.getFullYear();
//let month = today.getMonth();
//let date = today.getDate();

let monthlyToDos = [[]];

printCalender(year, month, date);
let monthlyToDoList = document.querySelectorAll(".monthly-todo-list");
let monthlyToDoForm = document.querySelectorAll(".monthly-todo-list-form");
let monthlyToDoInput = document.querySelectorAll('.monthly-newtodo');



function saveMonthlyTask(day) {
    localStorage.setItem(day, JSON.stringify(monthlyToDos[0][day]));
}

function deleteMonthlyTask(event, day) {
    const li = event.target.parentElement;
    monthlyToDos[0][day] = monthlyToDos[0][day].filter((toDo) => toDo.id !== parseInt(li.id));
    li.remove();
    saveMonthlyTask(day);
}

function finishMonthlyTask(event, day) {
    const li = event.target.parentElement;
    console.log(monthlyToDos);
    for (i = 0; i < monthlyToDos[0][day].length; i++) {
        if (monthlyToDos[0][day][i].id == li.id) {
            const changeElement = monthlyToDos[0][day][i];
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
    saveMonthlyTask(day);
}

function printMonthlyTask(day, newToDo) {
    const toDoDay = new Date(day);
    const toDoDate = toDoDay.getDate();
    monthlyToDoList = document.querySelectorAll(".monthly-todo-list");
    const li = document.createElement("li");
    li.id = newToDo.id;

    const checkBtn = document.createElement("button");
    const span = document.createElement("span");
    const deleteBtn = document.createElement("button");
    span.innerText = newToDo.text;
    console.log(newToDo.text);
    if (newToDo.done == "yes") {
        checkBtn.innerText = "✓ ";
        li.classList.add("done");
    } else {
        checkBtn.innerText = "☐ ";
    }
    checkBtn.classList.toggle("check");
    deleteBtn.innerText = " 〤";
    deleteBtn.addEventListener("click", () => {
        deleteMonthlyTask(event, day);
    });
    checkBtn.addEventListener("click", () => {
        finishMonthlyTask(event, day);
    });
    li.appendChild(checkBtn);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    monthlyToDoList[toDoDate - 1].appendChild(li);
}
function MonthlyTaskSubmit(day, event) {
    const toDoDay = new Date(day);
    const toDoDate = toDoDay.getDate();
    event.preventDefault();
    monthlyToDoForm = document.querySelectorAll(".monthly-todo-list-form");
    monthlyToDoInput = document.querySelectorAll('.monthly-newtodo');
    const newToDo = monthlyToDoInput[toDoDate - 1].value;
    if (newToDo.split() != "") {
        const newToDoObj = {
            text: newToDo,
            id: Date.now(),
            done: "no"
        }
        if (!monthlyToDos[0][day]) {
            monthlyToDos[0][day] = [];
        }
        monthlyToDos[0][day].push(newToDoObj);

        monthlyToDoInput[toDoDate - 1].value = "";
        printMonthlyTask(day, newToDoObj);
        saveMonthlyTask(day);
    };
}

function getLocalStorage() {
    for (i = 1; i <= 31; i++) {
        if (localStorage.getItem(`${year}-${month + 1}-${i}`)) {
            const savedmonthlyToDos = localStorage.getItem(`${year}-${month + 1}-${i}`);
            if (savedmonthlyToDos != null && JSON.parse(savedmonthlyToDos).length != 0) {
                let parsemonthlyToDos = JSON.parse(savedmonthlyToDos);
                parsemonthlyToDos.forEach(
                    (item) => (
                        printMonthlyTask(`${year}-${month + 1}-${i}`, item),
                        (
                            !monthlyToDos[0][`${year}-${month + 1}-${i}`] ?
                                monthlyToDos[0][`${year}-${month + 1}-${i}`] = [] : null
                        ),
                        monthlyToDos[0][`${year}-${month + 1}-${i}`].push(item)
                    )
                )
            }
        }
    }
}

function printDate(year, month, date, firstDay) {
    cell = row.insertCell();
    cell.id = i;
    cell.innerHTML = i +
        `<ul class="monthly-todo-list" id="${year}-${month}-${date}"></ul>
        <form
            class="monthly-todo-list-form"
            id="${year}-${month}-${date}"
            onsubmit="MonthlyTaskSubmit(this.id, event)"
        >
            <input
                class="monthly-todo-input"
                id="${year}-${month}-${date}"
                type="submit" 
                value="+" 
                style="background-color:transparent; cursor:pointer; border:0; font-size: 13pt;"
            />
            <b>
            <input 
                class="monthly-newtodo" 
                maxlength="30" 
                type="text" 
                style="font-size:11pt" placeholder="write.."
            />
            </b>
        </form></td>`;

    if (firstDay == 7) {
        cell.style = "color:brown";
    } else if (firstDay == 6) {

        cell.style = "color:rgb(47, 47, 167)";
    }
    if (i == date) {
        const style = cell.getAttribute("style") + ";";
        cell.setAttribute("style", style + "background-color:rgba(255,228,196, 0.2);");
    }
}

function printCalender(year, month, date) {
    let lastDate = new Date(year, month + 1, 0).getDate();
    let firstDay = new Date(year, month, 1).getDay();
    yearMonth.innerText = `${year} - ${String(month + 1).padStart(2, "0")}`;
    row = monthlyTaskTable.insertRow();
    for (i = 0; i < firstDay; i++) {
        cell = row.insertCell();
        if (i == 0) {
            cell.style = "color:brown";
        }
    }
    for (i = 1; i <= lastDate; i++) {
        if (firstDay != 7) {
            printDate(year, month, date, firstDay);
            firstDay += 1;
        } else {
            row = monthlyTaskTable.insertRow();
            printDate(year, month, date, firstDay);
            firstDay = firstDay - 6;
        }
    }
}

function resetCalendar() {
    while (monthlyTaskTable.rows.length > 2) {
        monthlyTaskTable.deleteRow(monthlyTaskTable.rows.length - 1);
    }
}

function previousMonth() {
    month -= 1;
    resetCalendar();
    if (month == -1) {
        year -= 1;
        month = 12;
    }
    printCalender(year, month, date);
    getLocalStorage();
}

function nextMonth() {
    month += 1;
    resetCalendar();
    if (month == 13) {
        year += 1;
        month = 1;
    }
    printCalender(year, month, date);
    getLocalStorage();
}

previousMonBtn.addEventListener("click", previousMonth);
nextMonBtn.addEventListener("click", nextMonth);

getLocalStorage();