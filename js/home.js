let welcomeMassage = document.getElementById("welcomeMassage");
let logOutBtn = document.getElementById("logOutBtn");
if (localStorage.getItem("userName") != null) {
  welcomeMassage.innerHTML = `welcome ${localStorage.getItem("userName")}`;
}
function logout() {
  window.location.href = "index.html";
  localStorage.removeItem("userName");
}
logOutBtn.addEventListener("click", logout);
