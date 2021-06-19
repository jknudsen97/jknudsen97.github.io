const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];
    for (let i = 0; i < prophets.length; i++ ) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;

        let img = document.createElement('img');
        img.setAttribute('src', prophets[i].imageurl);
        img.setAttribute('alt', 'Portraits of ${prophets[i].name} ${prophets[i].lastname}');

        card.append(h2);
        card.append(img);
        card.append(section);

        document.querySelector('div.cards').appendChild(card);
    }
  });