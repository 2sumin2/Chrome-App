const API_KEY = "4f47783b1bf7b58dde070f7fa424e665";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
        const weatherConainer = document.querySelector("#weather span");
        weatherConainer.innerText = `${data.name}  ${data.weather[0].main} / ${data.main.temp}°`; 
        });
}
function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);