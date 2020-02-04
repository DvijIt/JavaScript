const getAdults = userObject =>
  Object.entries(userObject)
        .filter(user => user[1] >= 18)
        .map(user => user[0]);