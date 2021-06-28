let cityID = '5604473';
let appid = '4288c843ab0418aa9169c7a83367910c';
const apiURL = `https://api.openweathermap.org/data/2.5/weather?id=${cityID}&appid=${appid}`;

fetch(apiURL)
.then((response) => response.json())
.then((jsObject) => {
    const temperature = document.querySelector('#temp');
    temperature.textContent = jsObject.main.temp.toFixed(0);
    const currently = document.querySelector('#current');
    const desc = jsObject.weather[0].description;
    currently.innerHTML = `<strong>${desc.toUpperCase()}</strong>`;

    const imagesrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    document.getElementById('imagesrc').textContent = imagesrc;
    document.getElementById('icon').setAttribute('src', imagesrc);
    document.getElementById('icon').setAttribute('alt', desc.toUpperCase());
});