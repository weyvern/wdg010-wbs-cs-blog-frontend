import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SinglePost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const getPost = async () => {
      try {
        const { data } = await axios.get(`${process.env.REACT_APP_BLOG_API}/posts/${id}`);
        setPost(data);
      } catch (error) {
        console.error(error);
      }
    };
    getPost();
  }, [id]);

  return post ? (
    <div>
      <h1>{post.title}</h1>
      <h4>{`By: ${post.author}`}</h4>
      <img src={post.image} alt={post.title} style={{ maxHeight: '500px' }} />
      <p>{post.body}</p>
    </div>
  ) : null;
};

export default SinglePost;
