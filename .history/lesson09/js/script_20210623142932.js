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
    const towns = jsonObject["towns"];
    const idaho = towns.filter(
      towns => towns.name == "Preston" || towns.name == "Soda Springs" || towns.name == "Fish Haven");

      idaho.forEach((towns) => {
        let card = document.createElement("section");
        let name = document.createElement("h1");
        let motto = document.createElement("h2");
        let yearfounded = document.createElement("p");
        let population = document.createElement("p");
        let rainfall = document.createElement("p");

        name.textContent = `${towns.name}`;
        motto.textContent = `${town.motto}`;
        yearfounded.textContent = `Founded: ${town.yearFounded}`;
        population.textContent = `Population: ${town.currentPopulation}`;
        rainfall.textContent = `Annual Rainfall: ${town.averageRainfall}`;

        card.appendChild(name);
        card.appendChild(motto);
        card.appendChild(yearfounded);
        card.appendChild(population);
        card.appendChild(rainfall);
        
        document.querySelector("article.town_section").appendChild(card);
      })
    }
  )