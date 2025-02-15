function addTask() {
    const title = document.getElementById('taskTitle').value;
    const desc = document.getElementById('taskDesc').value;
    if (title && desc) {
        const taskList = document.getElementById('taskList');
        const taskDiv = document.createElement('div');
        taskDiv.className = 'task';
        taskDiv.innerHTML = `
            <div>
                <strong>${title}</strong>: ${desc}
            </div>
            <div class="task-buttons">
                <button class="complete" onclick="completeTask(this)"><i class="fa fa-check"></i></button>
                <button class="delete" onclick="deleteTask(this)"><i class="fa fa-times"></i></button>
            </div>
        `;
        taskList.appendChild(taskDiv);
        document.getElementById('taskTitle').value = '';
        document.getElementById('taskDesc').value = '';
    } else {
        alert('Please enter both title and description');
    }
}

function completeTask(button) {
    const taskDiv = button.parentElement.parentElement;
    taskDiv.classList.toggle('completed');
}

function deleteTask(button) {
    const taskDiv = button.parentElement.parentElement;
    taskDiv.remove();
}