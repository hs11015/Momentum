const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"
const VISUAL_CLASSNAME = "visual"
const USERNAME_KEY = "username"

//const link = document.querySelector("a")

function onLoginSubmit(event) {
    event.preventDefault(); //submit의 디폴트값을 다 없애줌(새로고침)
    loginForm.classList.remove(VISUAL_CLASSNAME);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    //console.log(username);
    paintGreetings(username)
}

function paintGreetings(username) {
    //greeting.innerText = "Hello my name is " + username;    //h1 작성 방법1
    greeting.innerText = `Hello my name is ${username}`;    //h1 작성 방법2
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.classList.add(VISUAL_CLASSNAME);
}

/*
function handleLinkClick(event) {
    event.preventDefault(); //링크를 클릭할 때 해당 링크로 이동하는 디폴트값 없애줌
    alert("clicked!");  //알림 창에 clicked 출력, ok누르면 계속 진행
}*/

//link.addEventListener("click", handleLinkClick);


const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
    loginForm.classList.remove(VISUAL_CLASSNAME);
    loginForm.classList.add(HIDDEN_CLASSNAME);
}

