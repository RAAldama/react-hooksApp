import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">

        <Link to="/" className="navbar-brand">HooksApp!</Link>
        
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink exact activeClassName="active" to="/" className="nav-link">Home</NavLink>
            <NavLink exact activeClassName="active" to="/about" className="nav-link">About</NavLink>
            <NavLink exact activeClassName="active" to="/login" className="nav-link">Login</NavLink>
            <NavLink exact activeClassName="active" to="/other" className="nav-link">React Hooks</NavLink>
            <NavLink exact activeClassName="active" to="/todo" className="nav-link">useReducer</NavLink>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default NavBar;
