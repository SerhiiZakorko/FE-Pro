const name = document.querySelector("#name");
const phone = document.querySelector("#phone");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const btnReg = document.querySelector("#btn-register");
const infoReg = document.querySelector("#info-reg");
const switcher = document.querySelector("#switcher");
const registerForm = document.querySelector(".register");
const signupForm = document.querySelector(".sign-up");
const btnSign = document.querySelector("#btn-sign");
const emailLogin = document.querySelector("#email-login");
const passwordLogin = document.querySelector("#password-login");
const infoLog = document.querySelector("#info-log");
const message = document.querySelector("#message");
const form = document.querySelector(".login-wrapper");
const backBtn = document.querySelector("#back-btn")

// переключение режимов

function toLogin() {
  registerForm.classList.toggle("off-mode");
  signupForm.classList.toggle("on-mode");
  infoReg.innerText = "";
  infoLog.innerText = "";
}

function toRegister() {
  signupForm.classList.toggle("off-mode");
  infoReg.innerText = "";
  infoLog.innerText = "";
}

switcher.addEventListener("click", () => {
  toRegister(), toLogin();
});

// форма регистрации

let users = localStorage.getItem("users")
  ? JSON.parse(localStorage.getItem("users"))
  : [];

btnReg.addEventListener("click", () => {
  //--------проверяем чтоб были заполнены все поля
  if (
    name.value === "" ||
    phone.value === "" ||
    email.value === "" ||
    password.value === ""
  ) {
    infoReg.innerText = "Заполните все поля!";
    infoReg.style.color = "red";
  } else {
    //-------------------------------------проверяем, не занят ли эмейл
    let isError = false; //-----------------------переменная isError сначала false
    for (let i = 0; i < users.length; i++) {
      if (users[i].userEmail === email.value) {
        isError = true; //-------------------------если эмейл занят, переменная становится тру
      }
    }
    if (isError) {
      //-----------------------------если переменная isError тру- получеем следующее сообщение
      infoReg.innerText = "Такой пользователь уже существует";
      infoReg.style.color = "red";
    } else {
      //----------------------------------------если эмейл не занят, создаем объект нового юзера
      let user = {
        userName: name.value,
        userPhone: phone.value,
        userEmail: email.value,
        userPassword: password.value,
      };

      users.push(user); //-------------------------пушим юзера в массив с другими объктами-юзерами
      localStorage.setItem("users", JSON.stringify(users));

      name.value = ""; //--------------------------очищаем после этого поля ввода
      phone.value = "";
      email.value = "";
      password.value = "";

      infoReg.innerText = "Вы успешно зарегистрировались!";
      infoReg.style.color = "green";
    }
  }
});

//  форма входа

function login() {
  for (let i = 0; i < users.length; i++) {
    if (
      emailLogin.value === users[i].userEmail &&
      passwordLogin.value === users[i].userPassword
    ) {
      form.innerHTML =
        "<div class='message-container'><p class='message'>Вы вошли в систему</p><button id= 'back-btn'>Назад</button></div>";
    } else {
      infoLog.innerText = "Неправильный пароль или логин";
      infoLog.style.color = "red";
    }
  }
}

btnSign.addEventListener("click", () => {
  login();
  emailLogin.value = "";
  passwordLogin.value = "";
});

function refresh (){
  location.reload()
  console.log("hkgk")
}

/*form.addEventListener("click", () => {
  refresh()
})*/
