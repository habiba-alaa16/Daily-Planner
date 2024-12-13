document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTaskButton");
    const savedTasks = document.getElementById("savedTasks");
    const taskCounter = document.getElementById("taskCounter");
  
    let totalTasks = 0;
  
    function updateTaskCounter() {
        taskCounter.textContent = `Total Tasks: ${totalTasks}`;
    }
  
    function createTaskElement(taskText) {
        const taskItem = document.createElement("div");
        taskItem.classList.add("task-item");
  
        const taskContent = document.createElement("span");
        taskContent.textContent =taskText;
  
        const completeButton = document.createElement("button");
        completeButton.textContent = "Complete";
        completeButton.classList.add("complete-btn");
        completeButton.addEventListener("click", function () {
            taskItem.classList.toggle("completed");
        });
  
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function () {
            savedTasks.removeChild(taskItem);
            totalTasks--;
            updateTaskCounter();
        });
  
        taskItem.appendChild(taskContent);
        taskItem.appendChild(completeButton);
        taskItem.appendChild(deleteButton);
  
        return taskItem;
    }
  
    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
  
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }
  
        const taskElement = createTaskElement(taskText);
        savedTasks.appendChild(taskElement);
  
        taskInput.value = ""; 
        totalTasks++;
        updateTaskCounter();
    });
  });
  