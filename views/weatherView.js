import { weatherTem } from "./src/constants.js";
import { details } from "./src/constants.js";
export const weatherInfo = (data) => {
  weatherTem.innerHTML = "";
  weatherTem.innerHTML = String.raw`
  
  <h1 class="tem">${Math.floor(data.main.temp)}&#176;C</h1>
  
            <h2 class="name">${data.name}</h2>
            <img
              src="http://openweathermap.org/img/wn/${
                data.weather[0].icon
              }@2x.png"
              class="icon"
              width="80"
              height="80"
            />
            <span class="condition">${data.weather[0].main}</span>`;

  details.innerHTML = "";
  details.innerHTML = String.raw`
  <h4>Weather Details</h4>
  
  <li>
    <span>Cloudy</span>
    <span class="cloud">${data.clouds.all}%</span>
  </li>
  <li>
    <span>Humidity</span>
    <span class="humidity">${data.main.humidity}%</span>
  </li>
  <li>
    <span>Pressure</span>
    <span class="humidity">${data.main.pressure} mb</span>
  </li>
  <li>
    <span>Wind</span>
    <span class="wind">${Math.floor(data.wind.speed)} Km/h</span>
  </li>  
   `;
};
