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

//Gallery
const imagesToLoad = document.querySelectorAll('img[data-src]');

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    };
};

const imgOptions = {
    rootMargin: '0px 0px 50px 0px',
    threshold: 1
};

if ('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver(items => {
        items.forEach(item => {
            if (item.isIntersecting) {
                loadImages(item.target);
                imgObserver.unobserve(item.target);
            }
        });
    }, imgOptions);

    imagesToLoad.forEach((img) => {
        imgObserver.observe(img);
    });
} else {
    imagesToLoad.forEach(img => {
        loadImages(img);
    });
}

//Last visited in days.
window.onload = function() {
    function betweenVisits(first, second) {
        const day = 1000 * 60 * 60 * 24;
        const diffTime = first - second;
        const diffDays = Math.round(diffTime / day);
        return diffDays;
    }
    if (typeof(Storage) != "undefined") {
        let newDate = new Date();
        currentVisit = newDate.getTime();

        if (typeof localStorage.getItem("visited") == typeof "string") {
            document.querySelector("#visited").innerText = betweenVisits(currentVisit, localStorage.getItem("visited"));
            let previousVisit = currentVisit;
            localStorage.setItem("visited", previousVisit);
        }
        else {
            let previousVisit = currentVisit;
            localStorage.setItem("visited", previousVisit);
        }
    }
}

//Severity Slider
function adjustSeverity(severity) {
  document.getElementById("severityvalue").innerHTML = severity;
}

//JSON

fetch("./json/database.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const database= jsonObject['database'];
    for (let i = 0; i < database.length; i++ ) {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let phone = document.createElement('h3');
        let url = document.createElement('h3');
        name.textContent = cards[i].name;

        let img = document.createElement('img');
        img.setAttribute('src', database[i].logo);

        card.append(name);
        card.append(img);
        card.append(phone);
        card.append(url);

        document.querySelector('div.cards').appendChild(card);
    }
  });

let thedate = new Date();
const friday = thedate.getDay();
const banner = document.querySelector('.banner');

if (thedate.getDay() == 5)
{
  document.querySelector('.banner').style.display = 'block';
}
else
{
  banner.style.display = "none";
}
