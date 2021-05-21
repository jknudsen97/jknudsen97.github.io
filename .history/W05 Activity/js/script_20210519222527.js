

button.onclick = function() {
  let myItem = input.value;
  input.value = '';

  const list = document.querySelector('ul');
  const input = document.querySelector('input');
  const button = document.querySelector('button');

  listItem.appendChild(listText);
  listText.textContent = myItem;
  listItem.appendChild(listBtn);
  listBtn.textContent = 'Delete';
  list.appendChild(listItem);

  listBtn.onclick = function(e) {
    list.removeChild(listItem);
  }

  input.focus();
}