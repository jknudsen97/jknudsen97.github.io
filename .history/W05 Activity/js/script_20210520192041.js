const fav = document.querySelector('#fav');
const button = document.querySelector('button');
const output = document.querySelector('.list');

button.addEventListener('click', () => {
    if (fav.value != '') {
        let li = document.createElement('li');
        let deleteButton = document.createElement
        ('button');

        li.textContent = fav.value;
        deleteButton.textContent = '❌';

        li.append(deletebutton);
        output.append(li);
        deleteButton.addEventListener('click', function(){
            output.removeChild(li);
            fav.focus;
        });
        fav.value = '';
        fav.focus;
    }
});