let nameInput = document.getElementById("nameInput");
let passInput = document.getElementById("passInput");
let emailInput = document.getElementById("emailInput");
let signupBtn = document.getElementById("signupBtn");
let alertMassage = document.getElementById("alertMassage");
let dataContainer = [];
if (localStorage.getItem("usersData") != null) {
  dataContainer = JSON.parse(localStorage.getItem("usersData"));
}

function signUp() {
  let data = {
    userName: nameInput.value,
    userPass: passInput.value,
    userEmail: emailInput.value,
  };
  if (checkInputEmpty() == true) {
    getAlertMassage("All Data Required", "red");
  } else {
    if (chckEmailExist() == true) {
      getAlertMassage("Already Exsist", "red");
    } else {
      dataContainer.push(data);
      localStorage.setItem("usersData", JSON.stringify(dataContainer));
      clrForm();
      getAlertMassage("Success", "green");
    }
  }
}
signupBtn.addEventListener("click", signUp);
function getAlertMassage(text, color) {
  alertMassage.classList.replace("d-none", "d-block");
  alertMassage.innerHTML = text;
  alertMassage.style.color = color;
}
function clrForm() {
  nameInput.value = "";
  passInput.value = "";
  emailInput.value = "";
}
function checkInputEmpty() {
  if (nameInput.value == "" || emailInput.value == "" || passInput.value == "")
    return true;
  else return false;
}
function chckEmailExist() {
  for (let i = 0; i < dataContainer.length; i++) {
    if (dataContainer[i].userEmail == emailInput.value) return true;
  }
}
