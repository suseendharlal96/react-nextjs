import Head from "next/head";

import { client } from "../../util/contentful";
import Product from "../../components/Product";

const SingleCategory = ({ entry }) => {
  return (
    <>
      <Head>
        <title>{`Category | ${entry?.items[0].fields.category}`}</title>
      </Head>
      <h2 style={{ textAlign: "center" }}>{entry?.items[0].fields.category}</h2>
      <section className="py-5" style={{ backgroundColor: "rosybrown" }}>
        <div className="container">
          <div className="row">
            {entry?.items?.map((item) => (
              <Product product={item?.fields} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export const getServerSideProps = async ({ query }) => {
  const entry = await client.getEntries({
    "fields.category": query.category,
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
export default SingleCategory;
