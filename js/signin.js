let emailInput = document.getElementById("emailInput");
let passInput = document.getElementById("passInput");
let loginBtn = document.getElementById("loginBtn");
let alertMassage = document.getElementById("alertMass");
let dataContainer = [];
if (localStorage.getItem("usersData") != null) {
  dataContainer = JSON.parse(localStorage.getItem("usersData"));
}

function login() {
  if (checkInputEmpty() == true) {
    getAlertMassage("All data required", "red");
  } else {
    if (checkEmailandPassExist() == true) {
      window.location.href = "home.html";
    } else {
      getAlertMassage("Email or Passowrd is wrong", "red");
      clrForm();
    }
  }
}
loginBtn.addEventListener("click", login);

function checkEmailandPassExist() {
  for (let i = 0; i < dataContainer.length; i++) {
    if (
      dataContainer[i].userEmail == emailInput.value &&
      dataContainer[i].userPass == passInput.value
    ) {
      localStorage.setItem("userName", dataContainer[i].userName);
      return true;
    }
  }
}
function getAlertMassage(text, color) {
  alertMassage.classList.replace("d-none", "d-block");
  alertMassage.innerHTML = text;
  alertMassage.style.color = color;
}

function checkInputEmpty() {
  if (emailInput.value == "" || passInput.value == "") return true;
  else return false;
}
function clrForm() {
  emailInput.value = "";
  passInput.value = "";
}
