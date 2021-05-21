const list = document.querySelector('list');
const input = document.querySelector('input');
const button = document.querySelector('button');

document.querySelector("#button").addEventListener('click', myFunction);

button.onclick = myFunction() {
    let item = input.value;
    input.value = '';

    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listBtn = document.createElement('button');

    listItem.appendChild(listText);
    listText.textContent = myItem;
    listItem.appendChild(listBtn);
    listBtn.textContent = '❌';
    list.appendChild(listItem);

    listBtn.onclick = function(e) {
        list.removeChild(listItem);
    }
    input.focus;
}