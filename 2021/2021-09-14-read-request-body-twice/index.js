const express = require("express");

const app = express();

app.use((err, req, res, next) => {
  console.log("error: " + err.message);
  res.status(500).send("there was an error");
});

// app.use((req, res, next) => {
//   let data = "";
//   req.on("data", (chunk) => (data += chunk));
//   req.on("end", () => {
//     console.log("Received data: " + data);
//     next();
//   });
// });

app.post("/test", (req, res) => {
  let data = "";
  req.on("data", (chunk) => (data += chunk));
  req.on("end", () => {
    res.send("Received data: " + data);
  });
});

app.post("/test-error", (req, res) => {
  return Promise.reject(new Error("super helpful error message"));
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
