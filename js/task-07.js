// Получаем ссылки на ползунок и строку
const inputRef = document.querySelector('#font-size-control');
console.log(inputRef);
const textRef = document.querySelector('#text');
console.log(textRef);

// Добавляем слушателя на ползунок и условие изменения шрифта строки на значение ползунка
inputRef.addEventListener('input', event => {
    textRef.style.fontSize = `${event.currentTarget.value}px`;
})