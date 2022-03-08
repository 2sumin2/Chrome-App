const ddayBox = document.querySelector(".ddaybox");
const ddayLabel = ddayBox.querySelector("#dday");
const ddayAddBtn = ddayBox.querySelector("#dday-add");
const ddayAddForm = ddayBox.querySelector("form");
const ddaySetName = ddayAddForm.querySelector("input[type='text']");
const ddaySetDate = ddayAddForm.querySelector('input[type="date"]');
const ddayCountBox = ddayBox.querySelector("div");
const ddayTitleLabel = ddayBox.querySelector("#dday-name");
const ddayCountLabel = ddayBox.querySelector("#dday-remaining");
const ddayDateLabel = ddayBox.querySelector("#dday-date");
const ddayDeleteBtn = ddayBox.querySelector("#dday-delete");

function toggleElement() {
    ddayLabel.classList.toggle("hidden");
    ddayAddForm.classList.toggle("hidden");
    ddayCountBox.classList.toggle("hidden");
    ddayAddBtn.classList.toggle("hidden");
}

function showDday(name, date) {
    ddayTitleLabel.innerText = name;
    ddayDateLabel.innerText = date;
    countDate(date);
}

function countDate(day) {
    const newday = new Date(day);
    const today = new Date();
    let count = Math.floor((today.getTime()-newday.getTime()) / 1000/60/60/24);
    if (count==0) {
        count = " - day";
        ddayCountLabel.style.color = "rgb(253, 43, 78)";
    } else if (count<0) {
        count = " - "+Math.abs(count);
    } else {
        count = " + "+count;
    }
    ddayCountLabel.innerText = `D${count}`;
}

function ddayRemove() {
    toggleElement();
    ddayAddForm.classList.toggle("hidden");
    ddaySetName.value ="";
    ddaySetDate.value ="";
    localStorage.removeItem("dday");
}

function ddaySave(list){
    localStorage.setItem("dday", list);
}

function ddaySubmit(event) {
    event.preventDefault();
    toggleElement();
    showDday(ddaySetName.value, ddaySetDate.value);
    ddayAddBtn.classList.toggle("hidden");
    const ddayList = [ddayTitleLabel.innerText, ddayDateLabel.innerText];
    ddaySave(ddayList);
}

ddayAddBtn.addEventListener("click", function() {
    ddayAddForm.classList.remove("hidden");
    ddayAddBtn.classList.add("hidden");
});
ddayAddForm.addEventListener("submit", ddaySubmit);
ddayDeleteBtn.addEventListener("click", ddayRemove);

if(localStorage.getItem("dday")==null){
    toggleElement();
} else{
    const data = localStorage.getItem("dday").split(",");
    const name = data[0];
    const date = data[1];
    showDday(name, date);
    //toggleElement();
    ddayAddForm.classList.toggle("hidden");
}
