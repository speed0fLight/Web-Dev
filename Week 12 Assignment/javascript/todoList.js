// Names
// tasksContainer <div>           : Stores the tasks
// removeSelectedButton <button>  : Removes selected button
// addButton <button>             : Adds the task and clears input field
// taskInputBox <input>           : The description of the task

const tasksContainer = document.querySelector("#tasksContainer");
const removeSelectedButton = document.querySelector("#removeSelectedButton");
const addButton = document.querySelector("#addButton");
const taskInputBox = document.querySelector("#taskInputBox");

const taskList = [];

function addTask() {
    if (taskInputBox.value != "") {
        // add the task
        taskList.push(taskInputBox.value);

        taskInputBox.value = "";

        refreshTasks();
    }
}

function removeSelectedTasks() {
    let length = taskList.length;
    for (let i = 0; i < length; i++) {
        let taskName = taskList[i];

        let taskInputField = document.querySelector("#" + taskName)
        if (taskInputField.checked) {
            // remove the checked task
            taskList.splice(i,1);

            //reduce length as well
            length -= 1;

            // resume at same index
            i -= 1;
            continue;
        }
    }
    
    refreshTasks();
}

function refreshTasks() {
    htmlString = "";
    taskList.forEach(task => {
        htmlString += `<p> <input id=${task} type="checkbox"> <label>${task}</label> </p>`;
    });

    tasksContainer.innerHTML = htmlString;
}

addButton.addEventListener('click', () => {
    addTask();
});

removeSelectedButton.addEventListener('click', () => {
    removeSelectedTasks();
});

//refreshTasks();