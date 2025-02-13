const form = document.querySelector('#todo-form');
const input = document.querySelector('#todo-input');
const todoLane = document.querySelector('#todo-lane');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = input.value.trim();

    if (!value) return;

    const newTask = document.createElement('p');
    newTask.innerText = value;
    newTask.setAttribute('draggable', 'true');
    newTask.classList.add('task', 'bg-white', 'p-2', 'mb-2', 'rounded-lg', 'shadow-md');

    newTask.addEventListener('dragstart', () => {
        newTask.classList.add('dragging');
    });

    newTask.addEventListener('dragend', () => {
        newTask.classList.remove('dragging');
    });

    todoLane.appendChild(newTask);
    input.value = '';
});