const express = require ("express");
const ProductRoute = require ("./routes/ProductsRoute");
const app = express()

app.use(express.json());
app.use(ProductRoute);


module.exports = app;