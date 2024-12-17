
function index(req, res) {
  res.render("home", { tittle: "Home Page", barang });
}
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

module.exports = { index, barang };
