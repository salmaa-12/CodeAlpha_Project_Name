document.getElementById('addTaskButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput').value;
    if (taskInput.trim() !== "") {
        addTask(taskInput);
        document.getElementById('taskInput').value = '';
    }
});

function addTask(task) {
    const taskList = document.getElementById('taskList');

    const listItem = document.createElement('li');

    const taskText = document.createElement('span');
    taskText.innerText = task;
    taskText.addEventListener('click', function() {
        listItem.classList.toggle('completed');
    });

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(listItem);
    });

    listItem.appendChild(taskText);
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);
}
