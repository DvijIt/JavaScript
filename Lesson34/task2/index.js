const baseUrl = 'https://5ec377e28ebdcc0016a5a8e4.mockapi.io/api/v1/users'

export const getUsersList = () => {
  return fetch(baseUrl).then(responce => responce.json());
}

export const getUserById = userId => {
  return fetch(`${baseUrl}/${userId}`).then(responce => responce.json());
}
const newUserData = {
  email: 'cool@email.com',
  firstName: 'Iron',
  lastName: 'Man',
  age: 42,
};
export const createUser = userData => {
  userData = newUserData;
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(userData)
  })
}

const updatedUserData = {
  email: 'new@email.com',
  firstName: 'John',
  lastName: 'Doe',
  age: 17,
};
export const updateUser = (userId, updateUserData) => {
  updateUserData = updatedUserData;
  return fetch(`${baseUrl}/${userId}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(updateUserData)
  })
}

export const deleteUser = userId => {
  return fetch(`${baseUrl}/${userId}`, {
    method: 'DELETE',
  });
}
    