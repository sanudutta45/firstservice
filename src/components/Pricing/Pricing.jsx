import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { graphql, useStaticQuery } from "gatsby"

//components
import PriceCard from "../PriceCard/PriceCard"

//constants
import { residentialPlans, commercialPlans } from "../../constants/constants"

//scss
import PricingStyle from "./Pricing.module.scss"

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
        <h5 className={PricingStyle.planHeader}>Residential Plans</h5>
        <Row className={PricingStyle.row}>
          {residentialPlans.map(plans => (
            <Col lg={3} sm={6} className="mb-3">
              <PriceCard
                type={plans.type}
                speed={plans.speed}
                price={plans.price}
                iconImg={data.img1.childImageSharp.fixed}
              />
            </Col>
          ))}
        </Row>
      </Container>
      <Container fluid="xl" className="mt-5">
        <h5 className={PricingStyle.planHeader}>Commercial Plans</h5>
        <Row className={PricingStyle.row}>
          {commercialPlans.map(plans => (
            <Col lg={3} sm={6} className="mb-3">
              <PriceCard
                type={plans.type}
                speed={plans.speed}
                price={plans.price}
                // iconImg={data.img1.childImageSharp.fixed}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  )
}

export default Pricing
