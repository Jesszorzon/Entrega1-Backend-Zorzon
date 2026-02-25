const socket = io();

const productList = document.getElementById("productList");

socket.on("updateProducts", (products) => {
  productList.innerHTML = "";

  products.forEach(product => {
    const li = document.createElement("li");
    li.textContent = `${product.title} - $${product.price}`;
    productList.appendChild(li);
  });
});
