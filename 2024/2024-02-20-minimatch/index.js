const { minimatch } = require("minimatch");

/**
matchBase
If set, then patterns without slashes will be matched against the basename of the path if it contains
slashes. For example, a?b would match the path /xyz/123/acb, but not /xyz/acb/123.
 */

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
