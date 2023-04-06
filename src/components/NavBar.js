import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-light'>
      <div className='container-fluid'>
        <Link to='/' className='navbar-brand'>
          Dear diary
          <span role='img' aria-label='book'>
            📖
          </span>
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link to='/login' className='nav-link'>
                <span data-bs-target='#navbarNav' data-bs-toggle='collapse'>
                  Login
                </span>
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/register' className='nav-link'>
                <span data-bs-target='#navbarNav' data-bs-toggle='collapse'>
                  Register
                </span>
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/secret/create' className='nav-link'>
                <span data-bs-target='#navbarNav' data-bs-toggle='collapse'>
                  Create post
                </span>
              </Link>
            </li>
            <li className='nav-item'>
              <p className='nav-link' style={{ cursor: 'pointer' }}>
                <span data-bs-target='#navbarNav' data-bs-toggle='collapse'>
                  Logout
                </span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
