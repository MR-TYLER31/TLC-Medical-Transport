import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import BackgroundSection from "../components/Globals/BackgroundSection";
import Products from "../components/Product/Products";

const ProductPage = ({ data }) => (
  <Layout>
    <SEO title="Products" keywords={[`gatsby`, `application`, "react"]} />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="Our Products"
      styleClass="about-background"
    />
    <Products />
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
