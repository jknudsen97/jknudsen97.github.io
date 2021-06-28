let cityID = 5604473;
let appid = '4288c843ab0418aa9169c7a83367910c';
const apiURL = `https://api.openweathermap.org/data/2.5/forecast?id=${cityID}&appid=${appid}`;

fetch(apiURL)
.then((response) => response.json())
.then((jsObject) => {
    console.log(jsObject);

    let day = 0;
    const dayofWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const fiveDayForecast = jsObject.list.filter(forcast => forcast.dt_txt.includes('12:00:00'));
    console.log(fiveDayForecast);

    fiveDayForecast.forEach(x => {
        let d = new Date(d.dt_txt);
        document.getElementById(`dayofweek${day + 1}`).textContent = dayofWeek[d.getDay()];
        document.getElementById(`forecast${day + 1}`).textContent = x.main.temp;
        day++
    })
})