import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Carousel } from "react-bootstrap"
import Img from "gatsby-image"

//scss
import CarouselStyle from "./CarouselBanner.module.scss"
import { Fragment } from "react"

function CarouselBanner() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "slide01.png" }) {
        childImageSharp {
          fluid(maxWidth: 2480, maxHeight: 1020, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Fragment>
      <Carousel controls={false}>
        {/* <Carousel.Item>
          <Img fluid={data.file.childImageSharp.fluid} />
        </Carousel.Item> */}
        <Carousel.Item>
          <Img
            fluid={data.file.childImageSharp.fluid}
            style={{ minHeight: "350px", width: "100%" }}
            imgStyle={{ objectFit: "cover" }}
          />
          <Carousel.Caption bsPrefix={CarouselStyle.caption}>
            <p className={CarouselStyle.title}>firstwave broadband internet</p>
            <h1>our plans give you more than ever</h1>
            <p className={CarouselStyle.extra_info}>
              Surf, stream, chat and game with fast speeds.
              Equipment included and no extra monthly fees.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Fragment>
  )
}

export default CarouselBanner
