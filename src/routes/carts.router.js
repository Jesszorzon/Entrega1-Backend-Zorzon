import { Router } from "express";
import CartManager from "../managers/CartManager.js";

const router = Router();
const cartManager = new CartManager("./src/data/carts.json");

// crear carrito
router.post("/", async (req, res) => {

  try {

    const cart = await cartManager.createCart();

    res.json({
      status: "success",
      payload: cart
    });

  } catch (error) {

    res.json({
      status: "error",
      message: error.message
    });

  }

});

// obtener carrito por id
router.get("/:cid", async (req, res) => {

  try {

    const { cid } = req.params;

    const cart = await cartManager.getCartById(cid);

    res.json({
      status: "success",
      payload: cart
    });

  } catch (error) {

    res.json({
      status: "error",
      message: error.message
    });

  }

});

// agregar producto al carrito
router.post("/:cid/product/:pid", async (req, res) => {

  try {

    const { cid, pid } = req.params;

    const result = await cartManager.addProductToCart(cid, pid);

    res.json({
      status: "success",
      payload: result
    });

  } catch (error) {

    res.json({
      status: "error",
      message: error.message
    });

  }

});

export default router;