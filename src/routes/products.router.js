import { Router } from "express";
import Product from "../models/product.model.js";

const router = Router();

// GET productos con paginación
router.get("/", async (req, res) => {

  try {

    const { limit = 10, page = 1, query, sort } = req.query;

    let filter = {};
    let sortOption = {};

    if (query) {
      filter.category = query;
    }

    if (sort === "asc") {
      sortOption.price = 1;
    }

    if (sort === "desc") {
      sortOption.price = -1;
    }

    const result = await Product.paginate(filter, {
      limit: parseInt(limit),
      page: parseInt(page),
      sort: sortOption,
      lean: true
    });

    res.json({
      status: "success",
      payload: result.docs,
      totalPages: result.totalPages,
      prevPage: result.prevPage,
      nextPage: result.nextPage,
      page: result.page,
      hasPrevPage: result.hasPrevPage,
      hasNextPage: result.hasNextPage,
      prevLink: result.hasPrevPage ? `/api/products?page=${result.prevPage}` : null,
      nextLink: result.hasNextPage ? `/api/products?page=${result.nextPage}` : null
    });

  } catch (error) {

    res.json({
      status: "error",
      message: error.message
    });

  }

});


// POST crear producto
router.post("/", async (req, res) => {

  try {

    const newProduct = await Product.create(req.body);

    res.json({
      status: "success",
      payload: newProduct
    });

  } catch (error) {

    res.json({
      status: "error",
      message: error.message
    });

  }

});

export default router;