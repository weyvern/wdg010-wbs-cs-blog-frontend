import axios from 'axios';

export const getPosts = async () => {
  const { data } = await axios.get(`${process.env.REACT_APP_BLOG_API}/posts`);
  return data;
};

export const getPost = async id => {
  const { data } = await axios.get(`${process.env.REACT_APP_BLOG_API}/posts/${id}`);
  return data;
};

export const createPost = async ({ title, image, body }) => {
  const { data } = await axios.post(
    `${process.env.REACT_APP_BLOG_API}/posts`,
    {
      title,
      image,
      body
    },
    {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    }
  );
  return data;
};
