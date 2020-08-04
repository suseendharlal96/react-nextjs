import Link from "next/link";

import axios from "axios";

import { VehiclePerson } from "./VehiclePerson.model";

interface VehiclePersonProps {
  result: Array<VehiclePerson> | undefined;
}

const Home = ({ result }: VehiclePersonProps) => {
  return (
    <div>
      {result?.map((a, index) => (
        <div key={index}>
          <Link as={`${a.vehicle}/${a.ownerName}`} href="/[vehicle]/[person]">
            <a>
              Navigate to {a.ownerName}'s{a.vehicle}
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};

Home.getInitialProps = async () => {
  const response = await axios.get("http://localhost:5000/vehicles");
  const result: Array<VehiclePerson> = response.data.vehicles.vehicles;
  return { result };
};

export default Home;
