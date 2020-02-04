const getCustomersList = usersObject => {
  const obj = Object.values(usersObject);
  obj.map( (el, index) => el.id = Object.keys(usersObject)[index]);
  obj.sort((a, b) => a.age - b.age);
  return obj;
}