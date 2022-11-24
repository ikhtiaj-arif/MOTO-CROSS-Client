export const setAuthToken = (user) => {
    const currentUser = {
      email: user.email,
    }
  // http://localhost:5000
    // save user in db and get token 
    fetch(`http://localhost:5000/users/${user?.email}`, {
      method: "PUT",
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(currentUser)
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data);
      // save token to local storage
      localStorage.setItem('motocross-token', data.token)
    })
  
  
  };