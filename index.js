const express = require("express");
const app = express();
const axios = require("axios");
var bodyparser = require("body-parser");
const login = {
  url: "https://eightwestsim.perf.davra.io/api/v1/iotdata",
  username: "admin",
  password: "admin",
};

const payload = {
  UUID: "3eaa6590-a7ca-4af2-9650-a289e658366a",
  msg_type: "event",
  name: "email-action",
  value: "email-test.davra.com",
};

app.get("/triggerRule", function (req, res) {
  console.log("Request recieved");
  console.log(req.body.value);

  const respone = axios
    .put(
      login.url,
      payload,
      {
        auth: {
          username: login.username,
          password: login.password,
        },
      },
      { headers: { "Content-Type": "application/json" } }
    )
    .then(res.send("success"));

  console.log("IOT data recieved and relayed back to platform");
});

app.get("/", function (req, res) {
  res.send("davra.com node microservice!");
});

const SERVER_PORT = 8080;
app.listen(SERVER_PORT, function () {
  console.log(
    "davra.com node microservice listening on port " + SERVER_PORT + "!"
  );
});
