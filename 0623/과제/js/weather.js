const API_KEY = "d44819fdd9056eb3de7dadbc723a583b";
const weatherContainer = document.querySelector("#weather span:first-child");

function onGeoOK(position){
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url)
  .then(response => response.json())
  .then(data => {
    
    const cityContainer = document.querySelector("#weather span:last-child");

    const name = data.name;
    const weather = data.weather[0].main;

    weatherContainer.innerText = weather + ` / ${data.main.temp}`;
    cityContainer.innerText = name;
    });

}

function onGeoError(){
  weatherContainer.innerText = "위치를 찾을 수가 없습니다.";
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);