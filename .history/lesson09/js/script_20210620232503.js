const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
}

const link = document.querySelectorAll(".link");
link.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu(){
    hamburger.classList.remove("active");
    menu.classList.remove("active");
}

var d = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var n = weekday[d.getDay()];
document.querySelector("#currentDayofWeek").innerHTML = n;

var n = d.getDate();
document.querySelector("#currentDay").innerHTML = n;

var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";

var n = month[d.getMonth()];
document.querySelector("#currentMonth").innerHTML = n;

var n = d.getFullYear();
document.querySelector("#currentYear").innerHTML = n;

//JSON
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++ ) {
        let places = document.createElement('section');
        let section = document.createElement('section');
        section.textContent = towns[i].name + ' ' + towns[i].motto + ' ' + towns[i].yearFounded + ' ' + towns[i].currentPopulation + ' ' + towns[i].averageRainfall;

        p.setAttribute('alt', '${towns[i].name} ${towns[i].motto} Year Founded: ${towns[i].yearFounded} Population: ${towns[i].currentPopulation} Annual Rain Fall: ${towns[i].averageRainfall}')

        places.append(section);

        document.querySelector('div.places').appendChild(places);
    }
  });