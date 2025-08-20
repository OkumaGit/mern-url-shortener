import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext.js"; // Importing AuthContext

export const Navbar = () => {
  const navigate = useNavigate();
  const auth = useContext(AuthContext); // Using AuthContext to access auth state
  const logoutHandler = (event) => {
    event.preventDefault();
    auth.logout(); // Assuming auth is available in context
    navigate("/");
  };
  return (
    <nav>
      <div className="nav-wrapper blue darken-1" style={{ padding: "0 2 rem" }}>
        <span className="brand-logo">Logo</span>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <NavLink to="/create">Create</NavLink>
          </li>
          <li>
            <NavLink to="/links">Links</NavLink>
          </li>
          <li>
            <a href="/" onClick={logoutHandler}>
              Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
