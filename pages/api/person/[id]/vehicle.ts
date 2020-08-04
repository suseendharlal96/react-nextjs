import { NextApiRequest, NextApiResponse } from "next";

const sqlite = require("sqlite");
const sqlite3 = require("sqlite3");

const getVehicleById = async (req: NextApiRequest, res: NextApiResponse) => {
  const db = await sqlite.open({
    filename: "./mydb.sqlite",
    driver: sqlite3.Database,
  });
  const vehicle = await db.all("SELECT * FROM Vehicle WHERE ownerId=?", [
    req.query.id,
  ]);
  res.json(vehicle);
};
export default getVehicleById;
