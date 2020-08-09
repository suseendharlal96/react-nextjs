import Head from "next/head";
import { useRouter } from "next/router";

import { client } from "../../util/contentful";
import Product from "../../components/Product";

const SingleProduct = ({ entry }) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{`Product | ${entry?.items[0]?.fields?.title}`}</title>
      </Head>
      {!router.isFallback ? (
        <Product product={entry?.items[0]?.fields} />
      ) : (
        <p>Product Loading...</p>
      )}
    </>
  );
};

export const getStaticProps = async ({ params }) => {
  console.log(params);
  const entry = await client.getEntries({
    "fields.title": params.prodName,
    content_type: "coffeeProducts",
  });
  return {
    props: {
      entry,
    },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { prodName: "Dark chocolate coffee" } },
      { params: { prodName: "Mocha Java coffee" } },
    ],
    fallback: true,
  };
};
export default SingleProduct;
