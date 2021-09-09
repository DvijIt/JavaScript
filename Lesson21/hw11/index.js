export const squaredNumbers = () => {
  Array.from(document.querySelectorAll('.number')).forEach(elem => {
    const number = elem.dataset.number;
    elem.dataset.squaredNumber = number ** 2;
  });
};
