import Head from "next/head";

import { client } from "../../util/contentful";
import Product from "../../components/Product";

const SingleProduct = ({ entry }) => {
  return (
    <>
      <Head>
        <title>{`Product | ${entry?.items[0].fields.title}`}</title>
      </Head>
      <Product product={entry?.items[0].fields} />
    </>
  );
};

export const getServerSideProps = async ({ query }) => {
  const entry = await client.getEntries({
    "fields.title": query.prodName,
    content_type: "coffeeProducts",
  });
  return {
    props: {
      entry,
    },
  };
};

// export const getStaticPaths = async () => {
//   return {
//     paths: [{ params: { itemName: "Black Tea" } }],
//     fallback: true,
//   };
// };
export default SingleProduct;
