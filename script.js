// Get references to elements
const todoInput = document.getElementById("todoInput");
const pendingTaskList = document.getElementById("pendingTaskList");
const completedTaskList = document.getElementById("completedTaskList");
const addButton = document.getElementById("addButton");

// Function to add a task
function addTask() {
    const taskText = todoInput.value.trim();
    if (taskText !== "") {
        const taskItem = document.createElement("li");
        taskItem.textContent = taskText;
        taskItem.addEventListener("click", completeTask);
        pendingTaskList.appendChild(taskItem);
        todoInput.value = "";
    }
}

// Function to mark a task as completed
function completeTask(event) {
    const completedTask = event.target;
    completedTask.removeEventListener("click", completeTask);
    pendingTaskList.removeChild(completedTask);
    completedTaskList.appendChild(completedTask);
}

// Event listener for adding a task
addButton.addEventListener("click", addTask);
