const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(express.static("public"))

app.get("/", (req, res) => {
  res.render("index", { tittle: "Landing Page" });
});

app.get("/home", (req, res) => {
  const barang = [
    {
      nama: "kue",
      stock: 40
    },
    {
      nama: "cookie",
      stock: 80
    }
  ];
  res.render("home", { tittle: "Home Page", barang });
});

app.use((req, res, next) => {
  res.status(404).send("404 not found ");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
