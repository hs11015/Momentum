const API_KEY = "ce62c9177b4175d05c22cd7755f2bb73"

function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)  // url 부르기(.then 안 쓰면 시간이 조금 소요됨) 브라우저 network에서 확인 가능
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = `Your Location : ${data.name}`;
            weather.innerText = `Weather : ${data.weather[0].main} / Temperature : ${data.main.temp}℃`;
            weather.className = "weather";
            city.className = "location";
        });

    
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);