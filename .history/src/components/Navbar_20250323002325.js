import {React, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {

  const [showNavbar, setShowNavbar] = useState(true);
  let lastScrollY = window.scrollY;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false); // Hide on scroll down
      } else {
        setShowNavbar(true); // Show on scroll up
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`NAVBAR ${showNavbar ? "visible" : "hidden"}`}>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid d-flex">
          <div className="scope-logo"></div>
          <button
            className="navbar-toggler order-lg-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse order-lg-3" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 nav-bar d-flex justify-content-around">
              <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/teams">Team</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/events">Events</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/resources">Resources</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact Us</Link>
              </li>
              <a href="https://linktr.ee/mlritscope" target="_blank" rel="noopener noreferrer" className="linktree">
                <button className="btn btn-outline-success joinus-btn" type="button">
                  Join Us
                </button>
              </a>
            </ul>
            <form className="d-flex order-lg-4 justify-content-center" role="search">
              
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
