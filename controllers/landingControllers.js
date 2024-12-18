function index(req, res) {
  res.render("index", { tittle: "Landing Page" });
}

module.exports = { index };
