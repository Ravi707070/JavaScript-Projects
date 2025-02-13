const item = document.querySelector('#new-task');
const toDoBox = document.querySelector('#todo-list');

item.addEventListener('keyup', function(event) {
    if (event.key === "Enter") {
        addToDo(this.value);
        this.value = "";
    }
});

document.querySelector('#todo-form').addEventListener('submit', function(event) {
    event.preventDefault();
    addToDo(item.value);
    item.value = "";
});

const addToDo = (task) => {
    if (task.trim() === "") return;

    const listItem = document.createElement('li');
    listItem.className = 'flex justify-between items-center mb-2 p-2 bg-gray-200 rounded';
    listItem.innerHTML = `
        <span>${task}</span>
        <button class="delete-btn text-red-500 hover:text-red-700">
            <i class="fas fa-times"></i>
        </button>
    `;

    listItem.querySelector('.delete-btn').addEventListener('click', function() {
        listItem.remove();
    });

    toDoBox.appendChild(listItem);
};