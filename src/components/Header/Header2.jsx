import { Link, graphql, useStaticQuery } from "gatsby"
import React, { Fragment } from "react"
import { Navbar } from "react-bootstrap"
import HeaderStyle from "./Header2.module.scss"
import Img from "gatsby-image"
import "./Header2_bootstrap_override.scss"

const Header2 = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo_dark.png" }) {
        childImageSharp {
          fixed(height: 54) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  
  return (
    <Fragment>
      <Navbar
        expand="md"
        sticky="top"
        className={HeaderStyle.navbar}
        id="bootstrap_override"
      >
        <Navbar.Brand as={Link} to="/">
            <Img fixed={data.file.childImageSharp.fixed} alt="" />
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        {/* <Navbar.Collapse id="basic-navbar-nav" className={HeaderStyle.nav}>
          <Nav className="ml-auto">
            <ul>
              <li>
                <Link to="/" activeClassName={HeaderStyle.activeLink}>
                  HOME
                </Link>
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
        </Navbar.Collapse> */}
      </Navbar>
    </Fragment>
  )
}

export default Header2
