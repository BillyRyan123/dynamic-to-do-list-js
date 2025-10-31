document.addEventListener('DOMContentLoaded', function(){
    const taskInput = document.getElementById('task-input');
    const addButton = document.getElementById('add-task-btn');
     const taskList= document.getElementById('task-list');

     
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
}
);
