import { NextPageContext } from "next";
import { useRouter } from "next/router";

import axios from "axios";

import { VehiclePerson } from "../VehiclePerson.model";
import Link from "next/link";

interface VehiclePersonProps {
  result: Array<VehiclePerson> | undefined;
}

interface MyNextPageContext extends NextPageContext {
  query: {
    person: string;
    vehicle: string;
  };
}

const Person = ({ result }: VehiclePersonProps) => {
  const router = useRouter();
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      {router.isFallback && <p>Loading</p>}
      <ul>
        {result?.map((r, index) => (
          <li key={index}>
            {r?.ownerName}'s{r?.vehicle}
            <p>{r?.details}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getStaticProps = async (context) => {
  console.log("context", context);
  const response = await axios.get(
    `http://localhost:3000/api/vehicles/${context.params.person}/${context.params.vehicle}`
  );
  console.log(response.data);
  return { props: { result: response.data.vehicles } };
};

export const getStaticPaths = async () => {
  return {
    fallback: true,
    paths: [
      { params: { vehicle: "Car", person: "Bruno Antunes" } },
      { params: { vehicle: "Bike", person: "Bruno Antunes" } },
    ],
  };
};

export default Person;
