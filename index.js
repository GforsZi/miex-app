const express = require("express");
const landingControllers = require("./controllers/landingControllers");
const homeControllers = require("./controllers/homeControllers");

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  landingControllers.index(req, res);
});

app.get("/home", (req, res) => {
  homeControllers.index(req, res);
});

app.use((req, res, next) => {
  res.status(404).send("404 not found ");
});

app.listen(port, () => {
  console.log(
    `Miex app run on localhost port ${port}, [ http://localhost:${port} ]`
  );
});
