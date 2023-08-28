"use strict";

const { expect } = require("chai");

const mongodb3 = require("mongodb3");
const mongodb4 = require("mongodb4");

const client3server4 = new mongodb3.MongoClient("mongodb://localhost:27004/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
client3server4.ObjectId = mongodb3.ObjectId;
client3server4.IncompatibleObjectId = mongodb4.ObjectId;

const client4server4 = new mongodb4.MongoClient("mongodb://localhost:27004/");
client4server4.ObjectId = mongodb4.ObjectId;
client4server4.IncompatibleObjectId = mongodb3.ObjectId;

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

      // it("DEPRECATED IN v3: returnOriginal = false", async () => {
      //   const { insertedId } = await users.insertOne({
      //     doNotText: true,
      //   });
      //   const u1 = await users
      //     .findOneAndUpdate(
      //       { _id: insertedId },
      //       { $set: { doNotText: false } },
      //       { returnOriginal: false }
      //     )
      //     .then((r) => r.value);
      //   expect(u1.doNotText).to.be.false;
      // });

      it("GOOD: returnDocument = after", async () => {
        const { insertedId } = await users.insertOne({
          doNotText: true,
        });

        const u1 = await users
          .findOneAndUpdate(
            { _id: insertedId },
            { $set: { doNotText: false } },
            { returnDocument: "after" }
          )
          .then((r) => r.value);

        expect(u1.doNotText).to.be.false;
      });

      // it("DEPRECATED IN v4: cursor.count()", async () => {
      //   const testProp = randInt();
      //   await users.insertOne({ testProp });
      //   await users.insertOne({ testProp });
      //   await users.insertOne({ testProp: 1 });
      //   const count = await users.find({ testProp }).count();
      //   expect(count).to.eq(2);
      // });

      // it("DOESN'T WORK IN ANY VERSION: cursor.countDocuments()", async () => {
      //   const testProp = randInt();
      //   await users.insertOne({ testProp });
      //   await users.insertOne({ testProp });
      //   await users.insertOne({ testProp: 1 });
      //   const count = await users.find({ testProp }).countDocuments();
      //   expect(count).to.eq(2);
      // });

      it("GOOD: collection.countDocuments()", async () => {
        const testProp = randInt();
        await users.insertOne({ testProp });
        await users.insertOne({ testProp });
        await users.insertOne({ testProp: 1 });
        const count = await users.countDocuments({ testProp });
        expect(count).to.eq(2);
      });

      // it("DEPRECATED IN v3: ensureIndex once", async () => {
      //   await users.ensureIndex(
      //     { ensureIndexOnce: 1 },
      //     { name: "ensureIndex_once" }
      //   );
      // });

      // it("DEPRECATED IN v3: ensureIndex duplicate", async () => {
      //   await users.ensureIndex(
      //     { ensureIndexDuplicate: 1 },
      //     { name: "ensureIndex_duplicate" }
      //   );

      //   await users.ensureIndex(
      //     { ensureIndexDuplicate: 1 },
      //     { name: "ensureIndex_duplicate" }
      //   );
      // });

      it("GOOD: createIndex once", async () => {
        await users.createIndex(
          { createIndexOnce: 1 },
          { name: "createIndex_once" }
        );
      });

      it("GOOD: createIndex duplicate", async () => {
        await users.createIndex(
          { createIndexDuplicate: 1 },
          { name: "createIndex_duplicate" }
        );

        await users.createIndex(
          { createIndexDuplicate: 1 },
          { name: "createIndex_duplicate" }
        );
      });

      // it("REMOVED IN v4: fetching inserted object from response.ops", async () => {
      //   const doc = { name: `Customer ${Math.random()}` };
      //   const response = await users.insertOne(doc);
      //   const [first] = response.ops;
      //   expect(first._id).to.not.be.undefined;
      // });

      it("GOOD: getting insertedId for inserted object via response.insertedId", async () => {
        const doc = { name: `Customer ${Math.random()}` };
        const response = await users.insertOne(doc);
        const { insertedId } = response;
        expect(insertedId).to.not.be.undefined;
      });

      it("GOOD: get inserted id by assuming mongo driver adds it to passed document", async () => {
        const doc = { name: `Customer ${Math.random()}` };
        expect(doc._id).to.be.undefined;
        const response = await users.insertOne(doc);
        const { insertedId } = response;
        expect(doc._id).to.eq(insertedId);
      });

      // it("BAD: updates other ids", async () => {
      //   const doc = {
      //     otherId: new client.IncompatibleObjectId(),
      //   };
      //   const { insertedId } = await users.insertOne(doc);
      //   const doc2 = await users.findOne({ _id: insertedId });
      //   expect(doc.otherId.toHexString()).to.eql(doc2.otherId.toHexString());
      //   expect(doc.otherId).to.eql(doc2.otherId);
      // });

      it("GOOD: use ObjectId from same version of mongo", async () => {
        const doc = {
          otherId: new client.ObjectId(),
        };
        const { insertedId } = await users.insertOne(doc);
        const doc2 = await users.findOne({ _id: insertedId });
        expect(doc.otherId.toHexString()).to.eql(doc2.otherId.toHexString());
        expect(doc.otherId).to.eql(doc2.otherId);
      });
    });
  }
});
