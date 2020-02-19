const COORDS = "coords";

function saveCoords(coordsObj) {
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
  saveCoords(coordsObj);
}

function HandleGeoError() {
  console.log("Can't access geo location");
}

function AskForCoords() {
  navigator.geolocation.getCurrentPosition(HandleGeoSuccess, HandleGeoError);
}

function LoadCoords() {
  const loadedCords = localStorage.getItem(COORDS);
  if (loadedCords === null) {
    AskForCoords();
  } else {
    //
  }
}

function init() {
  LoadCoords();
}
init();
