import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import BackgroundSection from "../components/Globals/BackgroundSection";
import Careers from '../components/Careers/Careers'

const CareerPage = ({ data }) => (
  <Layout>
    <SEO title="Careers" keywords={[`gatsby`, `application`, "react"]} />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="Join Our Team"
      styleClass="about-background"
    />
    <Careers />
  </Layout>
);

export const query = graphql`
  {
    img: file(relativePath: { eq: "products.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;
export default CareerPage;
