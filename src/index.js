function citySearch(event) {
  event.preventDefault();
  let searchedCity = document.querySelector("#city-input");
  let searchedCityName = searchedCity.value;
  let apiKey = "b400ae3b711a616262d18b0ca2cbe78f";
  let apiUrlCity = `https://api.openweathermap.org/data/2.5/weather?q=${searchedCityName}&appid=${apiKey}&units=metric`;
  axios.get(apiUrlCity).then(dataUpdate);
}
function dataUpdate(response, position) {
  let currentTemp = document.querySelector("#current-temp");
  let weatherDescription = document.querySelector("#weather-description");
  let clouds = document.querySelector("#clouds");
  let windSpeed = document.querySelector("#wind-speed");
  let mainCity = document.querySelector("#main-city");
  let temperature = Math.round(response.data.main.temp);
  mainCity.innerHTML = response.data.name;
  currentTemp.innerHTML = `${temperature}`;
  weatherDescription.innerHTML = response.data.weather[0].description;
  clouds.innerHTML = response.data.clouds.all;
  windSpeed.innerHTML = response.data.wind.speed;
}
function currentLocation(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "b400ae3b711a616262d18b0ca2cbe78f";
  let apiUrlCurrentPosition = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrlCurrentPosition).then(dataUpdate);
}
function currentLocationButton() {
  navigator.geolocation.getCurrentPosition(currentLocation);
}
function celciusChange() {}
function fahrenheitChange() {}

navigator.geolocation.getCurrentPosition(currentLocation);

let now = new Date();
let hour = now.getHours();
let minutes = (now.getMinutes() < 10 ? "0" : "") + now.getMinutes();
let day = now.getDate();
let month = now.getMonth() + 1;
let year = now.getFullYear();
let currentDate = document.querySelector("#current-date");
currentDate.innerHTML = `${hour}:${minutes} ${day}/${month}/${year}`;

let weatherSearch = document.querySelector("#city-search");
weatherSearch.addEventListener("submit", citySearch);
let currentCityButton = document.querySelector("#current-location-button");
currentCityButton.addEventListener("click", currentLocationButton);

let celciusButton = document.querySelector("#celcius");
let fahrenheitButton = document.querySelector("#fahrenheit");
celciusButton.addEventListener("click", celciusChange);
fahrenheitButton.addEventListener("click", fahrenheitChange);
