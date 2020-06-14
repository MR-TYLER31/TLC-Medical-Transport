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
    <Careers items={data.jobs} />
  </Layout>
);

export const query = graphql`
         {
           img: file(relativePath: { eq: "career.jpeg" }) {
             childImageSharp {
               fluid {
                 ...GatsbyImageSharpFluid_tracedSVG
               }
             }
           }
            jobs: allContentfulJobs {
                edges {
                  node {
                    id
                    title
                    description {
                      description
                    }
                    requirements {
                      requirements
                    }
                  }
                }
              }   
         }
       `;
export default CareerPage;
