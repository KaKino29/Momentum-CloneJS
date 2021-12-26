const weatherContainer = document.querySelector("#weather span:first-child");
const tempContainer = document.querySelector("#weather span:nth-child(2)")
const cityContainer = document.querySelector("#weather span:last-child");
const API_KEY = "4eda988758067f391d7935877756b458";


function onGeoOK(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            weatherContainer.innerText = `${data.weather[0].main} /`;            
            tempContainer.innerText = `${data.main.temp}°C /`
            cityContainer.innerText = `${data.name}`;
        });
}


function onGeoError() {
    alert("Cannot Find your location.");
}


navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);