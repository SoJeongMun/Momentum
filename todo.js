const form = document.querySelector('#todo-form');
const input = form.querySelector('input');
const todoList = document.querySelector('.todo-list');

const TODO_KEY = 'todo';
const todos = [];

function saveTodo() {
	localStorage.setItem(TODO_KEY, JSON.stringify(todos));
}

function deleteTodo(e) {
	const li = e.target.parentElement;
	li.remove();
}

function paintTodo(newTodo) {
	const li = document.createElement('li');
	const span = document.createElement('span');
	span.innerText = newTodo;
	const button = document.createElement('button');
	button.innerText = '❌';
	button.addEventListener('click', deleteTodo);
	li.appendChild(span);
	li.appendChild(button);
	todoList.appendChild(li);
}

function handleSubmit(e) {
	e.preventDefault();
	const newTodo = input.value;
	input.value = '';
	todos.push(newTodo);
	paintTodo(newTodo);
	saveTodo();
}

form.addEventListener('submit', handleSubmit);

const savedTodo = localStorage.getItem(TODO_KEY);

if (savedTodo && savedTodo !== null) {
	const parsedTodo = JSON.parse(saveTodo);
}
