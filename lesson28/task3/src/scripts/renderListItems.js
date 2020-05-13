import {getItem} from './storage.js'

export const renderListItems = () => {
  const taskList = getItem('tasksList') || [];
  const listElem = document.querySelector(".list");
  const listItemsElems = taskList
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }) => {
      const listItemElem = document.createElement("li");
      listItemElem.classList.add("list__item");

      if (done) listItemElem.classList.add("list__item-done");

      const checkboxElem = document.createElement("input");
      checkboxElem.setAttribute("type", "checkbox");
      checkboxElem.checked = done;
      checkboxElem.classList.add("list__item-checkbox");

      listItemElem.append(checkboxElem, text);

      return listItemElem;
    });
    listElem.innerHTML = "";
    listElem.append(...listItemsElems);
};

renderListItems();