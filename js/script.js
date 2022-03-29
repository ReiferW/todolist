// step 1: Find element
let addTaskButton = document.getElementById("add-task")
let newTaskInput = document.getElementById("task-input")
// step 2: Write a function to implement the behaviour
function onAddTaskClicked (event){
    let taskName = newTaskInput.value;
    newTaskInput.value = "";
    console.log(taskName)
}
// step 3: link element, function and event
addTaskButton.addEventListener('click',onAddTaskClicked)