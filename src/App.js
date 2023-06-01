import { Outlet, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import NavBar from './components/NavBar';
import GlobalLayout from './components/GlobalLayout';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import SinglePost from './components/SinglePost';
import CreatePost from './components/CreatePost';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <ToastContainer />
      <NavBar />
      <Routes>
        <Route path='/' element={<GlobalLayout />}>
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='posts/:id' element={<SinglePost />} />
          <Route path='secret' element={<Outlet />}>
            <Route path='create' element={<CreatePost />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
