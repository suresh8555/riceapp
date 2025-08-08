import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { name: 'Home', path: '/home', icon: 'bi-house' },
    { name: 'Products', path: '/products', icon: 'bi-box-seam' },
    { name: 'Orders', path: '/orders', icon: 'bi-cart-check' },
    { name: 'Billings', path: '/billings', icon: 'bi-receipt' },
    { name: 'Users', path: '/users', icon: 'bi-people' },
  ];

  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 bg-white shadow-sm min-vh-100"
      style={{ width: '250px' }}
    >
      <Link
        to="/"
        className="d-flex align-items-center mb-4 text-decoration-none text-dark"
      >
        <span className="fs-4 fw-bold">📊 Dashboard</span>
      </Link>
      <hr />
      <ul className="nav nav-pills flex-column gap-2">
        {menuItems.map(({ name, path, icon }) => (
          <li className="nav-item" key={name}>
            <Link
              to={path}
              className={`nav-link d-flex align-items-center gap-2 px-3 py-2 rounded ${
                location.pathname === path ? 'active bg-success text-white' : 'link-dark'
              }`}
            >
              <i className={`bi ${icon} fs-5`}></i>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
