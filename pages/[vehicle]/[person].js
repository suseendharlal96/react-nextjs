import { useRouter } from "next/router";

import axios from "axios";

const Person = ({ result }) => {
  const router = useRouter();
  console.log(result);
  return (
    <div>
      <ul>
        {result.map((r, index) => (
          <li key={index}>
            {r.ownerName}'s{r.vehicle}
            <p>{r.details}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

Person.getInitialProps = async (context) => {
  const { query } = context;
  const response = await axios.get(
    `http://localhost:5000/vehicles/${query.person}/${query.vehicle}`
  );
  console.log(response);
  return { result: response.data.vehicles };
};

export default Person;
