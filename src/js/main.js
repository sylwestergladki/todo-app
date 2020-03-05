"use strict";


const addButton = document.getElementById("add-button");
const inputTask = document.getElementById("input-task");
const todoTask = document.getElementById("tasks-todo");
const doneButton = document.getElementsByClassName("container-todo__element-done");
const elementToDO = document.getElementById("todoElement");

let task="";



const addTask = () => {
  
  task = inputTask.value;
  

  if(task){
  todoTask.innerHTML += `<div class="container-todo__element" id="todoElement">
  <p class="container-todo__element-text">${task}</p>
  <button class='container-todo__element-undone'>X</button>
  <button class='container-todo__element-done' id="done-button">OK</button>
</div>`}
  inputTask.value = "";
 
};

function doneTask(e){
    let element = e.target;
    if(element.classList.contains("container-todo__element-done")){
        console.log(element.parentNode.firstChild.innerHTML);
        
        element.parentNode.remove();
    }

}


addButton.addEventListener("click", addTask);

document.addEventListener( "click", doneTask );



