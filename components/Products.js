import React from "react";

import { useStaticQuery, graphql } from "gatsby";

import Product from "./Product";
import Title from "./Title";

const Products = () => {
  const data = useStaticQuery(graphql`
    query {
      products: allContentfulCoffeeProducts {
        nodes {
          id
          title
          price
          image {
            fluid(maxHeight: 250, maxWidth: 350) {
              ...GatsbyContentfulFluid
            }
          }
          fields {
            slug
          }
        }
      }
    }
  `);
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our products" />
        <div className="row">
          {data &&
            data.products.nodes.map((node) => (
              <Product key={node.id} product={node} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
