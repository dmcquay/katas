import express from "express";
import uuid from "uuid";

import config from "./config";
import { insertUser } from "./db";

const app = express();

// create account
// login
// submit question
// get question
// submit answer
// get my scores

app.post("/create-account", async (req, res) => {
  const username = req.body.username;
  const passwd = req.body.password;
  await insertUser({
    id: uuid.v4(),
    username,
    passwd,
  });
});

app.listen(config.port);
