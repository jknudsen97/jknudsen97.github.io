let cityid = '5607916';
let appID = '4288c843ab0418aa9169c7a83367910c';
const apiurl = `https://api.openweathermap.org/data/2.5/weather?id=${cityid}&appid=${appID}&units=imperial`;

fetch(apiurl)
.then((response) => response.json())
.then((jsObject) => {
    const temp = document.querySelector('#temp');
    temp.textContent = jsObject.main.temp.toFixed(0);
    console.log(jsObject.main.temp.toFixed(0));
    const high = document.querySelector('#high');
    high.textContent = jsObject.main.temp_max.toFixed(0);
    const humidity = document.querySelector('#humidity');
    humidity.textContent = jsObject.main.humidity.toFixed(0);
    const speed = document.querySelector('#speed');
    speed.textContent = jsObject.wind.speed.toFixed(0);
    const desc = jsObject.weather[0].description;
    currently.innerHTML = desc;
    console.log(desc);

    const imagesrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    document.getElementById('imagesrc').textContent = imagesrc;
    document.getElementById('icon').setAttribute('src', imagesrc);
    document.getElementById('icon').setAttribute('alt', desc.toUpperCase());
});

function windChill(temp, speed)
{
    let wChill = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp) * (Math.pow(speed, 0.16));
    return Math.round(wChill);
}

if (temp <= 50 && speed >= 3)
{
    let wc = windChill(temp, speed);
    document.querySelector('#WC').textContent = wc;
}

else
{
    let wc = "N/A";
    document.querySelector("#WC").textContent = wc;
}