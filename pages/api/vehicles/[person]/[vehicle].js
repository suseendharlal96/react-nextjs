import vehicles from "../../../../vehicles.json";

const getPersonByNameAndVehicle = (req, res) => {
  console.log(req.query);
  let a = [];
  vehicles.vehicles.forEach((v) => {
    if (v.ownerName === req.query.person && v.vehicle === req.query.vehicle) {
      a.push(v);
    }
  });
  console.log("12", a);
  return res.json({ vehicles: a });
};

export default getPersonByNameAndVehicle;
