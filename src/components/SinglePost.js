import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getPost } from '../utils/postsUtils';
import useWidth from '../utils/useWidth';

const SinglePost = () => {
  const windowWidth = useWidth();
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

  const getStyle = useMemo(
    () => (windowWidth < 1000 ? { maxWidth: '100%', height: 'auto' } : { maxHeight: '500px', marginX: 'auto' }),
    [windowWidth]
  );

  return post ? (
    <>
      <div className='text-center'>
        <h1>{post.title}</h1>
        <h4>{`By: ${post.author.firstName} ${post.author.lastName}`}</h4>
        <img src={post.image} alt={post.title} style={getStyle} />
      </div>
      <div className='mt-5' style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
        {post.body}
      </div>
    </>
  ) : null;
};

export default SinglePost;
