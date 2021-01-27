import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { graphql, useStaticQuery } from "gatsby"

//components
import PriceCard from "../PriceCard/PriceCard"

//scss
import PricingStyle from "./Pricing.module.scss";

function Pricing() {
  const data = useStaticQuery(graphql`
    query {
      img1: file(relativePath: { eq: "price-img1-1.png" }) {
        childImageSharp {
          fixed(width: 110) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      img2: file(relativePath: { eq: "price-img2-1.png" }) {
        childImageSharp {
          fixed(width: 110) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      img3: file(relativePath: { eq: "price-img3-1.png" }) {
        childImageSharp {
          fixed(width: 110) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Container fluid className={`mt-5 p-5 ${PricingStyle.wrapper}`}>
      <div className={`text-center ${PricingStyle.header}`}>
        <h5>NEW INTERNET PACKAGES ARE HERE!</h5>
        <h2>Better-Than-Ever Offers</h2>
      </div>
      <Container fluid="xl">
      <Row className={PricingStyle.row}>
        <Col lg={4} className="mb-3">
          <PriceCard
            type="basic"
            speed="80"
            channels="125"
            price="39"
            iconImg={data.img1.childImageSharp.fixed}
          />
        </Col>
        <Col lg={4} className="mb-3">
          <PriceCard
            type="premium"
            speed="160"
            channels="200"
            price="89"
            iconImg={data.img2.childImageSharp.fixed}
          />
        </Col>
        <Col lg={4} className="mb-3">
          <PriceCard
            type="ultra"
            speed="300"
            channels="280"
            price="139"
            iconImg={data.img3.childImageSharp.fixed}
          />
        </Col>
      </Row>
      </Container>
    </Container>
  )
}

export default Pricing
