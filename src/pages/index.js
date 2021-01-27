import React, { Fragment } from "react"
import { Container } from "react-bootstrap"
import { graphql, useStaticQuery } from "gatsby"
import { Helmet } from "react-helmet"

//containers
import Header1 from "../components/Header/Header1"
import Header2 from "../components/Header/Header2"
import Carousel from "../components/Carousel/CarouselBanner"
import Service from "../components/Services/Services"
import Pricing from "../components/Pricing/Pricing"
import Footer from "../components/Footer/Footer"

//scss
import "../styles/_global.scss"
// import indexStyles from "../styles/index.module.scss"

const Home = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Fragment>
      <Helmet>
        <title>Home | {data.site.siteMetadata.title}</title>
      </Helmet>
      <Container fluid className="p-0">
        <Header1 />
        <Header2 />
        <Carousel />
        <Service />
        <Pricing/>
        <Footer/>
      </Container>
    </Fragment>
  )
}

export default Home
