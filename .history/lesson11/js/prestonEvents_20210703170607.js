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
        let card = document.createElement("article");
        let insidecard = document.createElement('section');
        let name = document.createElement("h1");
        let motto = document.createElement("h2");
        let yearfounded = document.createElement("p");
        let population = document.createElement("p");
        let rainfall = document.createElement("p");
        let image = document.createElement("img");
        let text = document.createElement("div");
        let events = document.createElement("div");

        name.textContent = `${towns.name}`;
        motto.textContent = `${towns.motto}`;
        yearfounded.textContent = `Founded: ${towns.yearFounded}`;
        population.textContent = `Population: ${towns.currentPopulation}`;
        rainfall.textContent = `Annual Rainfall: ${towns.averageRainfall}in`;
        events.textContent = `Upcoming Events: ${towns.events}`;
        image.setAttribute('src', `images/${towns.photo}`);
        image.setAttribute('alt', `${towns.name} img`);

        insidecard.appendChild(name);
        insidecard.appendChild(motto);
        insidecard.appendChild(yearfounded);
        insidecard.appendChild(population);
        insidecard.appendChild(rainfall);
        insidecard.appendChild(text);
        insidecard.appendChild(events);
        card.appendChild(image);
        card.appendChild(insidecard);
        
        document.querySelector("div.events").appendChild(card);
      })
    }
  )



/*const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonObject) {
    const towns = jsonObject["towns"];
    const idaho = towns.filter(
      towns => towns.name == "Preston");

      idaho.forEach((towns) => {
        let card = document.createElement("article");
        let insidecard = document.createElement('section');
        let text = document.createElement("div");
        let events = document.createElement("div");

        events.textContent = `Upcoming Events: ${towns.events}`;

        insidecard.appendChild(text);
        insidecard.appendChild(events);
        card.appendChild(insidecard);

        document.querySelector("#events").appendChild(card);
      })
    }
  )*/