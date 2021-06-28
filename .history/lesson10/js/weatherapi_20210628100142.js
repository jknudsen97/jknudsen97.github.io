let cityid = '5604473';
let appID = '4288c843ab0418aa9169c7a83367910c';
const apiurl = `https://api.openweathermap.org/data/2.5/weather?id=${cityid}&appid=${appID}`;

fetch(apiURL)
.then((response) => response.json())
.then((jsObject) => {
    const temperature = document.querySelector('#temp');
    temperature.textContent = jsObject.main.temp.toFixed(0);
    console.log(jsObject.main.temp.toFixed(0));
    const currently = document.querySelector('#current');
    const desc = jsObject.weather[0].description;
    currently.innerHTML = `<strong>${desc.toUpperCase()}</strong>`;

    const imagesrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    document.getElementById('imagesrc').textContent = imagesrc;
    document.getElementById('icon').setAttribute('src', imagesrc);
    document.getElementById('icon').setAttribute('alt', desc.toUpperCase());
});