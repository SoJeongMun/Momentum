const API_KEY = 'e610ffdd53ce289061d964074cf3c62b'; 

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url).then(res => res.json()).then(data => {
        const weather = document.querySelector('.weather-wrap p:first-child');
        const city = document.querySelector('.weather-wrap p:last-child');
        weather.innerText = data.weather[0].main;
        city.innerText = data.name;
    });
};
function onGeoErr(){
    alert('error!')
};

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);