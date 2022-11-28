export const setAuthToken = (userData) => {
  // https://server-nine-black.vercel.app
  // save user in db and get token
  fetch(`https://server-nine-black.vercel.app/users/${userData?.email}`, {
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
