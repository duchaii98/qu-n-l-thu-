"use strict";
const inpuTask = document.getElementById("input-task");
const todoList = document.getElementById("todo-list");
const btnAdd = document.getElementById("btn-add");

function displayTask() {
  todoList.innerHTML = "";
  let checktodo = todoArr.filter((el) => el.owner === userActive.username);

  checktodo.forEach((item) => {
    let html = `<li class = ${item.isDone ? "checked" : ""}>${
      item.task
    }<span class="close">×</span></li>`;
    todoList.insertAdjacentHTML("afterbegin", html);
  });

  deletTask();
  ToggleTasks();
}
displayTask();
btnAdd.addEventListener("click", function () {
  if (inpuTask.value.trim().length === 0) {
    alert("Vui lòng nhập nhiệm vụ!");
  } else {
    const todo = new Task(inpuTask.value, userActive.username, false);
    todoArr.push(todo);

    saveToStorage("todoArr", todoArr);
    displayTask(todoArr);
    inpuTask.value = "";
  }
});
function ToggleTasks() {
  document.querySelectorAll("#todo-list li").forEach((ele) =>
    ele.addEventListener("click", function (e) {
      if (e.target !== ele.children[0]) {
        e.target.classList.toggle("checked");
        const item = todoArr.find(
          (tim) =>
            tim.owner === userActive.username &&
            tim.task === ele.textContent.slice(0, -1)
        );

        item.isDone = e.target.classList.contains("checked") ? true : false;
        console.log(item);
        saveToStorage("todoArr", todoArr);
        return;
      }
      return;
    })
  );
}
console.log(todoArr);

function deletTask() {
  document.querySelectorAll("#todo-list .close").forEach(function (ele) {
    ele.addEventListener("click", function (e) {
      console.log(e.target);
      const isDelete = confirm("Bạn chắc chắn muốn xóa chứ?");

      let index = todoArr.findIndex(
        (tim) =>
          tim.owner === userActive.username &&
          tim.task === e.target.parentElement.textContent.slice(0, -1)
      );
      console.log(index);
      if (isDelete) {
        todoArr.splice(index, 1);
        saveToStorage("todoArr", todoArr);
        console.log(todoArr);
        displayTask();
      }
    });
  });
}
