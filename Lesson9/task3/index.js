const customers = {
  'customer-id-1': {
    name: 'William',
    age: 54
  },
  'customer-id-2': {
    name: 'Tom',
    age: 17
  }
};

const getCustomersList = usersObject => {
  const obj = Object.assign({}, usersObject);
  const arr = Object.values(obj);
  arr.map( (el, index) => el.id = Object.keys(obj)[index]);
  arr.sort((a, b) => a.age - b.age);
  console.log(obj)
  console.log(usersObject)
  return arr;
}

console.log(getCustomersList(customers));
// console.log(customers);