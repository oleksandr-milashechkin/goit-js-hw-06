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

//ПОЧЕМУ-ТО НЕ РАБОТАЕТ
//const ingredientsList = [...ingredients].map(elem => {
//const listItem = document.createElement('li');
//listItem.textContent = elem;
//listItem.classList.add('item');

//console.log(listItem);
//return listItem;
//});
//ingredientsRef.append(ingredientsList);

ingredientsRef.append(...ingredients.map(elem => {
  const listItem = document.createElement('li');
  listItem.textContent = elem;
  listItem.classList.add('item');
  console.log(listItem);
  return listItem;
}));