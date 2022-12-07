export const detailsInfo = (data) => {
  const weatherApp = document.querySelector(".weather-app");
  const info = document.createElement("div");
  const weatherTem = document.querySelector(".weather");
  const allInfo = document.createElement("div");
  console.log(weatherApp);
  info.className = "infoCard";
  weatherApp.innerHTML = "";
  allInfo.innerHTML = String.raw`
  <ul>
  <li>
    <span>Feels_like</span>
    <span class="cloud">${data.main.feels_like}&#176;C</span>
  </li>
  <li>
    <span>Temp_min</span>
    <span class="humidity">${data.main.temp_min}&#176;C</span>
  </li>
  <li>
    <span>Temp_max</span>
    <span class="humidity">${data.main.temp_max} &#176;C</span>
  </li>
  <li>
    <span>Visibility
    </span>
    <span class="wind">${Math.floor(data.visibility / 1000)} Km</span>
  </li> 
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

</ul>`;

  info.appendChild(weatherTem);
  info.appendChild(allInfo);

  weatherApp.appendChild(info);
  console.log(weatherApp);
};
