const form = document.getElementById('form');
const todoList = document.getElementById ('todolist');
const input = document.getElementById('todoInput');

form.addEventListener ('submit', event => {
    event.preventDefault();
    modifyToDo(input.value);
    input.value = '';
});


const modifyToDo = (todoText) => {
    const todoItem = document.createElement('li');
    const todoItemText = document.createElement('span');
    todoItemText.innerText = todoText;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    
    todoItem.appendChild(checkbox);
    todoItem.appendChild(todoItemText);
    
    todoItem.setAttribute('class', 'item');
    todoList.appendChild(todoItem);
    
    checkbox.addEventListener('click', function () {
        if (!this.checked) {
            todoItem.style.textDecoration = '';
        } else {
            todoItem.style.textDecoration = 'line-through';
        }
    })
}
