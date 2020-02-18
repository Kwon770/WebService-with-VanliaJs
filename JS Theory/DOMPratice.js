// DOM : Document Object Module
const title = document.getElementById("title");
// const title = document.querySelector("#title");
// title.innerHTML = "No works!";
// title.style.color = "red";

document.title = "I'm here";

// Event
// style.color 의 return 값은 rgb 이므로, 비교 대상은 rgb로
const BASE_COLOR = "rgb(85, 239, 196)";
const OTHER_COLOR = "#d63031";

function HandleClick() {
  const currentColor = title.style.color;
  // '10' == 10 , '10' === 10
  if (currentColor === BASE_COLOR) {
    title.style.color = OTHER_COLOR;
  } else {
    title.style.color = BASE_COLOR;
  }
}

function init() {
  title.style.color = BASE_COLOR;
  title.addEventListener("click", HandleClick);
}
init();

function HandleResize(event) {
  // event : Js 가 제공하는 event 인자
  console.log(event);
}

window.addEventListener("resize", HandleResize);
// 아래와 같이 쓰면 함수를 전달하는게 아닌 호출
// window.addEventListener("resize", HandleResize());
