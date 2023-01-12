const products = { name: "Caneca", price: 1.8, materials: "porcelana" };
for (let value of Object.entries(products)) {
  console.log(value[0], value[1]);
}
