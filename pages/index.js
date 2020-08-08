import Head from "next/head";

import Menu from "../components/Menu";
import BackgroundImg from "../components/BackgroundImg";
import Products from "../components/Products";
import { client } from "../util/contentful";

const Home = ({ result, products }) => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <BackgroundImg img="/coffeehome.jpg" />
      <Menu items={result} />
      <Products products={products} />
    </>
  );
};

export const getStaticProps = async () => {
  const entries = await client.getEntries({
    content_type: "coffeeItem",
  });
  const coffeeProducts = await client.getEntries({
    content_type: "coffeeProducts",
  });
  return {
    props: { result: [...entries.items], products: [...coffeeProducts.items] },
  };
};

export default Home;
