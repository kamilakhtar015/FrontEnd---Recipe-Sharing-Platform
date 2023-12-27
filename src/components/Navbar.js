import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-green" style={{backgroundColor: "#008000"}}> {/* Change background color to green */}
        <div className="container-fluid">
          <Link className="navbar-brand" href="#">Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto"> {/* Add spacing for right alignment */}
              <Link to="/" className="me-3">Home</Link> {/* Add spacing between links */}
              <Link to="/login" className="me-3">Login</Link>
              <Link to="/signup" className="me-3">Sign Up</Link>
              <Link to="/explore">Explore</Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
