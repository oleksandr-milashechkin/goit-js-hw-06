// Получаем ссылки на поле ввода и строку приветствия
const nameInputRef = document.querySelector('#name-input');
const nameOutputRef = document.querySelector('#name-output');

// Обновляем вывод на значение строки из ввода
nameInputRef.addEventListener('input', (event) => {
    if (event.currentTarget.value === '') {
        nameOutputRef.textContent = 'Anonymous';  
    } else {
    nameOutputRef.textContent = event.currentTarget.value;
    }
})