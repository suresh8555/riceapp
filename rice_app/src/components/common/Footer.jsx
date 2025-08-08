
import React from 'react';
import Link from 'antd/es/typography/Link';


const Footer = () => {
  return (
    <footer className="footer text-white my-5 pb-4">
      <div className="footer-overlay">
        <div className="container">
          <div className="row">

         
            <div className="col-md-4 col-sm-12 mb-4">
              <h5 className="footer-title">About Rice-World</h5>
              <hr className="bg-light" />
              <p>
                Welcome to Rice-World, your one-stop destination for everyday needs!<br />
                We’re more than just an online store – we bring quality, affordability,<br />
                and convenience right to your doorstep.
              </p>
            </div>

          
            <div className="col-md-2 col-sm-6 mb-4">
              <h5 className="footer-title">Quick Links</h5>
              <nav className="nav flex-column">
                <Link className="nav-link text-white p-0 mb-2" to="/">Home</Link>
                <Link className="nav-link text-white p-0 mb-2" to="/products">Products</Link>
                <Link className="nav-link text-white p-0 mb-2" to="/recipes">Recipes</Link>
                <Link className="nav-link text-white p-0" to="/blogs">Blogs</Link>
              </nav>
            </div>

            
            <div className="col-md-3 col-sm-6 mb-4">
              <h5 className="footer-title">Shop Now</h5>
              <ul className="list-unstyled">
                <li>Collections</li>
                <li>Trending Products</li>
                <li>New Arrivals</li>
                <li>Featured Products</li>
                <li>Sitemaps</li>
              </ul>
            </div>

           
            <div className="col-md-3 col-sm-12">
              <h5 className="footer-title">Connect With Us</h5>
              <p>📧 support@riceworld.com</p>
              <p>📞 +91-9876543980</p>
              <p>📍 Hyderabad, India</p>

              <h6 className="mt-3">💬 Follow us on:</h6>
              <div className="d-flex gap-3 mt-2 social-icons">
                <i className="bi bi-facebook"></i>
                <i className="bi bi-twitter-x"></i>
                <i className="bi bi-youtube"></i>
                <i className="bi bi-instagram"></i>
                <i className="bi bi-tiktok"></i>
              </div>
            </div>

          </div>
          <hr className="bg-light" />
          <p className="text-center mb-0">© 2025 Rice-World. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

