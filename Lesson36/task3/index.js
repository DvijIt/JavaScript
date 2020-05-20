 const getUsersBlogs = async usersList => {
    const requests = usersList
        .map(userId => fetch(`https://api.github.com/users/${userId}`)
            .then(responce => {
                if (responce.ok) return responce.json();
                throw new Error('Failed to load data');
            }));
    const usersData = await Promise.all(requests);
    const usersBlogs = usersData.map(user => user.blog);
    return usersBlogs

}

// getUsersBlogs(['facebook', 'google']).then(data => console.log(data))

