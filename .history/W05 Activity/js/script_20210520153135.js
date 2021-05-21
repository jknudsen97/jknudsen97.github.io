const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', function() {
        button.onclick = function() {
            let myItem = input.value;
            input.value = '';

            const listItem = document.createElement('li');
            const listBtn = document.createElement('button');

            listItem.textContent = input.value;
            listItem.appendChild(listText);
            listText.textContent = myItem;
            listItem.appendChild(listBtn);
            listBtn.textContent = '❌';
            list.appendChild(listItem);
            deleteButton.appendChild(li);
            li.appendChild(ul);

            listBtn.onclick = function(e) {
            list.removeChild(deleteButton);
            }
            input.focus();
        }})