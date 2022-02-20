const backgroundColorList = ["#ff9a9e 0%, #fad0c4 99%, #fad0c4 100%", "#d5dee7 0%, #ffafbd 0%, #c9ffbf 100%", "#fff1eb 0%, #ace0f9 100%" , "#96fbc4 0%, #f9f586 100%" , "#a18cd1 0%, #fbc2eb 100%", "#fad0c4 0%, #ffd1ff 100%", "#fbc2eb 0%, #a6c1ee 100%", "#e0c3fc 0%, #8ec5fc 100%", "#a8edea 0%, #fed6e3 100%", "#fddb92 0%, #d1fdff 100%"];
const colorBtn = document.querySelector("#color");
const colorListDiv = document.querySelector(".colorList");
const colorBtnInList = document.querySelectorAll(".changeColor");

document.body.style.background = `linear-gradient(45deg, ${backgroundColorList[0]})`;
for (i=0; i<colorBtnInList.length; i++){
    colorBtnInList[i].style.background = `linear-gradient(45deg, ${backgroundColorList[i]})`;
}

colorBtn.addEventListener("click", function() {
    colorListDiv.classList.toggle("hidden");
});

function changeBackgroundColor(index) {
    document.body.style.background = `linear-gradient(45deg, ${backgroundColorList[index]})`;
}
