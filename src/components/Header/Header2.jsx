import { Link } from "gatsby"
import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import Logo from "../../assets/images/logo_dark.png"
import HeaderStyle from "./Header2.module.scss"
import "./Header2_bootstrap_override.scss";

const Header2 = () => {
  return (
    <Navbar expand="md" sticky="top" className={HeaderStyle.navbar} id="bootstrap_override">
      <Navbar.Brand>
        <Link to="/">
          <img src={Logo} alt="logo" width="160px" />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className={HeaderStyle.nav}>
        <Nav className="ml-auto">
          <ul>
            <li>
              <Link to="/" activeClassName={HeaderStyle.activeLink}>HOME</Link>
            </li>
            <li>
              <Link to="/blog">BLOG</Link>
            </li>
            <li>
              <Link to="/contact">CONTACTS</Link>
            </li>
            <li>
              <Link to="/plan">PLANS</Link>
            </li>
            <li>
              <Link to="/about">ABOUT US</Link>
            </li>
          </ul>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header2
