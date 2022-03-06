const API_KEY = "4f47783b1bf7b58dde070f7fa424e665";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
        const temperature = document.querySelector(".weatherbox #tem");
        const location = document.querySelector(".weatherbox #loc");
        const iconId = data.weather[0].icon;
        const iconURL = "https://openweathermap.org/img/w/" + iconId + ".png";
        document.querySelector("#weatherIcon").src = iconURL;
        temperature.innerText = `${data.main.temp}°`; 
        location.innerText = `${data.name}, ${(data.sys.country).toLowerCase()}`; 
        });
    
}
function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);