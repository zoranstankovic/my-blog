import React from "react"
import { Link } from "gatsby"

const Header = () => (
  <header>
    <Link to="/">Zoran Stankovic</Link>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about/">About</Link>
    </nav>
  </header>
)

export default Header
