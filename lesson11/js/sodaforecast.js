let cityID = '5607916';
let appid = '4288c843ab0418aa9169c7a83367910c';
const apiURL = `https://api.openweathermap.org/data/2.5/forecast?id=${cityID}&appid=${appid}&units=imperial`;

fetch(apiURL)
.then((response) => response.json())
.then((jsObject) => {
    console.log(jsObject);

    let day = 0;
    const dayofWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    console.log(new Date(d.dt_txt));

    const fiveDayForecast = jsObject.list.filter(forcast => forcast.dt_txt.includes('12:00:00'));
    console.log(fiveDayForecast);

    fiveDayForecast.forEach(x => {
        console.log(x.main.temp);
        console.log(dayofWeek[day + 1]);
        let d = x.dt_txt;
        console.log(d);
        document.getElementById(`dayofweek${day + 1}`).textContent = dayofWeek[day + 1];
        document.getElementById(`forecast${day + 1}`).textContent = Math.round(x.main.temp);
        day++
    })
})