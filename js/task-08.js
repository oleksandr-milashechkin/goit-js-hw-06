//Получаем ссылку на форму
const loginFormRef = document.querySelector('.login-form');
console.log(loginFormRef);

// Добавляем слушателя на форму
loginFormRef.addEventListener('submit', loginFormSubmit);

// Функция проверки заполненности полей
function loginFormSubmit(event) {
    event.preventDefault();
   if (event.currentTarget.elements.email.value === "" || event.currentTarget.elements.password.value === "") {
        alert("Please fill in all the fields!");
        return;
   }
        const dataFormResult = {};
        const formData = new FormData(event.currentTarget);
      
        formData.forEach((value, name) => {
          dataFormResult[name] = value;
        });
      
        console.log(dataFormResult);
        loginFormRef.reset();
    }