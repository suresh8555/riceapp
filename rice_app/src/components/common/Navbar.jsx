import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { Repeat } from 'lucide-react';
import { useAuth, AuthContext } from '../../store/context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();

  const navigate = useNavigate();

  const handleMenuClick = ({ key }) => {
    if (key === 'logout') {
      logout(); // <-- this now properly clears storage + redirects
    } else {
      navigate(`/${key}`);
    }
  };


  const handleCartClick = () => {
    if (user) {
      navigate('/cart');
    } else {
      navigate('/auth');
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm sticky-top">
      <div className="container">
        {/* <div style={{background:"green", color:"white",borderRadius:"20px"}}>
          <img src="https://tse4.mm.bing.net/th/id/OIP.nw2jGA8PoDGhChvSkYk2-QHaF8?pid=Api&P=0&h=180" alt="" style={{gap:"5px",width:"70px",margin:"4px",borderRadius:"20px"}}/>
        <Link className="navbar-brand fw-bold text-success" to="/">RICE WORLD</Link>

        </div> */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            background: "rgba(46, 125, 50, 0.2)",
            padding: "8px 16px",
            borderRadius: "30px",
            cursor: "pointer",
            transition: "background 0.3s ease",
          }}
          onMouseEnter={e => e.currentTarget.style.background = "rgba(46, 125, 50, 0.35)"}
          onMouseLeave={e => e.currentTarget.style.background = "rgba(46, 125, 50, 0.2)"}
        >
          <span
            style={{
              fontSize: "1.8rem",
              fontWeight: "800",
              color: "#2E7D32",
              display: "flex",
              alignItems: "center",
              position: "relative",
            }}
          >
            RICE
            <img
              src="https://tse4.mm.bing.net/th/id/OIP.nw2jGA8PoDGhChvSkYk2-QHaF8?pid=Api&P=0&h=180"
              alt="Rice‑World"
              style={{
                width: "1.6em",
                height: "1.6em",
                margin: "0 0.15em",
                verticalAlign: "middle",
                transition: "transform 0.4s ease",
                borderRadius: "10px"
              }}


              onMouseOver={e => e.currentTarget.style.transform = "scale(1.2)"}
              onMouseOut={e => e.currentTarget.style.transform = "scale(1)"}
            />
            WORLD
          </span>
        </div>



        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 text-center">
            <li className="nav-item px-2">
              <Link className="nav-link" to="/home">Home</Link>
            </li>
            <li className="nav-item px-2">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item px-2">
              <Link className="nav-link" to="/contact">Contact Us</Link>
            </li>
            <li className="nav-item px-2">
              <Link className="nav-link" to="/blog">Blogs</Link>
            </li>
            <li className="nav-item px-2">
              <Link className="nav-link" to="/shop">Shop</Link>
            </li>
            

          </ul>

          <div className="d-flex align-items-center gap-3">
            <Link to={'/vendor'} className="btn btn-outline-success">Become a Dealer</Link>
            
            <Link to={"/cart"}> <FaShoppingCart className="text-dark fs-4 cart-icon"/></Link>

            <div className="profile-dropdown">
              <div className="d-flex align-items-center gap-2 profile-trigger">
                <i className="bi bi-person-circle fs-3 text-primary" onClick={handleCartClick} title={user ? 'View Cart' : 'Login to View Cart'}></i>
                <div>
                  <strong className="text-dark">Kethavath Suresh</strong>
                  <p className="mb-0 text-muted" style={{ fontSize: '0.8rem' }}>View Profile</p>
                </div>
              </div>

              <div className="dropdown-menu-custom">
                <Link to="/profile" className="dropdown-item">👤 My Profile</Link>
                <Link to="/orders" className="dropdown-item">📦 My Orders</Link>
                <Link to="/logout" className="dropdown-item">🚪 Logout</Link>
              </div>
            </div>

            <Link to={'/auth'} className="btn btn-outline-success">Login/Register</Link>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;









// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { Avatar, Dropdown, Menu ,Badge} from 'antd';
// import {
//   UserOutlined,
//   LogoutOutlined,
//   OrderedListOutlined,
//   ShoppingCartOutlined,
// } from '@ant-design/icons';
// import { AuthContext, useAuth } from "../../store/context/AuthContext";

// const Navbar = () => {
// const { user, logout } = useAuth();

//   const navigate = useNavigate();

// const handleMenuClick = ({ key }) => {
//   if (key === 'logout') {
//     logout(); // <-- this now properly clears storage + redirects
//   } else {
//     navigate(`/${key}`);
//   }
// };


//   const dropdownMenu = (
//     <Menu onClick={handleMenuClick}>
//       <Menu.Item key="profile" icon={<UserOutlined />}>
//         Profile
//       </Menu.Item>
//       <Menu.Item key="orders" icon={<OrderedListOutlined />}>
//         Orders
//       </Menu.Item>
//       <Menu.Item key="logout" icon={<LogoutOutlined />}>
//         Logout
//       </Menu.Item>
//     </Menu>
//   );

//   const handleCartClick = () => {
//     if (user) {
//       navigate('/cart');
//     } else {
//       navigate('/auth');
//     }
//   };

//   return (
//     <nav className="navbar navbar-expand-lg shadow bg-dark navbar-dark px-4">
//       <div className="container-fluid">
//         <Link to="/" className="navbar-brand d-flex align-items-center">
//           <img src="/assets/rice.png" alt="logo" height="40" className="me-2" />
//           <h4 className="m-0 text-light fw-bold">
//             Rice<span className="text-warning">Mart</span>
//           </h4>
//         </Link>

//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarMenu"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <Link to="/home"></Link>

//         <div className="collapse navbar-collapse" id="navbarMenu">
//           {/* Center nav links */}
//           <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
//             {['Home', 'About', 'Shop', 'Contact'].map((item) => (
//               <li className="nav-item" key={item}>
//                 <Link
//                   to={`/${item.toLowerCase()}`}
//                   className="nav-link fw-bold fs-5 text-light"
//                 >
//                   {item}
//                 </Link>
//               </li>
//             ))}
//           </ul>


//             {/* Cart Icon */}
// <Badge count={0} offset={[0, 0]} size="small" color='white'>
//   <span
//     className="text-light fs-4 me-3"
//     style={{ cursor: 'pointer' }}
//     onClick={handleCartClick}
//     title={user ? 'View Cart' : 'Login to View Cart'}
//   >
//     <ShoppingCartOutlined />
//   </span>
// </Badge>

//           {/* Right side actions */}
//           <div className="d-flex align-items-center">
//             {/* Dealer CTA */}
//             <Link to="/dealer-register" className="btn btn-warning me-3">
//               Become a Dealer
//             </Link>


//             {/* User Section */}
//             {user ? (
//               <Dropdown overlay={dropdownMenu} placement="bottomRight" trigger={['click']}>
//                 <Avatar
//                   icon={<UserOutlined />}
//                   style={{ backgroundColor: 'green', cursor: 'pointer' }}
//                 />
//               </Dropdown>
//             ) : (
//               <Link to="/auth" className="btn btn-outline-light">
//                 Login / Register
//               </Link>
//             )}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;















