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

function showDday(name, date) {
    ddayTitleLabel.innerText = name;
    ddayDateLabel.innerText = date;
    countDate(date);
}

function countDate(day) {
    const newday = new Date(day);
    const today = new Date();
    let count = Math.round((today.getTime()-newday.getTime()) / 1000/60/60/24);
    if (count==0) {
        count = " - day";
        ddayCountLabel.style.color = "rgb(253, 43, 78)";
    } else if (count>0) {
        count = " + "+count;
    } else {
        count = " - "+Math.abs(count);
    }
    ddayCountLabel.innerText = `D${count}`;
}

function ddayRemove() {
    ddayLabel.classList.remove("hidden");
    ddayAddForm.classList.add("hidden");
    ddayCountBox.classList.add("hidden");
    ddayAddBtn.classList.remove("hidden");
    ddaySetName.value ="";
    ddaySetDate.value ="";
    localStorage.removeItem("dday");
}

function ddaySave(list){
    localStorage.setItem("dday", list);
}

function ddaySubmit(event) {
    event.preventDefault();
    ddayLabel.classList.add("hidden");
    ddayAddForm.classList.add("hidden");
    ddayCountBox.classList.remove("hidden");
    showDday(ddaySetName.value, ddaySetDate.value);
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
    ddayLabel.classList.remove("hidden");
    ddayAddForm.classList.add("hidden");
    ddayCountBox.classList.add("hidden");
    ddayAddBtn.classList.remove("hidden");
} else{
    const data = localStorage.getItem("dday").split(",");
    const name = data[0];
    const date = data[1];
    showDday(name, date);
    ddayLabel.classList.add("hidden");
    ddayAddForm.classList.add("hidden");
    ddayCountBox.classList.remove("hidden");
    ddayAddBtn.classList.add("hidden");
}
