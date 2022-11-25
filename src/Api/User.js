

// get user role
export const getRole = async (email) => {
  const url = `http://localhost:5000/users/${email}`;
  const res = await fetch(url);
  const data = await res.json();
  const userRole = data?.role;
  return userRole;
};
