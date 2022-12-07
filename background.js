export const background = async (cityName) => {
  const apiKy = `ASx8Vd2ZTLBzo9dDtTrt0_Fn8X5sdyupAC0B31SJxRU`;
  const url = `https://api.unsplash.com/search/photos?client_id=${apiKy}&query=${cityName}`;
  const response = await fetch(url);
  const myData = await response.json();

  const app = document.querySelector(".weather-app");
  app.style.backgroundImage = `url(${myData.results[0].urls.regular})`;
};
