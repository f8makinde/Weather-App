
let weather = {
    paris: {
      temp: 19.7,
      humidity: 80
    },
    tokyo: {
      temp: 17.3,
      humidity: 50
    },
    lisbon: {
      temp: 30.2,
      humidity: 20
    },
    "san francisco": {
      temp: 20.9,
      humidity: 100
    },
    oslo: {
      temp: -5,
      humidity: 20
    }
  };
function foreCast(){
    let city = prompt("Enter a city");
    let location = city.toLowerCase();
    if(weather[location] !== undefined){
        let temperature = Math.round(weather[location].temp);
        let humidity = weather[location].humidity;
        let celFah = Math.round(temperature * (9/5) + 32);
        alert(`It is currently ${temperature}℃(${celFah}℉) in ${location} with a humidity of ${humidity}`)
        }
      else if (weather !== location){
        let location = city.toLowerCase();
     alert(
      `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${location}`);
     }
}
foreCast();


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
let x = document.getElementById("date");
 let date = now.getDate();
  let allMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let month = allMonths[now.getMonth()];
  x.innerHTML = `${month} ${date}`;

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#input");
  let h2 = document.querySelector("#search-text");
  h2.innerHTML = `Searching for ${searchInput.value}`;
}
let formEl = document.querySelector("#search-form");
formEl.addEventListener("submit", search);