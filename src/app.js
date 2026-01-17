import express from "express";
import cartsRouter from "./routes/carts.router.js";

const app = express();

app.use(express.json());
app.use("/api/carts", cartsRouter);

export default app;
