let cityid = '5604473';
let appID = '4288c843ab0418aa9169c7a83367910c';
const apiurl = `https://api.openweathermap.org/data/2.5/weather?id=${cityid}&appid=${appID}&units=imperial`;

fetch(apiurl)
.then((response) => response.json())
.then((jsObject) => {
    const temperature = document.querySelector('#temp');
    temperature.textContent = jsObject.main.temp.toFixed(0);
    console.log(jsObject.main.temp.toFixed(0));
    const high = document.querySelector('#high');
    const desc = jsObject.weather[0].description;
    currently.innerHTML = desc;
    console.log(desc);

    const imagesrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    document.getElementById('imagesrc').textContent = imagesrc;
    document.getElementById('icon').setAttribute('src', imagesrc);
    document.getElementById('icon').setAttribute('alt', desc.toUpperCase());
});