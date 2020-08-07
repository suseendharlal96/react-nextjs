import Link from "next/link";
import Head from "next/head";

import React from "react";

import Menu from "../components/Menu";

const client = require("contentful").createClient({
  space: "h6qz89wq1kfo",
  accessToken: "NMIohhFQRkDSZIoLHCyJuStjDwosYAuxW4PS0ae20gc",
});

const Home = ({ result }) => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Menu items={result} />
    </>
  );
};

export const getStaticProps = async () => {
  console.log("home page");
  const entries = await client.getEntries();
  console.log(entries);
  // const response = await axios.get("http://localhost:5000/vehicles");
  // const result: Array<VehiclePerson> = response.data.vehicles.vehicles;
  return { props: { result: [...entries.items] } };
};

export default Home;
