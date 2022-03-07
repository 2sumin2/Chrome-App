const monthlyTaskTable = document.querySelector(".monthlytask");
const yearMonth = monthlyTaskTable.querySelector("#year-month");
const previousMonBtn = monthlyTaskTable.querySelector("#premonth");
const nextMonBtn = monthlyTaskTable.querySelector("#nextmonth");
const today = new Date();
let year = today.getFullYear();
let month = today.getMonth();
let date = today.getDate();

printCalender(year, month, date);
let monthlyToDoList = document.querySelectorAll(".monthly-todo-list");
let monthlyToDoForm = document.querySelectorAll(".monthly-todo-list-form");
let monthlyToDoInput = document.querySelectorAll('.monthly-newtodo');

///////////////////////////////////////
let monthlyToDos = [];
for (i=0;i<31;i++){
    monthlyToDos[i] = [];
}

function saveMonthlyTask (day) {
    day = parseInt(day);
    //if(monthlyToDos[day].length==0){
    //    localStorage.removeItem(day+6);
    //}else{
    localStorage.setItem(day+6, JSON.stringify(monthlyToDos[day]));
    //}
}

function deleteMonthlyTask (event) {
    const li = event.target.parentElement;
    const day = li.parentElement.id;
    monthlyToDos[day] = monthlyToDos[day].filter((toDo) => toDo.id !== parseInt(li.id));
    li.remove();
    saveMonthlyTask(day);
}

function finishMonthlyTask(event) {
    const li = event.target.parentElement;
    const day = li.parentElement.id;
    console.log(monthlyToDos[day].length);
    for (i=0; i<monthlyToDos[day].length;i++) {
        //console.log(li.id);
        //console.log(monthlyToDos[day-1][i]);
        if (monthlyToDos[day][i].id == li.id){
            const changeElement = monthlyToDos[day][i];
            console.log(monthlyToDos[day-1]);
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
    monthlyToDoList = document.querySelectorAll(".monthly-todo-list");
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
        checkBtn.innerText =  "☐ ";
    }
    checkBtn.classList.toggle("check");
    deleteBtn.innerText = " 〤";
    deleteBtn.addEventListener("click", deleteMonthlyTask);
    checkBtn.addEventListener("click", finishMonthlyTask);
    li.appendChild(checkBtn);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    monthlyToDoList[day-1].appendChild(li);
}
function MonthlyTaskSubmit(day, event) {
    event.preventDefault();
    monthlyToDoForm = document.querySelectorAll(".monthly-todo-list-form");
    monthlyToDoInput = document.querySelectorAll('.monthly-newtodo');
    const newToDo = monthlyToDoInput[day-1].value;
    if(newToDo.split() != "") {
        const newToDoObj = {
            text:newToDo,
            id: Date.now(),
            done : "no"
        }
    monthlyToDos[day].push(newToDoObj);
    monthlyToDoInput[day-1].value = "";
    printMonthlyTask(day, newToDoObj);
    saveMonthlyTask(day);
    };
}

for (i=0; i<31; i++) {
    const savedmonthlyToDos = localStorage.getItem(i+7);
    if(savedmonthlyToDos != null){
        const parsemonthlyToDos = JSON.parse(savedmonthlyToDos);  
        monthlyToDos[i] = parsemonthlyToDos;
        console.log(i);
        console.log(parsemonthlyToDos);

        
        parsemonthlyToDos.forEach((item)=> (printMonthlyTask(i+1, item), monthlyToDos[i+1].push(item)));
    }
}

///////////////////////////////////////////////////////////////////
function printDate(date, firstDay) {
    cell = row.insertCell();
    cell.id = i;
    cell.innerHTML = i + 
        `<ul class="monthly-todo-list" id="${i}"></ul>
        <form class="monthly-todo-list-form" id="${i}" onsubmit="MonthlyTaskSubmit(this.id, event)">
        <input class="monthly-todo-input" id="${year}-${month}-${i}" type="submit" value="+" style="background-color:transparent; cursor:pointer; border:0; font-size: 13pt;"/>
        <b><input class="monthly-newtodo" maxlength="30" type="text" style="font-size:11pt" placeholder="write.."/></b>
        </form></td>`;

    if(firstDay==7){
        cell.style = "color:brown";
    } else if(firstDay == 6){

        cell.style = "color:rgb(47, 47, 167)";
    }
    if(i==date){
        console.log(i);
        const style = cell.getAttribute("style") + ";";
        cell.setAttribute("style", style + "background-color:rgba(255,228,196, 0.2);" );
    }
}

function printCalender (year, month, date) {
    let lastDate = new Date(year,month+1,0).getDate();
    let firstDay = new Date(year,month,1).getDay();
    yearMonth.innerText = `${year} - ${String(month+1).padStart(2, "0")}`;
	row = monthlyTaskTable.insertRow();
	for(i=0; i<firstDay; i++){
		cell = row.insertCell();
        if(i==0){
            cell.style = "color:brown";
        }
    }
    for(i=1; i<=lastDate; i++){
        if(firstDay != 7){
            printDate(date, firstDay);
            firstDay += 1;
        } else{
            row = monthlyTaskTable.insertRow();
            printDate(date, firstDay);
            firstDay = firstDay - 6;
        }
    }
}

function removeCalendar() {
    while (monthlyTaskTable.rows.length > 2) {
        monthlyTaskTable.deleteRow(monthlyTaskTable.rows.length-1);
    }
}

previousMonBtn.addEventListener("click", function() {
    month -= 1;
    removeCalendar();
    if(month == -1){
		year -= 1;
		month = 12;
	}
    printCalender(year, month, date)
});
nextMonBtn.addEventListener("click", function() {
    month += 1;
    removeCalendar();
    if(month == 13){
		year += 1;
		month = 1;
	}
    printCalender(year, month, date)
});
