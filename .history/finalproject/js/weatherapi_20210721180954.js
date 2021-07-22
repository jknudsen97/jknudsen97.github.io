let cityid = '5870133';
let appID = '4288c843ab0418aa9169c7a83367910c';
const apiurl = `https://api.openweathermap.org/data/2.5/weather?id=${cityid}&appid=${appID}&units=imperial`;

fetch(apiurl)
.then((response) => response.json())
.then((jsObject) => {
    const temp = document.querySelector('#temp');
    temp.textContent = jsObject.main.temp.toFixed(0);
    const humidity = document.querySelector('#humidity');
    humidity.textContent = jsObject.main.humidity.toFixed(0);
    const desc = document.querySelector('#desc');
    desc.textContent = jsObject.weather[0].description;
    

    const imagesrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    document.getElementById('imagesrc').textContent = imagesrc;
    document.getElementById('icon').setAttribute('src', imagesrc);
    document.getElementById('icon').setAttribute('alt', desc.toUpperCase());
});