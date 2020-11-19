import Head from "next/head";

import { client } from "../../util/contentful";
import Product from "../../components/Product";

const Item = ({ entry }) => {
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
  console.log(query)
  const entry = await client.getEntries({
    "fields.title": query.itemName,
    content_type: "coffeeItem",
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
export default Item;
