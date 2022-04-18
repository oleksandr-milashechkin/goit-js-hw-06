// Получаем ссылки на ползунок и строку
const inputRef = document.querySelector('#font-size-control');
console.log(inputRef);
const textRef = document.querySelector('#text');
console.log(textRef);

textRef.style.fontSize = `${inputRef.value}px`;

// Добавляем слушателя на ползунок и условие изменения шрифта строки на значение ползунка
const onInputValueChange = event => {
    const value = event.currentTarget.value;
    textRef.style.fontSize = `${value}px`;
};
inputRef.addEventListener('input', onInputValueChange);