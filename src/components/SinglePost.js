import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getPost } from '../utils/postsUtils';

const SinglePost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await getPost(id);
        setPost(data);
      } catch (error) {
        toast.error(error.response?.data.error || error.message);
      }
    })();
  }, [id]);

  return post ? (
    <div>
      <h1>{post.title}</h1>
      <h4>{`By: ${post.author.firstName} ${post.author.lastName}`}</h4>
      <img src={post.image} alt={post.title} style={{ maxHeight: '500px' }} />
      <p>{post.body}</p>
    </div>
  ) : null;
};

export default SinglePost;
