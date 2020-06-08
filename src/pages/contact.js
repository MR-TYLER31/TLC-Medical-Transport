import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import BackgroundSection from "../components/Globals/BackgroundSection";
import Contact from "../components/Contact/Contact";

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="Contact" keywords={[`gatsby`, `application`, "react"]} />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="Contact"
      styleClass="about-background"
    />
    <Contact />
  </Layout>
);

export const query = graphql`
  {
    img: file(relativePath: { eq: "about-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;
export default AboutPage;
