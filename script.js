
var taskInput = document.getElementById("taskInput");
var addBtn = document.getElementById("addBtn");
var taskList = document.getElementById("taskList");


function addTask() {
  var taskText = taskInput.value;

  if (taskText.trim() === "") {
    alert("Please enter a task");
    return;
  }

  var li = document.createElement("li");

  var span = document.createElement("span");
  span.textContent = taskText;

  var deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "deleteBtn";

  li.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  deleteBtn.addEventListener("click", function (event) {
    event.stopPropagation(); // stops the click from also toggling complete
    taskList.removeChild(li);
  });

  li.appendChild(span);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = "";
}

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});