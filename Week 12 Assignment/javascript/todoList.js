// Names
// #tasksContainer         : Stores the tasks
// #removeSelectedButton   : Removes selected tasks
// #addButton              : Adds the task and clears input field
// #taskInputBox           : The description of the task

const taskList = [];
let nextId = 0;

function addTask() {
    const taskText = $("#taskInputBox").val().trim();

    if (taskText !== "") {
        taskList.push({
            id: nextId,
            text: taskText
        });

        nextId++;
        $("#taskInputBox").val("");
        refreshTasks();
    }
}

function removeSelectedTasks() {
    for (let i = taskList.length - 1; i >= 0; i--) {
        const checkboxId = "#task-" + taskList[i].id;

        if ($(checkboxId).is(":checked")) {
            taskList.splice(i, 1);
        }
    }

    refreshTasks();
}

function refreshTasks() {
    let htmlString = "";

    taskList.forEach(task => {
        htmlString += `
            <p>
                <input id="task-${task.id}" type="checkbox">
                <label for="task-${task.id}">${task.text}</label>
            </p>
        `;
    });

    $("#tasksContainer").html(htmlString);
}

$("#addButton").click(function () {
    addTask();
});

$("#removeSelectedButton").click(function () {
    removeSelectedTasks();
});