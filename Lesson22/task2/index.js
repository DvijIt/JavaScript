const divElement = document.querySelector(".rect_div");
const pElement = document.querySelector(".rect_p");
const spanElement = document.querySelector(".rect_span");
const eventsListElem = document.querySelector(".events-list");

const logTarget = (text, color) => {
  eventsListElem.innerHTML += `<span style="color: ${color}; margin-left: 8px;">${text}</span>`;
};

const logGreenDiv = logTarget.bind(null, "DIV", "green");
const logGreenP = logTarget.bind(null, "P", "green");
const logGreenSpan = logTarget.bind(null, "SPAN", "green");

const logGreyDiv = logTarget.bind(null, "DIV", "gray");
const logGrayP = logTarget.bind(null, "P", "gray");
const logGraySpan = logTarget.bind(null, "SPAN", "gray");

const attachHandlers = () => {
  divElement.addEventListener("click", logGreyDiv, true);
  divElement.addEventListener("click", logGreenDiv);
  pElement.addEventListener("click", logGrayP, true);
  pElement.addEventListener("click", logGreenP);
  spanElement.addEventListener("click", logGraySpan, true);
  spanElement.addEventListener("click", logGreenSpan);
};

const addBtn = document.querySelector(".attach-handlers-btn");
addBtn.addEventListener("click", attachHandlers);

const removeHandlers = () => {
  divElement.removeEventListener("click", logGreenDiv);
  divElement.removeEventListener("click", logGreyDiv, true);
  pElement.removeEventListener("click", logGreenP);
  pElement.removeEventListener("click", logGrayP, true);
  spanElement.removeEventListener("click", logGreenSpan);
  spanElement.removeEventListener("click", logGraySpan, true);
};

const removeBtn = document.querySelector(".remove-handlers-btn");
removeBtn.addEventListener("click", removeHandlers);

const clearField = () => {
  eventsListElem.innerHTML = "";
};

const clearBtn = document.querySelector(".clear-btn");
clearBtn.addEventListener("click", clearField);

document.addEventListener('DOMContentLoaded', () => {
  attachHandlers();
});
