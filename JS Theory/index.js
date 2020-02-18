const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function HandleClick() {
  const currentClass = title.className;
  if (currentClass !== CLICKED_CLASS) {
    title.className = CLICKED_CLASS;
  } else {
    // The reason why i didnt use specific class name is
    // this code can be recycled to other class what have same animation
    title.className = "";
  }
  // function what do same with over codes
  // title.classList.toggle(CLICKED_CLASS);
}

function init() {
  title.addEventListener("click", HandleClick);
}
init();
