function getUserData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = {
          name: 'pavani',
          age: 23,
          email: 'example.com'
        };
        if (user) {
          resolve(user);
        } else {
          reject('Error: User not found');
        }
      }, 2000);
    });
  }
  
  getUserData()
    .then((user) => {
      console.log('User:', user);
    })
    .catch((error) => {
      console.log('Error:', error);
    });