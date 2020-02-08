const sortContacts = (contacts, isAsc = true) => {
  if (!(Array.isArray(contacts))) {
    return null;
  }
  const result = contacts.sort((a, b) => {
    if (isAsc) {
      return a.name.localeCompare(b.name)
    }
    else {
      return b.name.localeCompare(a.name)
    }
  });
  return result;
}

// const contacts = [
//   { name: 'Tom', phoneNumber: '777-77-77' },
//   { name: 'Ann', phoneNumber: '777-77-74' }
// ]
// console.log(sortContacts(contacts))