import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createPost } from '../utils/postsUtils';

const CreatePost = () => {
  const [{ title, image, body }, setFormState] = useState({
    title: '',
    image: '',
    body: ''
  });

  const navigate = useNavigate();

  const handleChange = e => setFormState(prev => ({ ...prev, [e.target.id]: e.target.value }));

  const handleSubmit = async e => {
    try {
      e.preventDefault();
      if (!title || !image || !body) return alert('Please fill out all the fields');
      const data = await createPost({ title, image, body });
      navigate(`/posts/${data._id}`, { replace: true });
    } catch (error) {
      toast.error(error.response?.data.error || error.message);
    }
  };

  return (
    <div className='row justify-content-center'>
      <div className='col-md-4'>
        <form className='form-signin' onSubmit={handleSubmit}>
          <label htmlFor='inputEmail' className='sr-only'>
            Title
          </label>
          <input id='title' className='form-control' placeholder='Title' value={title} onChange={handleChange} />
          <label htmlFor='inputPassword' className='sr-only'>
            Image
          </label>
          <input id='image' className='form-control' placeholder='Image URL' value={image} onChange={handleChange} />
          <label htmlFor='inputPassword' className='sr-only'>
            Image
          </label>
          <textarea id='body' className='form-control' placeholder='Body' value={body} onChange={handleChange} rows={10} />
          <button className='btn btn-lg btn-primary btn-block mt-3' type='submit'>
            Create post
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
