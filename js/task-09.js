function getRandomHexColor() {
  console.log(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyElement = document.querySelector('body');
console.log(bodyElement);
const changeColorBtn = document.querySelector('.change-color');
console.log(changeColorBtn);
const currentColor = document.querySelector('.color');
console.log(currentColor);


changeColorBtn.addEventListener('click', () => {
  const changeColor = getRandomHexColor();
  bodyElement.style.backgroundColor = changeColor;
  currentColor.textContent = bodyElement.style.backgroundColor;
});


