function func1() {
  throw new Error("Base error");
}

try {
  func1();
} catch (e) {
  console.log("Error caught in index.js");
  throw new Error("Secondary error. Message: " + e.message);
}
