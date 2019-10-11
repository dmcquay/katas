const fetch = require("node-fetch");
const { expect } = require("chai");

it("/ should return a 429 at least once when hit with 20 requests very quickly", async () => {
  let hitRateLimit = false;
  for (let i = 0; i < 20; i++) {
    const response = await fetch("http://localhost:3000/");
    if (response.status == 429) {
      hitRateLimit = true;
      break;
    }
    await response.text();
  }
  expect(hitRateLimit).to.be.true;
});
