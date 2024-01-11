import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
// import { BrowserRouter as Router } from "react-router-dom";

function Navbar() {
  return (
    // <Router>
    <div>
      <nav className="header ">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/customers">Customers</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/Plans">Plans</Link>
          </li>
        </ul>
      </nav>
    </div>
    // </Router>
  );
}

export default Navbar;
