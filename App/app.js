let searchButton = document.querySelector("#search");
// let degree = document.querySelector("#degrees");

// function citySearch() {
//   let cityName = document.querySelector("#cityInput").value;
//   return cityName;
// }

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
  document.querySelector("#degrees").innerHTML = info.main.temp;
}
