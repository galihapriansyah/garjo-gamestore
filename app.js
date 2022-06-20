import express from "express";
import expressLayouts from "express-ejs-layouts";
import cryptoJs from "crypto-js";
import { loadFile, findProducts } from "./utils/produk.js";
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(express.static("./public"));

app.get('/', (req, res) => {
  const produk = loadFile();
  
  res.render("home", {
    layout: "layouts/main-layout",
    title: "FF_STORE | HOME",
    produk
  });
});


app.get('/bayar', (req, res) => {
  const product = findProducts(req.query.idProduk);

  
  res.render("checkout", {
    layout: "layouts/main-layout",
    title: "FF_STORE | BAYAR",
    product,
  });
  
});

app.use("/", (req, res) => {
  res.status(404);
  res.render("notFound", {
    layout: "notFound"
  });
});

app.listen(port, () => {
  console.info(`Server berjalan di localhost:${port}`);
});