// Ищем кол-во категорий

const categories = document.querySelectorAll('.item');
const categoriesLength = categories.length;
console.log(`Number of categories — ${categoriesLength}`);

// Перебираем вложенные в категории элементы, выводим текст заголовка и количество вложенных элементов в категории

categories.forEach((elem) => {
    console.log(`Category: ${elem.firstElementChild.textContent}`);
    const elemList = elem.lastElementChild;
    console.log(`Elements: ${elemList.children.length}`);
})