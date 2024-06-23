const addButton = document.querySelector(".button");
const list = document.querySelector(".task-list");
const input = document.querySelector(".add-task");

addButton.addEventListener("click", function(){
    console.log('pressed the add button');
    let taskValue = input.value;
    addTask(taskValue);
});



function addTask (taskName){
    const task = document.createElement("li");
    task.className = "task";
    task.textContent = taskName;
    list.appendChild(task);
}

