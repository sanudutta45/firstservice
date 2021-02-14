import React from "react"
import {
  faCloud,
  faNetworkWired,
  faMobile,
  faUserShield,
} from "@fortawesome/free-solid-svg-icons"

//components
import Card from "../Card/Card"

//scss
import serviceStyle from "./Services.module.scss"

import { Container, Row, Col } from "react-bootstrap"

const Services = () => {
  return (
    <Container className="text-center mt-5 pt-5 pb-5" fluid="xl">
      <h5 className={serviceStyle.heading1}>firstservice broadband internet</h5>
      <h1 className={serviceStyle.heading2}>Network Solutions from firstservice</h1>
      <Row className={serviceStyle.flex}>
        <Col xl={3} lg={6} sm={12}  className="mb-3">
          <Card
            iconClass={faCloud}
            title="Cloud"
            text="Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur."
          />
        </Col>
        <Col xl={3} lg={6} sm={12} className="mb-3">
          <Card
            iconClass={faNetworkWired}
            title="Networking"
            text="Lorem ipsum dolor sit amet consectetur."
          />
        </Col>
        <Col xl={3} lg={6} sm={12} className="mb-3">
          <Card
            iconClass={faMobile}
            title="Mobility"
            text="Lorem ipsum dolor sit amet consectetur."
          />
        </Col>
        <Col xl={3} lg={6} sm={12} className="mb-3">
          <Card
            iconClass={faUserShield}
            title="Cybersecurity"
            text="Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur ."
          />
        </Col>
      </Row>
    </Container>
  )
}

export default Services
