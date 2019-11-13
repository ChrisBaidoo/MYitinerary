import React from "react";

// navbar-default navbar-light bg-light
// className="sr-only">(current) nav-tabs

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark ">
      <button
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#myDropDown"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="myDropDown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link text-white" href="">
              <i className="fas fa-home"></i>Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="">
              <i className="far fa-user-circle"></i> Login
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="/">
              <i className="fas fa-user-plus"></i>Sign up
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="/">
              <i className="fas fa-city"></i> Cities
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
