import React from "react"
import Header from "./Header1.module.scss"
import { Container, Row, Col } from "react-bootstrap"
import {
  faMapMarker,
  faEnvelope,
  faMobile,
} from "@fortawesome/free-solid-svg-icons"

// import cx from "classnames"

//components
import CustomIcon from "../CustomIcon/CustomIcon"

const Header1 = () => {
  return (
    <section className={Header.page_topline}>
      <Container fluid>
        <Row className="align-items-center text-center">
          <Col lg={12} xl={4}>
            <ul>
              <li>
                <span className={Header.capitalize}>connecting minds around the world</span>
              </li>
            </ul>
          </Col>
          <Col lg={12} xl={8} className="text-center">
            {/* modal search */}
            <ul className={Header.responsiveUl}>
              <li>
                <CustomIcon icon={faMapMarker} />
                <span>A&amp;S Complex Dorando, Ranchi, Jhankhand 834002</span>
              </li>
              <li>
                <CustomIcon icon={faEnvelope} />
                <span>support@firstservice.com</span>
              </li>
              <li>
                <CustomIcon icon={faMobile} />
                <span>+91-9576662085</span>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Header1
