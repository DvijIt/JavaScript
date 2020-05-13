import {setItem, getItem } from './storage.js'
import {renderListItems} from './renderListItems.js'

const taskInput = document.querySelector(".task-input");
const taskCreateBtn = document.querySelector(".create-task-btn");

const createTask = () => {

  const tasksList = getItem('tasksList') || [];

  if (taskInput.value === "") return false;

  tasksList.push({
    text: taskInput.value,
    done: false,
    date: new Date().toString()
  });

  setItem('tasksList', tasksList)
  
  renderListItems();
  taskInput.value = "";
};

taskCreateBtn.addEventListener("click", createTask);