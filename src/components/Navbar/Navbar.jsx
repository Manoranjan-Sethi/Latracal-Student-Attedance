import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="header">
      <h1>Students Attendance</h1>
      <nav className="navbar">
        <Link className="link-a" to="/">
          Home
        </Link>
        <Link className="link-a" to="/form">
          Add Student's Attendance
        </Link>
        <Link className="link-a" to="/attendance">
          Show Total Attendance
        </Link>
      </nav>
    </div>
  );
}
export default Navbar;
