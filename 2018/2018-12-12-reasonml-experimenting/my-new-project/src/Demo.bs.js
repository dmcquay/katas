// Generated by BUCKLESCRIPT VERSION 4.0.11, PLEASE EDIT WITH CARE
'use strict';

var Pervasives = require("bs-platform/lib/js/pervasives.js");

var l1 = /* :: */[
  "b",
  /* :: */[
    "c",
    /* [] */0
  ]
];

var l2 = /* :: */[
  "a",
  l1
];

var l3 = Pervasives.$at(l1, /* :: */[
      "d",
      /* [] */0
    ]);

var a1 = /* array */[
  "b",
  "c"
];

function len(myList) {
  if (myList) {
    return 1 + len(myList[1]) | 0;
  } else {
    return 0;
  }
}

console.log(l1);

var abc = /* :: */[
  "a",
  /* :: */[
    "b",
    /* :: */[
      "c",
      /* [] */0
    ]
  ]
];

exports.l1 = l1;
exports.l2 = l2;
exports.l3 = l3;
exports.a1 = a1;
exports.abc = abc;
exports.len = len;
/* l3 Not a pure module */