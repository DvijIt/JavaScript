export const fetchUser = async userId => {
  try {
    const responce = await fetch(`https://api.github.com/users/${userId}`);
    if (!responce.ok) {
      return null
    }
    const userData = await responce.json();
    return userData;
  } catch (err) {
    throw new Error('Failed to fetch user')
  }
};

fetchUser('facebook')
  .then(userData => console.log(userData))
  .catch(err => alert(err.message));