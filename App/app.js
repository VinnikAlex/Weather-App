let searchButton = document.querySelector("#search");
let minTemp = document.querySelector("#min-temp");
let maxTemp = document.querySelector("#max-temp");

searchButton.addEventListener("click", () => {
  userSearch = document.querySelector("#cityInput");
  if (userSearch.value != "") {
    requestApi(userSearch.value);
  }
});

function requestApi(city) {
  let lang = "en";
  let units = "metric";
  let key = "adf44f9fcb4c64e2afb0feb4875d4291";
  let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${key}`;
  fetch(api)
    .then((response) => response.json())
    .then((result) => weatherDetails(result));
}

function weatherDetails(info) {
  console.log(info);
  // update degree value
  document.querySelector("#degrees").innerHTML = info.main.temp + "°";
  // update min-degree value
  document.querySelector("#min-temp").innerHTML = info.main.temp_min + "°";
  // update max-degree value
  document.querySelector("#max-temp").innerHTML = info.main.temp_max + "°";
  // disply city-name
  document.querySelector("#city-name").innerHTML = info.name;
  //update feels-like temperature
  document.querySelector("#feels-like").innerHTML = info.main.feels_like + "°";
  // update humidity
  document.querySelector("#humidity").innerHTML = info.main.humidity + "%";
  // update wind speed
  document.querySelector("#wind-speed").innerHTML = info.wind.speed + "km/h";
  // update pressure
  document.querySelector("#pressure").innerHTML = info.main.pressure + "hPa";

  pickWeatherIcon(info);
}

function pickWeatherIcon(info) {
  if (info.weather[0].main == "Clear") {
    document.querySelector("#svg-sun").style.display = "inline-block";
  } else {
    document.querySelector("#svg-sun").style.display = "none";
  }

  if (info.weather[0].main == "Rain") {
    document.querySelector("#svg-rain").style.display = "inline-block";
  } else {
    document.querySelector("#svg-rain").style.display = "none";
  }

  if (info.weather[0].main == "Clouds") {
    document.querySelector("#svg-cloud").style.display = "inline-block";
  } else {
    document.querySelector("#svg-cloud").style.display = "none";
  }

  if (info.weather[0].main == "Extreme") {
    document.querySelector("#svg-storm").style.display = "inline-block";
  } else {
    document.querySelector("#svg-storm").style.display = "none";
  }

  if (info.weather[0].main == "Snow") {
    document.querySelector("#svg-snow").style.display = "inline-block";
  } else {
    document.querySelector("#svg-snow").style.display = "none";
  }
}
