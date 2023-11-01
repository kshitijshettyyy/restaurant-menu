import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const bodyElement = document.body;

  const [theme, setTheme] = useState("Light");

  function changeTheme() {
    if (theme === "Light") {
      setTheme("Dark");
      document.body.dataset.bsTheme = "dark";
    } else {
      setTheme("Light");
      document.body.dataset.bsTheme = "light";
    }
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-inverse shadow p-3 mb-5 bg-white rounded">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <div style={{ marginRight: "auto" }}>
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
          </div>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="navbar-header">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cards">
                  Menu
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={changeTheme}
            />
            <label className="form-check-label" for="flexSwitchCheckDefault">
              {theme}
            </label>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Set title",
};
