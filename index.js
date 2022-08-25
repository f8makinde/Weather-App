
function formatDate(now) {
  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let dayIndex = now.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = days[dayIndex];

  return `${day} ${hours}:${minutes}`;
}

let dateEl = document.querySelector("#now");
let now = new Date();
dateEl.innerHTML = formatDate(now);

// let all = new Date();
let currentDate = document.getElementById("date");
 let date = now.getDate();
  let allMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let month = allMonths[now.getMonth()];
  currentDate.innerHTML = `${month} ${date}`;




function showTemp(response){
  console.log(response)
  let descriptionEl= document.getElementById("des");
  let iconEl = document.getElementById("icon");
  iconEl.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconEl.setAttribute("alt", response.data.weather[0].description);
  descriptionEl.innerHTML = response.data.weather[0].description;
  document.querySelector("#myTemp").innerHTML = Math.round(response.data.main.temp);
  celsuisTemp = Math.round(response.data.main.temp);
  let windEl = document.getElementById("wind-el");
  windEl.innerHTML = `Wind: ${Math.round(response.data.wind.speed)}km/h`;
  let humidityEl = document.getElementById("humidity-el");
  humidityEl.innerHTML = `Humidity: ${response.data.main.humidity}%`
  let city = response.data.name;
  let cityEl = document.getElementById("city");
  cityEl.innerHTML = `${city}`;
}

function searchCity(city) {
  let apiKey = "c66949765e3b0e53a28c1770749ecb89";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemp);
}

function search(event) {
  event.preventDefault();
  let showCity = document.querySelector("#input").value;
  searchCity(showCity);
}



function displayFahrenheitTemp(event){
  event.preventDefault();
  let temperatureEl = document.getElementById("myTemp");
  celsuisLink.classList.remove("active")
  fahrenheitLink.classList.add("active")
  let fahrenheitTemp = (celsuisTemp * 9/5) + 32;
  temperatureEl.innerHTML = Math.round(fahrenheitTemp);
  
  }
  let celsuisTemp = null;



  function displayCelsuisTemp(){
    event.preventDefault();
    celsuisLink.classList.add("active")
    fahrenheitLink.classList.remove("active")
    let temperatureEl = document.getElementById("myTemp");
    temperatureEl.innerHTML = celsuisTemp;
  }


  let fahrenheitLink = document.getElementById("fahrenheit-link");
  fahrenheitLink.addEventListener("click", displayFahrenheitTemp);

 let celsuisLink = document.getElementById("celsius-link");
 celsuisLink.addEventListener("click", displayCelsuisTemp);

let formEl = document.querySelector("#search-form");
formEl.addEventListener("submit", search);



function showPosition(position){
  console.log(position)
  let lat = position.coords.latitude;
  let lon =  position.coords.longitude;
  let apiKey = "c66949765e3b0e53a28c1770749ecb89";
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

  axios.get(`${url}`).then(showTemp);
}



function currentLoc(){
  navigator.geolocation.getCurrentPosition(showPosition)
}




