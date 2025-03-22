import {React, useEffect, useState, useRef} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {

  const [showNavbar, setShowNavbar] = useState(true);
  let lastScrollY = window.scrollY;
  const navbarCollapseRef = useRef(null);
  const navbarTogglerRef = useRef(null);

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

  const closeNavbar = () => {
    if (window.innerWidth < 992 && navbarCollapseRef.current && navbarCollapseRef.current.classList.contains('show')) {
      navbarTogglerRef.current.click();
    }
  };

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
            ref={navbarTogglerRef}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse order-lg-3" id="navbarSupportedContent" ref={navbarCollapseRef}>
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 nav-bar d-flex justify-content-around">
              <li className="nav-item">
                <Link className="nav-link active" to="/" onClick={closeNavbar}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/teams" onClick={closeNavbar}>Team</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/events" onClick={closeNavbar}>Events</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/resources" onClick={closeNavbar}>Resources</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact" onClick={closeNavbar}>Contact Us</Link>
              </li>
            </ul>
            <form className="d-flex order-lg-4 justify-content-center" role="search">
              <a href="https://linktr.ee/mlritscope" target="_blank" rel="noopener noreferrer" className="linktree" onClick={closeNavbar}>
                <button className="btn btn-outline-success joinus-btn" type="button">
                  Join Us
                </button>
              </a>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
