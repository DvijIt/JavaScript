export const setButton = buttonText => {
  const buttonString = `<button>${buttonText}</button>`;
  document.querySelector('body').innerHTML = buttonString;
};
