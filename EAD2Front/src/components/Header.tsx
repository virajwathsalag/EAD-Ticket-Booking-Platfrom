/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line react-refresh/only-export-components
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed-top bg-white shadow-sm">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center py-3">
          <h2 className="logo mb-0">Sri Lanka Railway</h2>
          <nav className="d-none d-lg-flex align-items-center">
            <Link to="/" className="nav-link mx-3">
              Home
            </Link>
            <Link to="/create-account" className="nav-link mx-3">
              Sign Up
            </Link>
            <Link to="/login" className="nav-link mx-3">
              Log In
            </Link>
            <Link to="/trains" className="nav-link mx-3">
              See available trains
            </Link>
            <Link to="/contact" className="nav-link mx-3">
              Contact
            </Link>
          </nav>
          <button className="navbar-toggler d-lg-none" type="button">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
    </header>
  )
}

