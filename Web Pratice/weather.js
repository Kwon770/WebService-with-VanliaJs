const API_KEY = "062aa5e38df65a32830c83c7940b0e0f";
const COORDS = "coords";

const weather = document.querySelector(".js-weather");

function GetWeather(lat, lon) {
  // fetch(``) : 데이터를 가져옴.  ('')(따옴표아닌) (``)(backtick 사용)
  // https:// 붙여야함
  // Api 요청에 파라미터 추가는 & 를 이용
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  )
    .then(function(response) {
      // then() 앞의 함수가 완전히 이행된 후 전달 받은 함수를 실행
      // fetch() 는 네트워크를 통하 험수이므로, then() 없이 코딩할시 fetch가 완전히 이루어지기 전에 코드가 진행

      return response.json();
    })
    .then(function(json) {
      // then() 함수는 계속 연장될 수 있음. .then(~).then(~);

      const temperature = json.main.temp;
      const place = json.name;
      weather.innerHTML = `${temperature} @ ${place}`;
    });
}

function SaveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function HandleGeoSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    // latitude = latitude
    // longitude = longtitude     생략하기
    latitude,
    longitude
  };
  SaveCoords(coordsObj);
}

function HandleGeoError() {
  console.log("Can't access geo location");
}

function AskForCoords() {
  navigator.geolocation.getCurrentPosition(HandleGeoSuccess, HandleGeoError);
}

function LoadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    AskForCoords();
  } else {
    const parseCoords = JSON.parse(loadedCoords);
    GetWeather(parseCoords.latitude, parseCoords.longitude);
  }
}

function init() {
  LoadCoords();
}
init();
