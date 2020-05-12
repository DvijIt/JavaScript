import {setItem, getItem } from './storage.js'
import {renderListItems} from './renderListItems.js'
const listItem = document.querySelector('.list');

export const changeStatus = e => {

  const tasksList = getItem('tasksList') || [];

  const newTasksList = tasksList
    .map(item => {
      if (item.text === e.target.parentNode.innerText) item.done = e.target.checked;
      return item
    })

  setItem('tasksList', newTasksList)

  renderListItems();
}
listItem.addEventListener("click", changeStatus);