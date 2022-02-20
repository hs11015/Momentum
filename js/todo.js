const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
let toDos = [];     // 새로고침했을 때 이전 값도 포함하는 toDos에 하나씩 추가하기 위함

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    // toDos array 자체를 하나의 string으로 만들어서 todos라는 데이터에 입력
    // 만약 JSON.stringify을 제거하면 array는 하나의 데이터 값으로 입력될 수 없기 떄문에 array 안에 있는 요소들을 모두 하나의 string으로 취급함
    // 예를 들어 toDos=['a','b','c']일 때, 대괄호 안에 있는 "a,b,c" 를 하나의 string으로 취급
}

function deleteToDo(event) {
    const div = event.target.parentElement;
    // event target은 클린된 HTML element. 그 중에 클릭된 element의 부모 element를 알고싶음
    
    div.remove();    // 클릭된 버튼이 있는 div를 없애는 알고리즘
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(div.id));
    saveToDos();
}

function paintToDo(newToDoObject) {
    const div = document.createElement("div");
    const span = document.createElement("span");
    // 나중에 todo를 완수하면 삭제하는 버튼을 만들어야하기 때문에 div와 span 두 개 생성
    const checkbox = document.createElement("checkbox");
    // <span> 안에 들어갈 checkbox 만들기
    
    div.appendChild(checkbox); // div 안, span 윗 줄에 checkbox 추가
    checkbox.innerText = "❌";
    checkbox.addEventListener("click", deleteToDo)

    div.appendChild(span);   // <div> <span></span> </div>
    span.innerText = newToDoObject.text;   // <div> <span>newToDo</span> </div>
    // newToDoObject는 2가지 값(text, id)을 갖고 있는데 그 중 text가 span.innerText 값이 되어야함
    div.id = newToDoObject.id;
    // newToDoObject의 2가지 값 중 id를 div tag의 id로 만들어줄 것임 <div id="Date.now()"> 형태
    toDoList.appendChild(div);
    // <form id="todo-form"> <div> <span>newToDo</span> </div> </form>

    div.style.color = "black"
    div.style.backgroundColor = "rgba(255, 255, 255, 0.6)"
}

function handleToDoSubmit(event) {
    event.preventDefault(); // input의 고유값, submit 하면 새로고침 되는 걸 막음

    const newToDo = toDoInput.value;    // 사용자가 입력한 todo 저장
    toDoInput.value = "";   // newToDo에 저장해놨으니 input 칸은 비워주기
    
    const newToDoObject = { // newToDo들을 id(입력한 시간)와 함께 저장하기 위함
        id: Date.now(),
        text: newToDo,
    };

    toDos.push(newToDoObject);    // newToDoObject에 저장된 값을 toDos array에 넣기
    // console.log(toDos); 를 하면 ['newToDo', ...] 형태로 나옴
    paintToDo(newToDoObject);     // newToDoObject(array 형태)를 화면에 나타내기

    saveToDos();    // toDos array에 들어간 값을 저장하기 (덮어씌움)
}

toDoForm.addEventListener("submit", handleToDoSubmit)

/*
function sayHello(item) {
    console.log("this is the turn of", item);
    // console.log에 item 값과 함께 차레로 출력됨
}
*/

const savedToDos = localStorage.getItem(TODOS_KEY); // 브라우저에 저장된 ToDos

if (savedToDos !== null) {   // 만약 savedToDos가 있다면
    const parseToDos = JSON.parse(savedToDos);  // string으로 저장된 것을 array로 바꾸기
    // parseToDos.forEach(sayHello);   // 지정한 array에 있는 item마다 (function) 을 각각 실행해주는 함수
    /*
    parseToDos.forEach((item) => console.log("this is the turn of", item)); // 함수 없이 item 이용하는 법
    // => (arrow function) 을 이용해 function 정의 없이 짧게 쓰기 가능
    */
    parseToDos.forEach(paintToDo); // paintToDo는 ToDos에 들어가있는 item들 하나 하나의 값임
}
