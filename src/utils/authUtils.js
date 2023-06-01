export const getUser = async token => {
  // Implement the logic to get the user info after sending the token in the authorization header
  const user = { firstName: 'Jorge', lastName: 'Paul' };
  return user;
};

export const registerUser = async formData => {
  // Implement the logic to get a token after signup
  return { token: '12345' };
};

export const loginUser = async formData => {
  // Implement the logic to get a token after login
  return { token: '12345' };
};
