// const divElem = document.querySelector('div');
// const pElem = document.querySelector('p');
// const spanElem = document.querySelector('span');
// const eventsListElem = document.querySelector('.events-list');
//
// const logEvent = (text, color) => {
//   const spanElem = document.createElement('span');
//   spanElem.style = `color: ${color}; margin-left: 8px;`;
//   spanElem.textContent = text;
//   eventsListElem.appendChild(spanElem);
// };
//
// const logGreenDiv = logEvent.bind(null, 'div', 'green');
// const logGreyDiv = logEvent.bind(null, 'div', 'grey');
//
// const logGreenP = logEvent.bind(null, 'p', 'green');
// const logGreyP = logEvent.bind(null, 'p', 'grey');
//
// const logGreenSpan = logEvent.bind(null, 'span', 'green');
// const logGreySpan = logEvent.bind(null, 'span', 'grey');
//
// const attachHandlers = () => {
//   divElem.addEventListener('click', logGreyDiv, true);
//   divElem.addEventListener('click', logGreenDiv);
//   pElem.addEventListener('click', logGreyP, true);
//   pElem.addEventListener('click', logGreenP);
//   spanElem.addEventListener('click', logGreySpan, true);
//   spanElem.addEventListener('click', logGreenSpan);
// };
//
// const attachHandlersBtnElem = document.querySelector('.attach-handlers-btn');
// attachHandlersBtnElem.addEventListener('click', attachHandlers);
//
// const removeHandlers = () => {
//   divElem.removeEventListener('click', logGreenDiv);
//   divElem.removeEventListener('click', logGreyDiv, true);
//   pElem.removeEventListener('click', logGreenP);
//   pElem.removeEventListener('click', logGreyP, true);
//   spanElem.removeEventListener('click', logGreenSpan);
//   spanElem.removeEventListener('click', logGreySpan, true);
// };
//
// const removeHandlersBtnElem = document.querySelector('.remove-handlers-btn');
// removeHandlersBtnElem.addEventListener('click', removeHandlers);
//
// const clearBoard = () => {
//   eventsListElem.innerHTML = '';
// };
//
// const clearBtnElem = document.querySelector('.clear-btn');
// clearBtnElem.addEventListener('click', clearBoard);
//
// document.addEventListener('DOMContentLoaded', () => {
//   attachHandlers();
// });


const divElement = document.querySelector("div");
const pElement = document.querySelector("p");
const spanElement = document.querySelector("span");
const clearBtn = document.querySelector(".clear-btn");
const removeBtn = document.querySelector(".remove-handlers-btn");
const addBtn = document.querySelector(".attach-handlers-btn");
const eventsListElem = document.querySelector(".events-list");

const logTarget = (text, color) => {
  eventsListElem.innerHTML += `<span style="color: ${color}; margin-left:8px;">${text}</span>`;
};

const clearField = () => {
  eventsListElem.innerHTML = "";
};

const logGreenDiv = logTarget.bind(null, "DIV", "green");
const logGreenP = logTarget.bind(null, "P", "green");
const logGreenSpan = logTarget.bind(null, "SPAN", "green");

const logGreyDiv = logTarget.bind(null, "DIV", "gray");
const logGrayP = logTarget.bind(null, "P", "gray");
const logGraySpan = logTarget.bind(null, "SPAN", "gray");

const removeHandlers = () => {
  divElement.removeEventListener("click", logGreenDiv);
  pElement.removeEventListener("click", logGreenP);
  spanElement.removeEventListener("click", logGreenSpan);

  divElement.removeEventListener("click", logGreyDiv, true);
  pElement.removeEventListener("click", logGrayP, true);
  spanElement.removeEventListener("click", logGraySpan, true);
};

const attachHandlers = () => {
  divElement.addEventListener("click", logGreenDiv);
  pElement.addEventListener("click", logGreenP);
  spanElement.addEventListener("click", logGreenSpan);

  divElement.addEventListener("click", logGreyDiv, true);
  pElement.addEventListener("click", logGrayP, true);
  spanElement.addEventListener("click", logGraySpan, true);
};
document.addEventListener("DOMContentLoaded", function () {
  attachHandlers();
});

clearBtn.addEventListener("click", clearField);
removeBtn.addEventListener("click", removeHandlers);
addBtn.addEventListener("click", attachHandlers);

