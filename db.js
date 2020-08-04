const sqlite = require("sqlite");
const sqlite3 = require("sqlite3");

async function setup() {
  const db = await sqlite.open({
    filename: "./mydb.sqlite",
    driver: sqlite3.Database,
  });
  if (db) {
    await db.migrate({ force: "last" });
    const person = await db.all("SELECT * FROM Person");
    const vehicle = await db.all("SELECT * FROM Vehicle");
    console.log(JSON.stringify(person, null, 2));
    console.log(JSON.stringify(vehicle, null, 2));
  }
}

setup();
