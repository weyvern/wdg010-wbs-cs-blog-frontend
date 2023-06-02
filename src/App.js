import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import NavBar from './components/NavBar';
import GlobalLayout from './components/GlobalLayout';
import ProtectedLayout from './components/ProtectedLayout';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import SinglePost from './components/SinglePost';
import CreatePost from './components/CreatePost';
import { toast } from 'react-toastify';
import { getUser } from './utils/authUtils';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const validateToken = async () => {
      try {
        setLoading(true);
        const user = await getUser(token);
        setUser(user);
        setIsAuthenticated(true);
        setLoading(false);
      } catch (error) {
        toast.error(error.message);
        localStorage.removeItem('token');
        setToken(null);
        setLoading(false);
      }
    };
    token && validateToken();
  }, [token]);

  const logOut = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <>
      <ToastContainer />
      <NavBar isAuthenticated={isAuthenticated} user={user} logOut={logOut} />
      <Routes>
        <Route path='/' element={<GlobalLayout />}>
          <Route index element={<Home />} />
          <Route
            path='login'
            element={
              <Login
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
                loading={loading}
                setLoading={setLoading}
                setToken={setToken}
              />
            }
          />
          <Route
            path='register'
            element={
              <Register
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
                loading={loading}
                setLoading={setLoading}
                setToken={setToken}
              />
            }
          />
          <Route path='posts/:id' element={<SinglePost />} />
          <Route path='secret' element={<ProtectedLayout isAuthenticated={isAuthenticated} />}>
            <Route path='create' element={<CreatePost />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
