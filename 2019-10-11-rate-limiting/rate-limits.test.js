"use strict";

const { rateLimit } = require("./rate-limits");
const { expect } = require("chai");
const sinon = require("sinon");

describe("rate limiting of /", () => {
  const windowIntervalMillis = 100;
  const rateLimitMiddleware = rateLimit(windowIntervalMillis, 2);

  for (let i = 0; i < 2; i++) {
    context("when rate limit has not been hit", () => {
      const req = {};
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
    const req = {};
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

    const req = {};
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
