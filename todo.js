const addButton = document.querySelector(".button");
const list = document.querySelector(".task-list");
const input = document.querySelector(".add-task");


addButton.addEventListener("click", function(){
    console.log('pressed the add button');
    let taskValue = input.value;
    addTask(taskValue);
});


function addTask (taskName){

    if(taskName === '')
    {
        alert('must put a value in the box!');
    }
    else{
        
        const task = document.createElement("li");
        task.className = "task";
        task.textContent = taskName;
        list.appendChild(task);
    }
}

list.addEventListener("click", function(e){

    
    
    if(e.target.tagName ==="LI")
    {
        console.log(e.target.classList.contains("LI"));
        console.log('pressed the tasks');
        e.target.classList.toggle("checked");
    }

    
    
    
},false)
