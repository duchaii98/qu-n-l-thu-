"use strict";
const login = document.querySelector("#login-modal");
const btnLogout = document.querySelector("#btn-logout");
const logout = document.querySelector("#main-content");
const text = document.querySelector("#welcome-message");
console.log(userActive);
function displayHome() {
  if (userActive) {
    login.style.display = "none";

    logout.style.display = "block";
    text.textContent = `Welcome ${userActive.firstname}`;
  } else {
    login.style.display = "block";
    logout.style.display = "none";
  }
}
displayHome();
btnLogout.addEventListener("click", function () {
  let checklogout = confirm("Bạn chắc chắn muốn logout chứ?");
  if (checklogout) {
    userActive = null;
    saveToStorage("userActive", userActive);
    displayHome();
  }
});
