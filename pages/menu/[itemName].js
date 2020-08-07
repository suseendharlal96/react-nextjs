import Head from "next/head";

import { client } from "../../util/contentful";
import { useEffect } from "react";
import Product from "../../components/Product";

const Item = ({ entry }) => {
  useEffect(() => {
    console.log(entry);
  }, []);
  return (
    <>
      <Head>
        <title>{`Menu | ${entry?.items[0].fields.title}`}</title>
      </Head>
      <Product product={entry?.items[0].fields} />
    </>
  );
};

export const getServerSideProps = async ({ query }) => {
  const entry = await client.getEntries({
    "fields.title": query.itemName,
    content_type: "coffeeItem",
  });
  console.log(entry);
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
export default Item;
