let btn = document.getElementById("btn");
let input = document.getElementById("input");
let div2 = document.getElementById("div2");
let editDiv = document.getElementById("editDiv");
let editInput = document.getElementById("editInput");
let save = document.getElementById("save");
let k = 0;
let currentTask = null;

btn.addEventListener("click", function () {
    if (input.value.trim() === "") return;
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");

    const taskText = document.createElement("p");
    k++;
    taskText.innerText = k + ". " + input.value;
    taskText.classList.add("para");

    const editButton = document.createElement("button");
    editButton.innerText = "Edit";
    editButton.classList.add("edit-btn");

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.classList.add("delete-btn");

    taskDiv.appendChild(taskText);
    taskDiv.appendChild(editButton);
    taskDiv.appendChild(deleteButton);
    div2.appendChild(taskDiv);

    taskText.addEventListener("click", function () {
        taskText.style.textDecoration = "line-through";
    });
    editButton.addEventListener("click", function () {
        editDiv.classList.remove("hidden");
        editInput.value = taskText.innerText.split(". ")[1];
        currentTask = taskText;
    });

   
    deleteButton.addEventListener("click", function () {
        div2.removeChild(taskDiv);
    });

    input.value = "";
});

save.addEventListener("click", function () {
    if (currentTask && editInput.value.trim() !== "") {
        currentTask.innerText = currentTask.innerText.split(". ")[0] + ". " + editInput.value;
        editDiv.classList.add("hidden");
        editInput.value = "";
    }
});