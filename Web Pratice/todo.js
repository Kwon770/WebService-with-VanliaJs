// 아래와 같이 작성할경우, clock.js 의 상수(cost)와 충돌함
// 충돌을 피하면서 아래와 같이 짤려면 독립적인 모듈을 짜야함
// const form = document.querySelector(".js-toDoForm");
// const toDoInput = form.querySelector("input");
const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerHTML = "❌";
  const span = document.createElement("span");
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  toDoList.appendChild(li);
}

function HandleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function LoadToDos() {
  const toDos = localStorage.getItem(TODOS_LS);
  if (toDos !== null) {
  }
}

function init() {
  LoadToDos();
  toDoForm.addEventListener("submit", HandleSubmit);
}
init();
