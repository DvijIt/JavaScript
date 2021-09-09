export const manageClasses = () => {
  const firstElem = document.querySelector('.one');
  const secondElem = document.querySelector('.two');
  const thirdElem = document.querySelector('.three');
  const fourthElem = document.querySelector('.four');

  firstElem.classList.add('selected');
  secondElem.classList.remove('selected');
  thirdElem.classList.toggle('three_done');

  if (fourthElem.classList.contains('some-class')) {
    fourthElem.classList.add('another-class');
  }
};
