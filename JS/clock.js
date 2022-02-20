const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const nowTime = document.querySelector("#clock");
const nowDate = document.querySelector("#date");

function printTime() {
    const now = new Date();
    nowDate.innerText = `${monthNames[now.getMonth()]} ${String(now.getDate()).padStart(2, "0")}, ${now.getFullYear()}`;
    nowTime.innerText = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}:${String(now.getSeconds()).padStart(2, "0")}`;
}

printTime();
setInterval(printTime,1000);