export const setAuthToken = (userData) => {
  // http://localhost:5000
  // save user in db and get token
  fetch(`http://localhost:5000/users/${userData?.email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(userData),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      // save token to local storage
      localStorage.setItem("motocross-token", data.token);
    });
};
