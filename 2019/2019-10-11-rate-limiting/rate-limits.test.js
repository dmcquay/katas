"use strict";

const { rateLimit, identifyClientByToken } = require("./rate-limits");
const { expect } = require("chai");
const sinon = require("sinon");

describe("rate limit middlware", () => {
  context("when rate limit is hit and window later expires", () => {
    const windowIntervalMillis = 100;
    const rateLimitMiddleware = rateLimit(
      windowIntervalMillis,
      2,
      identifyClientByToken
    );
    const req = { headers: { token: "client-A" } };

    for (let i = 0; i < 2; i++) {
      context("when rate limit has not been hit", () => {
        const res = {
          status: sinon.spy(),
          send: sinon.spy()
        };
        const next = sinon.spy();

        before(() => {
          rateLimitMiddleware(req, res, next);
        });

        it("should call next", async () => {
          expect(next.calledOnceWithExactly()).to.be.true;
        });

        it("should not call status", async () => {
          expect(res.status.notCalled).to.be.true;
        });

        it("should not call send", async () => {
          expect(res.send.notCalled).to.be.true;
        });
      });
    }

    context("when rate limit has been hit", () => {
      const res = {
        status: sinon.spy(),
        send: sinon.spy()
      };
      const next = sinon.spy();

      before(() => {
        rateLimitMiddleware(req, res, next);
      });

      it("should set status to 429", async () => {
        expect(res.status.calledOnceWithExactly(429)).to.be.true;
      });

      it("should set body to Too Many Requests", async () => {
        expect(res.send.calledOnceWithExactly("Too Many Requests")).to.be.true;
      });

      it("should not call next", async () => {
        expect(next.notCalled).to.be.true;
      });
    });

    context("when rate limit window has passed", function() {
      this.timeout(windowIntervalMillis * 2);

      const res = {
        status: sinon.spy(),
        send: sinon.spy()
      };
      const next = sinon.spy();

      before(async () => {
        await new Promise(r => setTimeout(r, windowIntervalMillis));
        rateLimitMiddleware(req, res, next);
      });

      it("should call next", async () => {
        expect(next.calledOnceWithExactly()).to.be.true;
      });

      it("should not call status", async () => {
        expect(res.status.notCalled).to.be.true;
      });

      it("should not call send", async () => {
        expect(res.send.notCalled).to.be.true;
      });
    });
  });

  context("when rate limit is exceeded for client A, but not client B", () => {
    const rateLimitMiddleware = rateLimit(1000, 2, identifyClientByToken);
    const resA = {
      status: sinon.spy(),
      send: sinon.spy()
    };
    const nextA = sinon.spy();

    const resB = {
      status: sinon.spy(),
      send: sinon.spy()
    };
    const nextB = sinon.spy();

    before(() => {
      const reqA = { headers: { token: "client-A" } };
      for (let i = 0; i < 5; i++) {
        rateLimitMiddleware(reqA, resA, nextA);
      }

      const reqB = { headers: { token: "client-B" } };
      rateLimitMiddleware(reqB, resB, nextB);
    });

    it("should have rate limited client A", () => {
      expect(resA.status.calledWithExactly(429)).to.be.true;
    });

    it("should not have rate limited client B", () => {
      expect(resB.status.notCalled).to.be.true;
    });
  });

  context("when client cannot be identified", () => {
    const rateLimitMiddleware = rateLimit(1000, 2, () => undefined);
    const req = {};
    const res = {
      status: sinon.spy(),
      send: sinon.spy()
    };
    const next = sinon.spy();

    before(() => {
      rateLimitMiddleware(req, res, next);
    });

    it("should have responded with bad request", () => {
      expect(res.status.calledWithExactly(400)).to.be.true;
    });
  });
});

describe("#identifyClientByToken", () => {
  it("should return the token", () => {
    const req = {
      headers: {
        token: "client-token"
      }
    };
    expect(identifyClientByToken(req)).to.equal("client-token");
  });
});
