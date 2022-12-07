import { weatherApp } from "./src/constants.js";
export const showError = () => {
  weatherApp.innerHTML = "";
  weatherApp.innerHTML = `<h2 id= error>Error page not found</h2>`;
};
