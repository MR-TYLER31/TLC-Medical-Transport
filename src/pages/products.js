import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import BackgroundSection from "../components/Globals/BackgroundSection";
import Checkout from '../components/Product/Checkout'

const ProductPage = ({ data }) => (
  <Layout>
    <SEO title="Products" keywords={[`gatsby`, `application`, "react"]} />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="Our Products"
      styleClass="about-background"
    />
    <Checkout />
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
export default ProductPage;
