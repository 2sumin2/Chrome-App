const toDoList = document.querySelectorAll(".todo-list");
const toDoForm = document.querySelectorAll(".todo-list-form");
const toDoInput = document.querySelectorAll('.todo-list-form input[type="text"]');

const toDos = [[],[],[],[],[],[],[]];
function saveToDo (day) {
    localStorage.setItem(day, JSON.stringify(toDos[day]));
}

function deleteToDo (event) {
    const li = event.target.parentElement;
    const day = li.parentElement.id;
    toDos[day] = toDos[day].filter((toDo) => toDo.id !== parseInt(li.id));
    li.remove();
    saveToDo(day);
}

function printToDo(day, newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    const btn = document.createElement("button");
    span.innerText = newToDo.text;
    btn.innerText = " ⊘";
    btn.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(btn);
    toDoList[day].appendChild(li);
}

function toDoSubmit(event, day) {
    event.preventDefault();
    const newToDo = toDoInput[day].value;
    const newToDoObj = {
        text:newToDo,
        id: Date.now()
    }
    toDos[day].push(newToDoObj);
    toDoInput[day].value = "";
    printToDo(day, newToDoObj);
    saveToDo(day);
}

for (i=0; i<7; i++) {
    const savedToDos = localStorage.getItem(i);
    if(savedToDos != null){
        const parseToDos = JSON.parse(savedToDos);  
        toDos[i] = parseToDos;     
        parseToDos.forEach((item)=> printToDo(i, item));
    }
}


