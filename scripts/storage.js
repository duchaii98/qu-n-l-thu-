"use strict";
const userArr = getFromStorage("userArr") ?? [];
const todos = getFromStorage("todoArr") ?? [];
function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
function getFromStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
console.log(userArr);
// chuyển đổi về dạng class instance
const userA = userArr.map((data) => parseUser(data));
console.log(userA);

function parseUser(data) {
  const user = new User(
    data.firstname,
    data.lastname,
    data.username,
    data.password,
    data.pageSize,
    data.category
  );

  return user;
}
// lấy dữ liệu user đang đăng nhập
let userActive = getFromStorage("userActive")
  ? parseUser(getFromStorage("userActive"))
  : null;

// Hàm chuyển đổi từ JS object sang class instance của task class
function parseTask(taskData) {
  const task = new Task(taskData.task, taskData.owner, taskData.isDone);
  return task;
}
const todoArr = todos.map((todo) => parseTask(todo));
console.log(todoArr);
