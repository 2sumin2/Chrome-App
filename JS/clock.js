const monthNames = ["January", "February", "March", "April", "May", "Jun", "July", "August", "September", "October", "November", "December"];
const nowTime = document.querySelector("#clock");
const nowDate = document.querySelector("#date");

function printTime() {
    const now = new Date();
    nowDate.innerText = `${monthNames[now.getMonth()+1]} ${String(now.getDate()).padStart(2, "0")}, ${now.getFullYear()}`;
    nowTime.innerText = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}:${String(now.getSeconds()).padStart(2, "0")}`;
}

printTime();
setInterval(printTime,1000);