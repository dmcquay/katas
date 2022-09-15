const fetch = require("node-fetch");
const { expect } = require("chai");

it("/ should return a 200 and 429 at least once when hit with 20 requests very quickly", async () => {
  let gotSuccessResponse = false;
  let hitRateLimit = false;
  for (let i = 0; i < 20; i++) {
    const response = await fetch("http://localhost:3000/", {
      headers: { token: "client-token" }
    });
    if (response.status === 200) {
      gotSuccessResponse = true;
    } else if (response.status == 429) {
      hitRateLimit = true;
      break;
    }
    await response.text();
  }

  expect(gotSuccessResponse).to.be.true;
  expect(hitRateLimit).to.be.true;
});
