const monthlyTaskTable = document.querySelector(".monthlytask");
const yearMonth = monthlyTaskTable.querySelector("#year-month");
const previousMonBtn = monthlyTaskTable.querySelector("#premonth");
const nextMonBtn = monthlyTaskTable.querySelector("#nextmonth");


const today = new Date();
let year = today.getFullYear();
let month = today.getMonth();
let date = today.getDate();

function printDate(date, firstDay) {
    cell = row.insertCell();
    cell.setAttribute('id', i);
    cell.innerHTML = i;
    if(firstDay==7){
        cell.setAttribute("style", "color:brown");
    } else if(firstDay == 6){
        cell.setAttribute("style", "color:rgb(47, 47, 167)");
    }
    if(i==date){
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
            cell.setAttribute("style", "color:brown");
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

printCalender(year, month, date);
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
        



