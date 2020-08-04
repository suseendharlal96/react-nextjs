const vehicles = {
  vehicles: [
    {
      vehicle: "Car",
      ownerName: "Bruno Antunes",
      details: "some detail about Bruno's Car",
    },
    {
      vehicle: "Bike",
      ownerName: "Bruno Antunes",
      details: "some detail about Bruno's Bike",
    },
    {
      vehicle: "Bike",
      ownerName: "John Doe",
      details: "some detail bile",
    },
    {
      vehicle: "Airplane",
      ownerName: "Bill Gates",
      details: "some detail Bill Gates",
    },
    {
      vehicle: "SpaceX",
      ownerName: "Elon Musk",
      details: "some detail Elon",
    },
  ],
};

exports.getAllProducts = (req, res, next) => {
  res.status(200).json({
    vehicles,
  });
};

exports.getSingleProduct = (req, res, next) => {
  const ownerName = req.params.ownerName;
  const vehicleName = req.params.vehicle;
  console.log(ownerName, vehicleName);

  let a = [...vehicles.vehicles];
  let b = [];
  if (ownerName) {
    b = a.filter((v) => v.ownerName === ownerName);
    if (b.length === 0) {
      b = a;
    }
  }
  if (vehicleName) {
    b = a.filter((v) => v.vehicle === vehicleName);
    if (b.length === 0) {
      b = a;
    }
  }
  res.status(200).json({
    vehicles: b,
  });
};
