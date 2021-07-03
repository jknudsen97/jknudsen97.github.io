const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

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
        let events = document.createElement("div");

        events.textContent = `Upcoming Events: ${towns.events}`;

        card.appendChild(insidecard);
        insidecard.appendChild(events);
        
        document.querySelector("#events").appendChild(card);
      })
    }
  )