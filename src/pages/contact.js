import * as React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import Contact from "../components/Contact/Contact"
import Seo from "../components/SEO"
import SimpleBanner from "../components/SimpleBanner/SimpleBanner"

const contact = () => {
  return (
    <>
      <Seo title="Contact" />
      <Layout>
        <SimpleBanner title="Contact">
          <StaticImage
            className="banner__image"
            src= "../static/contact.jpeg"
            alt=""
          />
        </SimpleBanner>
        <Contact />
      </Layout>
    </>
  )
}

export default contact
