const apiKey = '1554b6cdab9f5f34f7f85d2ce274101b';
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox = document.querySelector('.search input')
const searchBtn = document.querySelector('.search button')
// const cityName = searchBox.value;


async function searchWeather(cityName) {
  const response = await fetch(apiUrl + cityName + `&appid=${apiKey}`);
  
  if (response.status === 404) {
    document.querySelector('.content').innerHTML=`
    <p>City not available</p>
    `
  } else {

    const data = await response.json()
    document.querySelector('.city').innerHTML=data.name
    document.querySelector('.temp').innerHTML=Math.round(data.main.temp) + '°C'
    document.querySelector('.humidity').innerHTML=data.main.humidity + '%'
    document.querySelector('.wind').innerHTML=data.wind.speed + 'Km/h'
    const weatherType = data.weather[0].main;


    if (weatherType === 'Clouds') {
      document.querySelector('.weatherImg').src="./images/clouds.png"
    } else if (weatherType === 'Clear') {
      document.querySelector('.weatherImg').src="./images/clear.png"
    } else if (weatherType === 'Drizzle') {
      document.querySelector('.weatherImg').src="./images/drizzle.png"
    } else if (weatherType === 'Mist') {
      document.querySelector('.weatherImg').src="./images/mist.png"
    } else if (weatherType === 'Rain') {
      document.querySelector('.weatherImg').src="./images/rain.png"
    } else if (weatherType === 'Snow') {
      document.querySelector('.weatherImg').src="./images/snow.png"
    }

    document.querySelector('.content').style.display = 'block';
  }
}

searchBtn.addEventListener('click',()=>{
  const searchValue = searchBox.value;
  searchWeather(searchValue);
})
