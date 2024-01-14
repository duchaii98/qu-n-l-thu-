"use strict";
const inputPageSize = document.getElementById("input-page-size");
const inputCategory = document.getElementById("input-category");
const btnSubmit = document.getElementById("btn-submit");
function isNaN(x) {
  // Ép kiểu Number cho biến x
  x = Number(x);
  // Nếu x là NaN, NaN != NaN trả về true, các trường hợp khác sẽ trả về false
  return x != x;
}
function validate() {
  if (isNaN(inputPageSize.value) || inputPageSize.value == "") {
    alert("News per page không hợp lệ");
    return;
  }
  if (inputCategory.value == "") {
    alert("Vui lòng nhập News Category");
    return;
  }
  return true;
}
btnSubmit.addEventListener("click", function () {
  if (validate()) {
    userActive.pageSize = Number.parseInt(inputPageSize.value);
    userActive.category = inputCategory.value;
    saveToStorage("userActive", userActive);
    const index = userA.findIndex(
      (item) => item.username === userActive.username
    );
    userA[index] = userActive;
    saveToStorage("userArr", userA);
    alert("Cài đặt thành công!");
    inputCategory.value = "";
    inputPageSize.value = "";
  }
});
