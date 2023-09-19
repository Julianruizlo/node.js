const { Router } = require("express") ;
const ProductControler = require("../controlers/ProductControler");
const ProductValidator = require("./Middleware/ProductValidator");
const router = Router ();


router.get("/products", ProductControler.getAllProducts);
router.get("/products", ProductValidator, ProductControler.saveProduct);

module.exports = router;

