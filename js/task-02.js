const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

//Получаем ссылку на список из разметки

const ingredientsRef = document.querySelector('#ingredients');

//Перебираем массив, создавая элемент списка на каждый элемент массива ingredients

ingredients.forEach(elem => {
const listItem = document.createElement('li');
listItem.textContent = `${elem}`;
listItem.classList.add('item');
ingredientsRef.append(listItem);
console.log(listItem);
});
