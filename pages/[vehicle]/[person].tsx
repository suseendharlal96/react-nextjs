import { NextPageContext } from "next";
import { useRouter } from "next/router";

import axios from "axios";

import { VehiclePerson } from "../VehiclePerson.model";

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
  return (
    <div>
      <ul>
        {result?.map((r, index) => (
          <li key={index}>
            {r.ownerName}'s{r.vehicle}
            <p>{r.details}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

Person.getInitialProps = async ({ query }: MyNextPageContext) => {
  const response = await axios.get(
    `http://localhost:5000/vehicles/${query.person}/${query.vehicle}`
  );
  return { result: response.data.vehicles };
};

export default Person;
