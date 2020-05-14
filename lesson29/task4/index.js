export const requestUserData = (userId, callback) => {
  setTimeout(()=> {
    if (userId === 'broken') {
      callback(null, 'Failed to load user data');
      return;
    };
    
    callback({
      userId,
      email: `${userId}@example.com`
    });
  }, Math.floor(Math.random() * 3 + 1) * 1000);
  
}

// console.log(requestUserData('user777'));
