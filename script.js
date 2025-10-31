document.addEventListener('DOMContentLoaded', function(){
   let task = JSON.parse(localStorage.getItem('tasks'))  || [];


    const taskInput = document.getElementById('task-input');
    const addButton = document.getElementById('add-task-btn');
     const taskList= document.getElementById('task-list');

    function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  
  // Function to display tasks from the tasks array
  function renderTasks() {
    taskList.innerHTML = ''; // clear current list
    tasks.forEach(function (taskText, index) {
      const listElement = document.createElement('li');
      listElement.textContent = taskText;

      // Create remove button
      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove';
      removeBtn.className = 'remove-btn';
      removeBtn.onclick = function () {
        tasks.splice(index, 1); // remove from array
        saveTasks(); // update localStorage
        renderTasks(); // re-render updated list
      };

      listElement.appendChild(removeBtn);
      taskList.appendChild(listElement);
    });
  }

function addTask(){
   const taskText = taskInput.value.trim();

   if (taskText === ""){
    alert('Please enter a task');
    return;
   }
   else{
   const listElement= document.createElement('li');
   listElement.textContent = taskText;
   // create a remove button
   const removeBtn = document.createElement('button');
   removeBtn.textContent= "Remove";
   removeBtn.className= 'remove-btn';
   // remove list with remove button
   removeBtn.onclick = function(){
      taskList.removeChild(listElement);
   }

   listElement.appendChild(removeBtn);
   taskList.appendChild(listElement);
   taskInput.value = "";
   }
};

addButton.addEventListener('click', addTask);

taskInput.addEventListener('keypress', function(event){
   if(event.key === "Enter"){
      addTask();
   }
} );
renderTasks();
}
);
