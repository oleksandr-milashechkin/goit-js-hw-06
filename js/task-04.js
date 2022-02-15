// Создаём переменную для счётчика
let counterValue = 0;

// Получаем ссылки на кнопки и счётчик в разметке
const decrementButtonRef = document.querySelector('button[data-action="decrement"]');
console.log(decrementButtonRef);
const incrementButtonRef = document.querySelector('button[data-action="increment"]');
console.log(incrementButtonRef);
const counterRef = document.querySelector('#value');
console.log(counterRef);

// Пишем коллбэки для прибавления и вычитания
const decrement = () => {
    counterValue -= 1;
    counterRef.textContent = `${counterValue}`;
    console.log('decrement!');
}

const increment = () => {
    counterValue += 1;
    counterRef.textContent = `${counterValue}`;
    console.log('increment!');
}

// Добавляем слушателей на кнопки
decrementButtonRef.addEventListener('click', decrement);
incrementButtonRef.addEventListener('click', increment);