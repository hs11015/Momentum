const clock = document.querySelector("h1#clock");
const today = document.querySelector("h2#date");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

function getToday() {
    const date = new Date();
    const year = String(date.getFullYear());
    const month = String(date.getMonth()+1).padStart(2,"0");
    const dates = String(date.getDate()).padStart(2,"0");
    
    const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const day = week[date.getDay()];

    today.innerText = `${year}/${month}/${dates} ${day}`;
}

getClock(); // 새로고침 하자마자 바로 clock을 보여주기 위함
getToday();
setInterval(getClock, 1000); // 새로고침 이후 1초마다 clock update
setInterval(getToday, 1000);