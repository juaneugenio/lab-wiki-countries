import React from 'react';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <a className="navbar-brand" href="/">
            <strong>WikiCountries</strong>
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
