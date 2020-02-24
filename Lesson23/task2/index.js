const tasks = [
  { text: "Buy milk", done: false },
  { text: "Pick up Tom from airport", done: false },
  { text: "Visit party", done: false },
  { text: "Visit doctor", done: true },
  { text: "Buy meat", done: true }
];
const listElem = document.querySelector(".list");
const taskInput = document.querySelector(".task-input");
const taskCreateBtn = document.querySelector(".task-create-btn");

const renderListItems = listItems => {
  const listItemsElems = listItems
    .sort((a, b) => a.date - b.date)
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }) => {
      const listItemElem = document.createElement("li");
      listItemElem.classList.add("list__item");
      if (done) {
        listItemElem.classList.add("list__item-done");
      }
      const checkboxElem = document.createElement("input");
      checkboxElem.setAttribute("type", "checkbox");
      checkboxElem.checked = done;
      checkboxElem.classList.add("list__item-checkbox");
      checkboxElem.addEventListener("click", event => {
        const resultItem = tasks.find(
          item => item.text === event.target.parentNode.innerText
        );
        resultItem.done = event.target.checked;
        listElem.innerHTML = "";
        renderListItems(tasks);
      });

      listItemElem.append(checkboxElem, text);

      return listItemElem;
    });
  listElem.append(...listItemsElems);
};

renderListItems(tasks);

const createElem = () => {
  if (taskInput.value === "") return false;
  tasks.push({
    text: taskInput.value,
    done: false,
    date: new Date()
  });
  listElem.innerHTML = "";

  renderListItems(tasks);
  taskInput.value = "";
};
taskCreateBtn.addEventListener("click", createElem);
