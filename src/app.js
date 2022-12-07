import { detailsInfo } from "../views/detailsView.js";
import { weatherInfo } from "../views/weatherView.js";
import { background } from "./background.js";

import { timeEl } from "./constants.js";
import { dateEl } from "./constants.js";
import { showError } from "../views/errorView.js";

setInterval(() => {
  const time = new Date();
  const hour = time.getHours();
  const newHour = hour < 10 ? `0${hour}` : hour;

  const minutes = time.getMinutes();
  const newMint = minutes < 10 ? `0${minutes}` : minutes;

  const amPm = hour >= 12 ? "PM" : "AM";

  timeEl.innerHTML = `${newHour}:${newMint} <span> ${amPm}</span>`;
}, 1000);
const date = new Date().toDateString("en-us");
dateEl.innerHTML = `${date}`;

let dataFromLocation = "";
function weatherByLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async function success(position) {
      try {
        const long = position.coords.longitude;
        const lat = position.coords.latitude;

        const apiKey = `c0e2e2feabad92a23b2f2878ff9a9856`;
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;
        const response = await fetch(url);
        const myData = await response.json();

        background(myData.name);
        weatherInfo(myData);
        console.log(myData);

        dataFromLocation = myData;
      } catch (error) {
        showError(error);
      }
    });
  }
}

async function weatherByCity(city) {
  try {
    const apiKey = `c0e2e2feabad92a23b2f2878ff9a9856`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Enter  a valid city name ");
    }
    const myData = await response.json();

    weatherInfo(myData);
    background(city);
    console.log(myData);
    return myData;
  } catch (error) {
    showError(error);
  }
}

async function main() {
  const input = document.querySelector(".search");
  const submit = document.querySelector(".submit");

  const info = document.querySelector(".infoClick");
  input.addEventListener("keyup", (e) => {
    if (input.value !== "" && e.key == "Enter") {
      weatherByCity(input.value);
    }
  });
  submit.addEventListener("click", () => {
    weatherByCity(input.value);
  });
  info.addEventListener("click", async () => {
    if (input.value !== "") {
      const data = await weatherByCity(input.value);

      detailsInfo(data);
    } else {
      setTimeout(() => {
        detailsInfo(dataFromLocation);
      }, 500);
    }
  });
  window.addEventListener("load", () => {
    weatherByLocation();
  });
}
main();
