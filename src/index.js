function dateTime() {
  let now = new Date();
  let day = now.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let dayMonth = now.getDate();
  let month = now.getMonth();
  let hour = now.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }

  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let appDate = `${days[day]}, ${dayMonth}. ${months[month]}  ${hour}:${minutes}`;
  let currentDate = document.querySelector("#current-date");
  currentDate.innerHTML = appDate;
}
dateTime();

let city = document.querySelector("#search-form");
city.addEventListener("submit", cityName);

function cityName(event) {
  event.preventDefault();
  let city = document.querySelector(".city");
  let Search = document.querySelector("#search");
  handleCity(Search.value);
}

function handleCity(city) {
  let apiKey = "372c3cd6bc38103254e2a1ce7fabe477";
  let unit = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`;
  axios.get(apiUrl).then(showTemperature);
}

function getCurrentLocation(position) {
  position.preventDefault();
  navigator.geolocation.getCurrentPosition(currentLocation);
}

function currentLocation(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "372c3cd6bc38103254e2a1ce7fabe477";
  let unit = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${unit}&appid=${apiKey}`;
  axios.get(apiUrl).then(showTemperature);
}

let currentButton = document.querySelector("#current");
currentButton.addEventListener("click", getCurrentLocation);

function showTemperature(response) {
  let CityTemperature = Math.round(response.data.main.temp);
  console.log(CityTemperature);
  let todayTemp = document.querySelector("#main-temp");
  todayTemp.innerHTML = `${CityTemperature}`;
  let city = document.querySelector("#city");
  city.innerHTML = `${response.data.name}`;
}

function showLocation(city) {
  console.log(showLocation);
  let apiKey = "4372c3cd6bc38103254e2a1ce7fabe477";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(url).then(showTemperature);
}
