import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from '../components/Globals/BackgroundSection'
import Info from '../components/Home/Info'
import Services from '../components/Home/Services'

const IndexPage = ({ data }) => (

  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, 'react']}/>
    <BackgroundSection img={data.img.childImageSharp.fluid} title="tlc medical transport" styleClass="default-background"/>
    <Info/>
    <Services items={data.services}/>
  </Layout>
)

export const query = graphql`
         {
           img: file(relativePath: { eq: "main-background.jpeg" }) {
             childImageSharp {
               fluid {
                 ...GatsbyImageSharpFluid_tracedSVG
               }
             }
           }
           services: allContentfulServices {
             edges {
               node {
                 id
                 title
               }
             }
           }
         }
       `;
export default IndexPage
