import {} from './storage.js'
import {renderListItems} from './renderListItems.js'
import {} from './createTask.js'
import {} from './updateTask.js'

document.addEventListener('DOMContentLoaded', renderListItems)

const onStorageChange = e => {
  if (e.key === "tasksList") renderListItems()
}

window.addEventListener('storage', onStorageChange);
