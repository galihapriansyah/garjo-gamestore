import fs from "fs";

// cek apakah folder data sudah ada
const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync("data");
};

// cek apakah file products.json sudah ada
const filePath = "./data/products.json";
if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, "[]");
};

// membaca file products.json
const loadFile = () => {
  const fileBuffer = fs.readFileSync("./data/products.json", "utf-8");
  const products = JSON.parse(fileBuffer);
  return products;
};

const findProducts = (idProduk) => {
  const products = loadFile();
  const product = products.find((product) => product.id === idProduk
  );
  return product;
};

export { loadFile, findProducts }