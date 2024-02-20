const { minimatch } = require("minimatch");

// Cypress Docs: https://docs.cypress.io/api/commands/intercept#Glob-Pattern-Matching-URLs
// Minimatch Docs: https://github.com/isaacs/minimatch

// matchBase (snippet from Minimatch Docs):
// If set, then patterns without slashes will be matched against the basename of the path if it contains
// slashes. For example, a?b would match the path /xyz/123/acb, but not /xyz/acb/123.

// output (for quick reference without running the code):
// path: /xyz/123/acb, pattern: /xy**b, result: false
// path: /xyz/123/acb, pattern: /xy**, result: false
// path: /xyz/123/acb, pattern: /xyz/**, result: true
// path: /xyz/123/acb/asdf/one/two, pattern: /xyz/**, result: true
// path: /xyz/123/acb/asdf/one/two, pattern: /xyz/**/two, result: true
// path: /xyz/123/acb, pattern: **/acb, result: true
// path: /xyz/123/acb, pattern: a?b, result: true
// path: /xyz/123/acb, pattern: /a?b, result: false
// path: /xyz/123/acb, pattern: 123/a?b, result: false
// path: /xyz/123/acb, pattern: /xyz/123/a?b, result: true
// path: https://example.com/xyz/123/acb, pattern: /xyz/123/a?b, result: false
// path: /xyz/123/acb/asdf, pattern: a?b, result: false

const patterns = [
  ["/xyz/123/acb", "/xy**b"],
  ["/xyz/123/acb", "/xy**"],
  ["/xyz/123/acb", "/xyz/**"],
  ["/xyz/123/acb/asdf/one/two", "/xyz/**"],
  ["/xyz/123/acb/asdf/one/two", "/xyz/**/two"],
  ["/xyz/123/acb", "**/acb"],
  ["/xyz/123/acb", "a?b"],
  ["/xyz/123/acb", "/a?b"],
  ["/xyz/123/acb", "123/a?b"],
  ["/xyz/123/acb", "/xyz/123/a?b"],
  ["https://example.com/xyz/123/acb", "/xyz/123/a?b"],
  ["/xyz/123/acb/asdf", "a?b"],
];

for (let [path, pattern] of patterns) {
  const result = minimatch(path, pattern, { matchBase: true });
  console.log(`path: ${path}, pattern: ${pattern}, result: ${result}`);
}
