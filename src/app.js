import express from "express";
import { engine } from "express-handlebars";
import productsRouter from "./routes/products.router.js";
import cartsRouter from "./routes/carts.router.js";
import viewsRouter from "./routes/views.router.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 🔹 Handlebars
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./src/views");

// 🔹 Archivos estáticos
app.use(express.static("./src/public"));

// 🔹 Rutas
app.use("/api/products", productsRouter);
app.use("/api/carts", cartsRouter);
app.use("/", viewsRouter);

export default app;
