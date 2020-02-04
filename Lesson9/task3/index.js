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
  const obj = Object.values(usersObject);
  obj.map( (el, index) => el.id = Object.keys(usersObject)[index]);
  obj.sort((a, b) => a.age - b.age);
  return obj;
}

// console.log(getCustomersList(customers));
// console.log(customers);