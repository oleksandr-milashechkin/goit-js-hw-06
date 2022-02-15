// Получаем ссылку на поле ввода 
const validationInputRef = document.querySelector('#validation-input');

// Добавляем слушателя на поле ввода и условие проверки на нужную длину строки
validationInputRef.addEventListener('blur', (event) => {
    if (event.currentTarget.value.length == validationInputRef.dataset.length) {
        validationInputRef.classList.add('valid');
        validationInputRef.classList.remove('invalid');
        console.log(validationInputRef);
    } else {
        validationInputRef.classList.add('invalid');
        validationInputRef.classList.remove('valid');
        console.log(validationInputRef);
    }
})