const ssURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonObject) {
    const towns = jsonObject["towns"];
    const idaho = towns.filter(
      towns => towns.name == "Soda Springs");

      idaho.forEach((towns) => {
        
        let events = document.createElement("div");

        events.textContent = `Upcoming Events: ${towns.events}`;

        card.appendChild(insidecard);
        
        document.querySelector("#events").appendChild(card);
      })
    }
  )