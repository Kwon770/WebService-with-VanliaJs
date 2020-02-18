const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser";
const SHOWING_CN = "showing";

function SaveName(text) {
  localStorage.setItem(USER_LS, text);
}

function HandleSubmit(event) {
  // prevent default action (input: refresh page)
  event.preventDefault();
  const currentValue = input.value;
  PaingGreeting(currentValue);
  SaveName(currentValue);
}

function AskForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", HandleSubmit);
}

function PaingGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
}

function LoadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    AskForName();
  } else {
    PaingGreeting(currentUser);
  }
}

function init() {
  LoadName();
}
init();
