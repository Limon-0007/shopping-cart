import React from "react";
import Logo from "../ema-john-resources/images/Logo.svg";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={Logo} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="mx-auto"></div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Order
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Order Review
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Manage Inventory
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
