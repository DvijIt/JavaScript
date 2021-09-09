const btnElem = document.querySelector('.single-use-btn');

function handleClick() {
  console.log('clicked');
  btnElem.removeEventListener('click', handleClick);
}

btnElem.addEventListener('click', handleClick);
