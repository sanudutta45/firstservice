import React, { Fragment } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { Container, Row, Col } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import FooterStyle from "./Footer.module.scss"

import { faFacebookF, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo-2-180x46.png" }) {
        childImageSharp {
          fixed(width: 180) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Fragment>
      <Container fluid className={FooterStyle.top_wrapper}>
        <Container fluid="xl">
          <Row className="p-4 align-items-center text-center">
            <Col lg={12} xl={4} className="text-xl-left">
              <ul>
                <li>
                  <Link to="/">
                    <Img fixed={data.file.childImageSharp.fixed} alt="" />
                  </Link>
                </li>
              </ul>
            </Col>
            <Col
              lg={12}
              xl={8}
              className={`${FooterStyle.contentWrapper} mt-sm-2`}
            >
              <ul>
                <li>
                  <FontAwesomeIcon icon={faFacebookF} size="1x" />
                  <span className="ml-2">Connect On Facebook</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faLinkedinIn} />
                  <span className="ml-2">Connect On LinkedIn</span>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className={FooterStyle.bottom_wrapper}>
        <Container fluid="xl">
          <Row className="p-4 mt-2 mb-5">
            <Col lg={4} className="pt-3">
              <h4>address</h4>
              <p>
                2, A&amp;S Complex New Parastoli
                <br />
                Near Hinoo Bridge, Dorando
                <br />
                Ranchi, Jhankhand 834002
              </p>
            </Col>
            <Col lg={8} className="pt-3">
              <h4>contact</h4>
              <span className="d-block">info@firstservice.in</span>
              <span className="d-bloxck">+91-8102741758</span>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container fluid className={FooterStyle.copyRight}>
        <Container fluid="xl">
          <Row className="p-4 text-center text-lg-left">
            <Col sm={12}>
              <p>&copy; Copyright Sanu Dutta 2019 All Rights Reserved</p>
            </Col>
          </Row>
        </Container>
      </Container>
    </Fragment>
  )
}

export default Footer
