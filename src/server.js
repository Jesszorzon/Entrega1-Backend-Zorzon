import express from "express";
import mongoose from "mongoose";
import productsRouter from "./routes/products.router.js";

const app = express();
const PORT = 8080;

app.use(express.json());

app.use("/api/products", productsRouter);

// CONEXIÓN A MONGODB
mongoose.connect("mongodb+srv://jesszorzon:070324@cluster0.un5o850.mongodb.net/ecommerce")
.then(() => {
    console.log("Conectado a MongoDB");
})
.catch((error) => {
    console.log("Error conectando a MongoDB:", error);
});

app.listen(PORT, () => {
    console.log(`Servidor funcionando en puerto ${PORT}`);
});