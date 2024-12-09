const apiKey = '7c01bae8c3d334546e92b3379678018a';
//we will use a very common weather API to illustrate the concept.
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

async function getWeather() {
  const city = document.getElementById('city').value.trim();
  const weatherDiv = document.getElementById('weather');
  
  if (!city) {
    weatherDiv.innerHTML = 'Please enter a city.';
    return;
  }

  try {
    const response = await fetch(`${baseUrl}?q=${city}&appid=${apiKey}&units=metric`);
    if (!response.ok) throw new Error('City not found');
    
    const data = await response.json();
    const { name, main, weather } = data;
    //we use here the properties of the API to display humidity and temperature data 
    weatherDiv.innerHTML = `
      <p><strong>${name}</strong></p>
      <p>Temperature: ${main.temp}°C</p>
      <p>Weather: ${weather[0].description}</p>
      <p>Humidity: ${main.humidity}%</p>
    `;
  } catch (error) {
    weatherDiv.innerHTML = `Error: ${error.message}`;
  }
}
