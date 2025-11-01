document.addEventListener('DOMContentLoaded', function() {
  // Initialize tasks from localStorage or empty array
  let tasks = JSON.parse(localStorage.getItem('tasks') || '[]');

  const taskInput = document.getElementById('task-input');
  const addButton = document.getElementById('add-task-btn');
  const taskList = document.getElementById('task-list');

  // Save tasks array to localStorage
  function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  // Render all tasks to the DOM
  function renderTasks() {
    taskList.innerHTML = ''; // clear current list

    tasks.forEach(function(taskText, index) {
      const listElement = document.createElement('li');
      listElement.textContent = taskText;

      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove';
      removeBtn.className = 'remove-btn';

      removeBtn.addEventListener('click', function() {
        tasks.splice(index, 1); // remove from array
        saveTasks();             // update localStorage
        renderTasks();           // update DOM
      });

      listElement.appendChild(removeBtn);
      taskList.appendChild(listElement);
    });
  }

  // Add a new task
  function addTask(taskText = null, save = true) {
    if (!taskText) {
      taskText = taskInput.value.trim();
      if (taskText === '') {
        alert('Please enter a task');
        return;
      }
    }

    tasks.push(taskText); // add to array
    renderTasks();        // update DOM
    if (save) saveTasks(); // save to localStorage only if save=true
    taskInput.value = ''; // clear input
  }

  // Load tasks from localStorage on page load
  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(task => addTask(task, false)); // don't save again
  }

  // Event listeners
  addButton.addEventListener('click', () => addTask());
  taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') addTask();
  });

  // Initial load
  loadTasks();
});
