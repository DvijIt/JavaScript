const pagesElems = document.querySelectorAll('.pagination__page');

function handleClick(event) {
  console.log(event.target.dataset.pageNumber);
}

pagesElems.forEach(pageElem => {
  pageElem.addEventListener('click', handleClick);
});
