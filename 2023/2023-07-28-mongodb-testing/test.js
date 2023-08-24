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

const randInt = () => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);

describe("mongo", () => {
  for (let clientKey of Object.keys(clients)) {
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

      it("find.countDocuments", async () => {
        const testProp = randInt();
        await users.insertOne({ testProp });
        await users.insertOne({ testProp });
        await users.insertOne({ testProp: 1 });

        // deprecated in >= 4.x
        // const count = await users.find({ testProp }).count();

        // this does not work. you must call countDocuments on a collection, not a cursor
        // const count = await users.find({ testProp }).countDocuments();

        const count = await users.countDocuments({ testProp });

        expect(count).to.eq(2);
      });

      it("ensureIndex once", async () => {
        await users.ensureIndex(
          { ensureIndexOnce: 1 },
          { name: "ensureIndex_once" }
        );
      });

      it("ensureIndex duplicate", async () => {
        await users.ensureIndex(
          { ensureIndexDuplicate: 1 },
          { name: "ensureIndex_duplicate" }
        );

        await users.ensureIndex(
          { ensureIndexDuplicate: 1 },
          { name: "ensureIndex_duplicate" }
        );
      });

      it("createIndex once", async () => {
        await users.createIndex(
          { createIndexOnce: 1 },
          { name: "createIndex_once" }
        );
      });

      it("createIndex duplicate", async () => {
        await users.createIndex(
          { createIndexDuplicate: 1 },
          { name: "createIndex_duplicate" }
        );

        await users.createIndex(
          { createIndexDuplicate: 1 },
          { name: "createIndex_duplicate" }
        );
      });
    });
  }
});
