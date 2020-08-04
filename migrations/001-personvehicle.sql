-- Up

CREATE TABLE Person(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT
);  
CREATE TABLE Vehicle(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    brand TEXT,
    model TEXT,
    ownerId INTEGER REFERENCES Person(id)
);   

INSERT INTO Person(name,email) values('sus','sus@gmail.com');
INSERT INTO Person(name,email) values('sug','sug@gmail.com');

INSERT INTO Vehicle(brand,model,ownerId) values('bugatti','veyron',1);
INSERT INTO Vehicle(brand,model,ownerId) values('mercedes','benz',2);

-- Down
DROP TABLE Person;
DROP TABLE Vehicle;