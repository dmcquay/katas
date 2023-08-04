"use strict";

const { expect } = require("chai");

const mongodb3 = require("mongodb3");
const mongodb4 = require("mongodb4");

const client3server4 = new mongodb3.MongoClient("mongodb://localhost:27004/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const client4server4 = new mongodb4.MongoClient("mongodb://localhost:27004/");

const clients = { client3server4, client4server4 };
console.log(Object.keys(clients));

describe("mongo", () => {
  for (let clientKey of Object.keys(clients)) {
    console.log(clientKey);
    const client = clients[clientKey];
    describe(clientKey, () => {
      let db, users;

      before(async () => {
        await client.connect();
        db = client.db("test");
        users = db.collection("User");
      });

      after(async () => {
        await client.close();
      });

      it("returnOriginal", async () => {
        const { insertedId } = await users.insertOne({
          doNotText: true,
        });

        const u1 = await users
          .findOneAndUpdate(
            { _id: insertedId },
            { $set: { doNotText: false } },
            {
              //   returnOriginal: false
              returnDocument: "after",
            }
          )
          .then((r) => r.value);

        expect(u1.doNotText).to.be.false;
      });
    });
  }
});
