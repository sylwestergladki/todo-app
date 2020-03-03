"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below

const addButton = document.getElementById("add-button");
const inputTask = document.getElementById("input-task");
const todoTask = document.getElementById("tasks-todo")
let task;



const addTask = () => {
  task = inputTask.value;
  todoTask.innerHTML += `<div class="container-todo__element">
  <p class="container-todo__element-text">${task}</p>
  <button class='container-todo__element-undone'>X</button>
  <button class='container-todo__element-done'>OK</button>
</div>`
}

const doneTask = () =>{
  
}

addButton.addEventListener("click", addTask);
