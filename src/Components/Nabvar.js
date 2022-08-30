import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Nabvar(props) {
  //console.log(props.mode);

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.about}
              </Link>
            </li>
          </ul>
          <div className="d-flex">
              <div className="bg-primary rounded mx-2" onClick={() => {props.toogleMode('primary')}} style={{height:'30px', width:'30px'}}></div>
              <div className="bg-success rounded mx-2" onClick={() => {props.toogleMode('success')}} style={{height:'30px', width:'30px'}}></div>
              <div className="bg-danger rounded mx-2" onClick={() => {props.toogleMode('danger')}} style={{height:'30px', width:'30px'}}></div>
              <div className="bg-warning rounded mx-2" onClick={() => {props.toogleMode('warning')}} style={{height:'30px', width:'30px'}}></div>
          </div>
          <div className={`form-check form-switch text-${(props.mode === "light") ? "dark" : "light"}`}>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              aria-checked="false"
              id="flexSwitchCheckDefault"
              onClick={() => {props.toogleMode(null)}}
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Nabvar.prototype = {
  title: PropTypes.string,
  about: PropTypes.string,
};

Nabvar.defaultProps = {
  title: "Set Title",
  about: "Set About",
};
