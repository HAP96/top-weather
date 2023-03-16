// b063de98f432135a9d33ed7a5d25fa86
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
const weatherBox = document.querySelector('.weather-box');
const details = document.querySelector('.details');
const container = document.getElementById('container');
const error = document.querySelector('.error');

async function getWeather() {
  let city = document.getElementById('city').value;
  let APIKey = 'b063de98f432135a9d33ed7a5d25fa86';
  let units = 'imperial';

  const weather = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${APIKey}`
  );
  const data = await weather.json();
  error.style.display = 'none';
  error.classList.remove('fadein');
  if (data.main === undefined) {
    container.style.height = '400px';
    weatherBox.style.display = 'none';
    details.style.display = 'none';
    error.style.display = 'flex';
    error.classList.add('fadein');
  }

  const temp = document.querySelector('.temperature');
  temp.textContent = `${data.main.temp.toFixed()}°F`;

  const description = document.querySelector('.description');
  description.textContent = data.weather[0].description;

  const humidity = document.querySelector('.humidity-value');
  humidity.textContent = data.main.humidity;

  const wind = document.querySelector('.wind-value');
  wind.textContent = `${data.wind.speed.toFixed()} mph`;

  const img = document.getElementById('weather-img');
  const main = data.weather[0].main;
  if (main === 'Thunderstorm' || main === 'Drizzle' || main === 'Rain') {
    img.src = 'images/rain.png';
  } else if (main === 'Snow') {
    img.src = 'images/snow.png';
  } else if (main === 'Clear') {
    img.src = 'images/clear.png';
  } else if (main === 'Clouds') {
    img.src = 'images/cloud.png';
  } else {
    img.src = 'images/mist.png';
  }

  weatherBox.style.display = '';
  details.style.display = '';
  weatherBox.classList.add('fadein');
  details.classList.add('fadein');
  container.style.height = '600px';
}

const btn = document.getElementById('btn');
btn.onclick = getWeather;
