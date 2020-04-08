import React from "react";
import { Link } from "gatsby";

const Header = () => (
  <section className="section is-paddingless">
    <div className="container grid">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">
              <div className="title">Zoran Stankovic</div>
            </Link>
          </div>
          <div className="navbar-menu">
            <div className="navbar-start">
              <Link className="navbar-item" to="/">
                Home
              </Link>
              <Link className="navbar-item" to="/about/">
                About
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </section>
);

export default Header;
