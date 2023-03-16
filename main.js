// b063de98f432135a9d33ed7a5d25fa86
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

let city = 'Phoenix';
let APIKey = 'b063de98f432135a9d33ed7a5d25fa86';

async function getWeather() {
  const weather = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${APIKey}`
  );
  const data = await weather.json();
  console.log(data);
}

getWeather();

const pic = document.getElementById('weather-img');
pic.src = 'images/clear.png';
