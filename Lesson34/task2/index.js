const baseUrl = 'https://5ec377e28ebdcc0016a5a8e4.mockapi.io/api/v1/users'

export const getUsersList = () => {
  return fetch(baseUrl).then(responce => responce.json());
}

export const getUserById = userId => {
  return fetch(`${baseUrl}/${userId}`).then(responce => responce.json());
}

export const createUser = userData => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(userData)
  })
}

export const updateUser = (userId, updateUserData) => {
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
    