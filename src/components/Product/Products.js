import React from 'react'
import Product from '../Product/Product'
import Title from '../Globals/Title'
import { StaticQuery, graphql } from 'gatsby'

const getProducts = graphql`
  {
    products: allContentfulProduct {
      edges {
        node {
          id
          title
          price
          image {
            fluid(maxHeight: 426) {
              src
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;

const Products = () => {
    return (
      <StaticQuery
        query={getProducts}
        render={data => {
          return (
              <section className="py-5">
                  <div className="container">
                      <Title title="our products" />
                      <div className="row">
                        {data.products.edges.map(({node:product}) => {
                            return <Product key={product.id} product={product} />
                        })}
                      </div>
                  </div>
              </section>
          )
        }}
      />
    );
}


export default Products

// import React from "react";
// import { graphql, StaticQuery } from "gatsby";
// import { loadStripe } from "@stripe/stripe-js";

// // const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY);

// export default function Skus(props) {
//   return (
//     <StaticQuery
//       // query={graphql`
//       //   query SkusForProduct {
//       //     skus: allStripeSku {
//       //       edges {
//       //         node {
//       //           id
//       //           currency
//       //           price
//       //           attributes {
//       //             name
//       //           }
//       //         }
//       //       }
//       //     }
//       //   }
//       // `}
//       render={({ skus }) => (
//         <div>
//           {skus.edges.map(({ node: sku }) => (
//             <p key={sku.id}>{sku.attributes.name}</p>
//           ))}
//         </div>
//       )}
//     />
//   );
// }