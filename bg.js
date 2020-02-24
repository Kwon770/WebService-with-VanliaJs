const body = document.querySelector("body");

const IMG_NUMBER = 3;

function PaintImage(imgNumber) {
  const image = new Image();
  image.src = `./images/${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");
  // append : 뒤쪽에
  // prepand : 앞쪽에 삽임 (렌더링 순서때문에 prepend 사용 with z-index)
  body.prepend(image);
}

function GenRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = GenRandom();
  PaintImage(randomNumber);
}
init();
