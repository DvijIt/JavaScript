function getOwnProps(obj) {
  const objProps = [];
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop) && typeof obj[prop] !== "function") {
      objProps.push(prop);
    }
  }
  return objProps;
}
export { getOwnProps };
