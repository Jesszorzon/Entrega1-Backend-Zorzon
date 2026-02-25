import { Router } from "express";
import ProductManager from "../managers/ProductManager.js";

const router = Router();
const productManager = new ProductManager("./src/data/products.json");

// GET productos
router.get("/", async (req, res) => {
  const products = await productManager.getProducts();
  res.json(products);
});

// GET producto por ID
router.get("/:pid", async (req, res) => {
  const { pid } = req.params;
  const product = await productManager.getProductById(pid);
  res.json(product);
});

// POST crear producto
router.post("/", async (req, res) => {
  const newProduct = await productManager.addProduct(req.body);

  const products = await productManager.getProducts();

  const io = req.app.get("io");
  io.emit("updateProducts", products);

  res.json(newProduct);
});

// DELETE eliminar producto
router.delete("/:pid", async (req, res) => {
  const { pid } = req.params;

  await productManager.deleteProduct(pid);

  const products = await productManager.getProducts();

  const io = req.app.get("io");
  io.emit("updateProducts", products);

  res.json({ message: "Producto eliminado" });
});

export default router;
