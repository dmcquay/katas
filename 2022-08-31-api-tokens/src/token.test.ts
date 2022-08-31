import * as fs from "fs";
import * as chai from "chai";
import * as chaiAsPromised from "chai-as-promised";
import { createToken, verifyToken } from "./token";

chai.use(chaiAsPromised);
const { expect } = chai;

const invalidPrivateKey = fs.readFileSync("private.pem");

it("when token is valid", async () => {
  const token = await createToken("test-client-name");
  const result = await verifyToken(token);
  expect(result.client).to.eq("test-client-name");
});

it("when token is not valid", async () => {
  const token = await createToken("test-client-name", invalidPrivateKey);
  await expect(verifyToken(token)).to.be.rejected;
});
