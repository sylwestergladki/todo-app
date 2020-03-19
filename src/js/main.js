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

function removeTask(e){
    let element = e.target;
    if(element.classList.contains("container-todo__element-undone")){
        element.parentNode.remove();
    }
}

function doneTask(e){
  let element = e.target;
  if(element.classList.contains("container-todo__element-done")){
        console.log(element.parentNode)
  }
}


addButton.addEventListener("click", addTask);
document.addEventListener( "click", removeTask );
document.addEventListener("click",doneTask);



