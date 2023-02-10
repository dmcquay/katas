const moment_2_11_2 = require("moment-2-11-2");
const moment_2_13_0 = require("moment-2-13-0");

// moment-timezone has a peerDep on moment
// we have installed moment@2.13.0 unaliased, so that's
// the version that moment-timezone is getting
const moment = require("moment-timezone");

// if we create a moment object using 2.11.2 and then feed that
// into moment-timezone, the mismatched moment version causes
// the following error:
// TypeError: Array.prototype.some called on null or undefined
moment.tz(moment_2_11_2(), "US/Pacific");

// but if we use a matching version of moment, it works fine
moment.tz(moment_2_13_0(), "US/Pacific");
