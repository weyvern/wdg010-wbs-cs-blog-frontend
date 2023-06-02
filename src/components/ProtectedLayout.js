import { Navigate, Outlet } from 'react-router-dom';

const ProtectedLayout = ({ isAuthenticated }) => {
  return isAuthenticated ? <Outlet /> : <Navigate to='/login' />;
};

export default ProtectedLayout;
