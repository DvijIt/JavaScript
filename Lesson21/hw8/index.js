export const finishList = () => {
  const listElem = document.querySelector('.list');

  const itemOne = document.createElement('li');
  itemOne.textContent = 1;
  listElem.prepend(itemOne);

  const itemEight = document.createElement('li');
  itemEight.textContent = 8;
  listElem.append(itemEight);

  const specialElem = document.querySelector('.special');

  const itemFour = document.createElement('li');
  itemFour.textContent = 4;
  specialElem.before(itemFour);

  const itemSix = document.createElement('li');
  itemSix.textContent = 6;
  specialElem.after(itemSix);
};
