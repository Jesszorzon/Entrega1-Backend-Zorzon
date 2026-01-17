import { Router } from "express";
import ProductManager from "../managers/ProductManager.js";

const router = Router();
const manager = new ProductManager("./src/data/products.json");

router.get("/", async (req, res) => {
  const products = await manager.getProducts();
  res.json(products);
});

router.post("/", async (req, res) => {
  const newProduct = await manager.addProduct(req.body);
  res.json(newProduct);
});

export default router;
