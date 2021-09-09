export const getItemsList = () => {
  const elemsList = document.querySelectorAll('.technology');
  console.dir(elemsList);

  return elemsList;
};

export const getItemsArray = () => {
  const elemsList = document.querySelectorAll('.tool');
  const elemsArray = Array.from(elemsList);
  console.dir(elemsArray);

  return elemsArray;
};
