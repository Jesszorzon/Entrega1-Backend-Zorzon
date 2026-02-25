# Entrega N°1 – Backend | API de Productos y Carritos

## 📌 Descripción

Este proyecto consiste en una API desarrollada con Node.js y Express que permite gestionar productos y carritos de compra, utilizando persistencia de datos mediante archivos JSON.

No cuenta con frontend. Todas las pruebas se realizan mediante Postman u otro cliente HTTP.

---

## 🚀 Tecnologías utilizadas

* Node.js
* Express
* File System (fs)
* JavaScript ES Modules

---

## 📂 Estructura del proyecto

```
src/
 ├── app.js
 ├── server.js
 ├── routes/
 │   ├── products.router.js
 │   └── carts.router.js
 ├── managers/
 │   ├── ProductManager.js
 │   └── CartManager.js
 └── data/
     ├── products.json
     └── carts.json
```

---

## 🛒 Endpoints disponibles

### Productos `/api/products`

* **GET /**
  Lista todos los productos.

* **GET /:pid**
  Obtiene un producto por su ID.

* **POST /**
  Crea un nuevo producto.

* **PUT /:pid**
  Actualiza un producto existente.

* **DELETE /:pid**
  Elimina un producto por ID.

---

### Carritos `/api/carts`

* **POST /**
  Crea un nuevo carrito.

* **GET /:cid**
  Obtiene los productos de un carrito.

* **POST /:cid/product/:pid**
  Agrega un producto al carrito o incrementa su cantidad.

---

## ▶️ Ejecución del proyecto

1. Instalar dependencias:

```bash
npm install
```

2. Iniciar el servidor:

```bash
node src/server.js
```

El servidor se ejecuta en:

```
http://localhost:8080
```

---

## 🧪 Pruebas

Las pruebas de los endpoints se realizaron utilizando Postman.

---

## ✍️ Autor

Jesica Zorzon
