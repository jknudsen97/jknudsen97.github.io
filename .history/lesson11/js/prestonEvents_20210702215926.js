const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonObject) {
    const towns = jsonObject["towns"];
    const idaho = towns.filter(
      towns => towns.name == "Preston");

      idaho.for((towns) => {
        let card = document.createElement("article");
        let insidecard = document.createElement('section');
        let events = document.createElement("div");

        events.textContent = `Upcoming Events: ${towns.events}`;

        insidecard.appendChild(events);
        card.appendChild(insidecard);

        document.querySelector("#events").appendChild(card);
      })
    }
  )