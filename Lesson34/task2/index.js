const baseUrl = 'https://5ec377e28ebdcc0016a5a8e4.mockapi.io/api/v1/users'

const getUsersList = () => fetch(baseUrl).then(responce => responce.json());

const getUserById = userId => fetch(`${baseUrl}/${userId}`).then(responce => responce.json())

const createUser = userData => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(userData)
  })
}

const newUserData = {
  email: 'cool@email.com',
  firstName: 'Iron',
  lastName: 'Man',
  age: 42,
};

const deleteUser = userId => {
  return fetch(`${baseUrl}/${userId}`, {
    method: 'DELETE',
  });
}

// const updateUser = (userId, updateUserData) => {
//   return fetch(`${baseUrl}/${userId}`, {
//     method: 'PUT',
//     headers: {
//       'Content-type': 'application/json;charset=utf-8'
//     },
//     body: JSON.stringify(updateUserData)
//   })
// }
// const userUpdateData = {
//   email: 'new@email.com',
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 17,
// };








      