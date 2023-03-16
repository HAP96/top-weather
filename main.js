// b063de98f432135a9d33ed7a5d25fa86
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

async function getWeather() {
  let city = document.getElementById('city').value;
  let APIKey = 'b063de98f432135a9d33ed7a5d25fa86';
  let units = 'imperial';

  const weather = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${APIKey}`
  );
  const data = await weather.json();

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
}

const btn = document.getElementById('btn');
btn.onclick = getWeather;
