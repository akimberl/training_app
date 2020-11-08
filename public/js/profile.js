const key = document.querySelector('.hiddenKey').id;
const api = {
  key, // api from https://openweathermap.org/
  baseurl: 'https://api.openweathermap.org/data/2.5/',
};

const userCity = document.querySelector('.hiddenName').id; // getting user in session city

/* function that get results and displays it if fetched worked */
function getResults(query) {
  fetch(`${api.baseurl}weather?q=${query}&units=metric&appid=${api.key}`)
    .then((weather) => weather.json()).then(displayResults);
}

function displayResults(weather) {
  /* seting city */
  const city = document.querySelector('.location .city');
  city.innerText = `${weather.name}, ${weather.sys.country}`;

  /* setting date */
  const now = new Date();
  const date = document.querySelector('.location .date');
  date.innerText = dateBuilder(now);

  /* setting temp */
  const temp = document.querySelector('.current .temp');
  temp.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>`;

  const weatherEl = document.querySelector('.current .weather');
  weatherEl.innerText = weather.weather[0].main;

  const hilow = document.querySelector('.hi-low');
  hilow.innerText = `${Math.round(weather.main.temp_min)} °C / ${Math.round(weather.main.temp_max)} °C`;
}

function dateBuilder(d) {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thirsday', 'Friday', 'Saturday'];

  const day = days[d.getDay()];
  const date = d.getDate();
  const month = months[d.getMonth()];
  const year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
}

getResults(userCity);
setInterval(getResults(userCity), 60000);
