const taskInput = document.getElementById("task-input")
const addBtn = document.getElementById("add-btn")
const taskList = document.getElementById("task-list")

//  addEventListener

addBtn.addEventListener("click", () => {
    if(taskInput !== ""){
        const takeText = taskInput.value;
        const listItem = document.createElement("li")
        listItem.innerHTML = ` 
                ${takeText}
                <button class = "delete-btn">Delete</button>
            `;
            taskList.appendChild(listItem)
            taskInput.value = "";
    }
});

taskList.addEventListener('click', (event) => {
    if(event.target.classList.contains("delete-btn")) {
        const listItem = event.target.parentElement;
        taskList.removeChild(listItem);
    }
})