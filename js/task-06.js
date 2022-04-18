// Получаем ссылку на поле ввода 
const validationInputRef = document.querySelector('#validation-input');
const datasetValue = + validationInputRef.dataset.length;
console.log(datasetValue);
// Добавляем слушателя на поле ввода и условие проверки на нужную длину строки
validationInputRef.addEventListener('blur', (event) => {
    if (event.currentTarget.value.length === datasetValue) {
        validationInputRef.classList.add('valid');
        validationInputRef.classList.remove('invalid');
        console.log(validationInputRef);
    } else {
        validationInputRef.classList.add('invalid');
        validationInputRef.classList.remove('valid');
        console.log(validationInputRef);
    }
})

