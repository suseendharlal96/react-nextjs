import { NextApiRequest, NextApiResponse } from "next";

const sqlite = require("sqlite");
const sqlite3 = require("sqlite3");

const getPersonById = async (req: NextApiRequest, res: NextApiResponse) => {
  const db = await sqlite.open({
    filename: "./mydb.sqlite",
    driver: sqlite3.Database,
  });

  if (req.method === "PUT") {
    const statement = await db.prepare(
      "UPDATE Person SET name=?,email=? WHERE id=?"
    );
    const result = await statement.run(
      req.body.name,
      req.body.email,
      req.query.id
    );
  }

  const person = await db.get("SELECT * FROM Person WHERE id=?", [
    req.query.id,
  ]);
  res.json(person);
};
export default getPersonById;
