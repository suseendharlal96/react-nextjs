import Link from "next/link";

import axios from "axios";

const Home = ({ result }) => {
  return (
    <div>
      {result.vehicles.map((a, index) => (
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
  console.log(response);
  return { result: response.data.vehicles };
};

export default Home;
