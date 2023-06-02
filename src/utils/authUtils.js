import axios from 'axios';

export const getUser = async token => {
  const { data } = await axios.get(`${process.env.REACT_APP_BLOG_API}/auth/me`, { headers: { Authorization: token } });
  return data;
};

export const registerUser = async formData => {
  const { data } = await axios.post(`${process.env.REACT_APP_BLOG_API}/auth/signup`, formData);
  return data;
};

export const loginUser = async formData => {
  const { data } = await axios.post(`${process.env.REACT_APP_BLOG_API}/auth/signin`, formData);
  return data;
};
