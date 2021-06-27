let cityID = 5604473
let appid = '4288c843ab0418aa9169c7a83367910c';
const apiURL = `https://api.openweathermap.org/data/2.5/forecast?id=${cityID}&appid=${appid}`;

fetch(apiURL)
.then((response) => response.json())
.then((jsObject) => {
    console.log(jsObject);
    const fiveDayForecast = jsObject.list.filter(forcast => forcast.dt_txt.includes('12:00:00'));
    console.log(fiveDayForecast);
})