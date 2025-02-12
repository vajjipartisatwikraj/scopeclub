import React from 'react';

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">     
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;
