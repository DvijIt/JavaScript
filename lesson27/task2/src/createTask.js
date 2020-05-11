import {setItem, getItem } from './storage.js'
import {renderListItems} from './renderListItems.js'

const taskInput = document.querySelector(".task-input");
const taskCreateBtn = document.querySelector(".task-create-btn");

const createTask = () => {

  const tasksList = getItem('tasks') || [];

  if (taskInput.value === "") return false;

  tasksList.push({
    text: taskInput.value,
    done: false,
    date: new Date().toString()
  });

  setItem('tasks', tasksList)
  console.log(tasksList);
  
  renderListItems();
  taskInput.value = "";
};

taskCreateBtn.addEventListener("click", createTask);