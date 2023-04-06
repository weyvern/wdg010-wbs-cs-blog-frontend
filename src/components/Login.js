import { useState } from 'react';
import { toast } from 'react-toastify';
import { loginUser } from '../utils/authUtils';

const Login = () => {
  const [{ email, password }, setFormState] = useState({
    email: '',
    password: ''
  });

  const handleChange = e => setFormState(prev => ({ ...prev, [e.target.id]: e.target.value }));

  const handleSubmit = async e => {
    try {
      e.preventDefault();
      if (!email || !password) return toast.error('Please fill out all the fields');
      const token = await loginUser({ email, password });
      console.log(token);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className='row justify-content-center'>
      <div className='col-md-4'>
        <form className='form-signin' onSubmit={handleSubmit}>
          <label htmlFor='inputEmail' className='sr-only'>
            Email address
          </label>
          <input type='email' id='email' className='form-control' placeholder='Email address' value={email} onChange={handleChange} />
          <label htmlFor='inputPassword' className='sr-only'>
            Password
          </label>
          <input type='password' id='password' className='form-control' placeholder='Password' value={password} onChange={handleChange} />
          <button className='btn btn-lg btn-primary btn-block mt-3' type='submit'>
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
