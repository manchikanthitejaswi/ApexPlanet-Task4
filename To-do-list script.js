const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

let todos = JSON.parse(localStorage.getItem('todos')) || [];

function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function renderTodos() {
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.textContent = todo;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = () => {
            todos.splice(index, 1);
            saveTodos();
            renderTodos();
        };

        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    });
}

addBtn.addEventListener('click', () => {
    const todoText = todoInput.value.trim();
    if (todoText !== '') {
        todos.push(todoText);
        todoInput.value = '';
        saveTodos();
        renderTodos();
    }
});

renderTodos();
