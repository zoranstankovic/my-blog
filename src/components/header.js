import React from "react";
import { Link } from "gatsby";

const Header = () => (
  <header>
    <div className="container container-flex">
      <div className="site-title">
        <Link className="site-title-link" to="/">
          Zoran Stankovic
        </Link>
      </div>
      <nav>
        <ul className="nav-list">
          <li className="nav-list-item">
            <Link
              className="nav-item-link"
              to="/"
              activeClassName="current-page"
            >
              home
            </Link>
          </li>
          <li className="nav-list-item">
            <Link
              className="nav-item-link"
              to="/articles/"
              activeClassName="current-page"
            >
              articles
            </Link>
          </li>
          <li className="nav-list-item">
            <Link
              className="nav-item-link"
              to="/about/"
              activeClassName="current-page"
            >
              about
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
