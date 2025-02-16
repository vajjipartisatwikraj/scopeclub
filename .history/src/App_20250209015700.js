import React from 'react';

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid d-flex justify-content-center">
          <a className="navbar-brand order-lg-1" href="/">Navbar</a>
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
          <div className="collapse navbar-collapse order-lg-3 nav-bar" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Team</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Events</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Gallery</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Contact Us</a>
              </li>
            </ul>
            <form className="d-flex order-lg-4" role="search">
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;
