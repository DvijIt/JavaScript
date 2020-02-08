const sortContacts = (contacts, isAsc = true) => {
  if (!(Array.isArray(contacts))) {
    return null;
  }
  if (isAsc) {
    const result = contacts.sort((a, b) => {
      return a.name.localeCompare(b.name)
    });
  }
  else {
    const result = contacts.sort((a, b) => {
      return b.name.localeCompare(a.name)
    });
  }
  return result;
}