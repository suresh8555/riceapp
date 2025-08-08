import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../store/context/AuthContext';

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleCartClick = () => {
    if (user) {
      navigate('/cart');
    } else {
      navigate('/auth');
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/auth');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm sticky-top py-2">
      <div className="container">
        {/* Logo */}
        <Link to="/" className="navbar-brand d-flex align-items-center gap-2">
          <div className="d-flex align-items-center gap-2 bg-success bg-opacity-25 px-3 py-1 rounded-pill">
            <span className="fs-4 fw-bold text-success">RICE</span>
            <img
              src="https://tse4.mm.bing.net/th/id/OIP.nw2jGA8PoDGhChvSkYk2-QHaF8?pid=Api&P=0&h=180"
              alt="logo"
              className="rounded"
              style={{ width: '30px', height: '30px' }}
            />
            <span className="fs-4 fw-bold text-success">WORLD</span>
          </div>
        </Link>

      
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#headerNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Content */}
        <div className="collapse navbar-collapse" id="headerNavbar">
          {/* Searchbar */}
          <form className="d-flex mx-auto my-2" style={{ maxWidth: '400px', flexGrow: 1 }}>
            <div className="input-group w-100">
              <span className="input-group-text bg-white">
                <i className="bi bi-search text-muted"></i>
              </span>
              <input
                type="text"
                className="form-control rounded-end"
                placeholder="Search rice varieties..."
              />
            </div>
          </form>

          {/* Icons Section */}
          <ul className="navbar-nav ms-auto d-flex align-items-center gap-3">
            {/* Cart */}
            <li className="nav-item">
              <i
                className="bi bi-cart4 fs-4 text-success"
                style={{ cursor: 'pointer' }}
                onClick={handleCartClick}
                title={user ? 'View Cart' : 'Login to View Cart'}
              ></i>
            </li>

            {/* Profile Dropdown */}
            <li className="nav-item dropdown">
              <i
                className="bi bi-person-circle fs-4 text-primary dropdown-toggle"
                id="profileDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              ></i>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="profileDropdown">
                <li><Link className="dropdown-item" to="/profile">👤 My Profile</Link></li>
                <li><Link className="dropdown-item" to="/orders">📦 My Orders</Link></li>
                <li><button className="dropdown-item text-danger" onClick={handleLogout}>🚪 Logout</button></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
