const ProductService = require("../services/ProductService");
const {validationResult} = require("express-validator");

const getAllProducts = (req,res) => {
    const products = ProductService.getAllProducts();
    res.json(products);
}

const saveProduct = (req,res) => {
    const errorResult = validationResult(req).array();
    if(errorResult && errorResult.lenght > 0){
        const message = errorResult[0].path + errorResult[0].msg;
        const errorMessage = { error: { message } };
        res.status(400).send(errorMessage);
    }
    else{
        const response = ProductService.saveProduct(req.body.name, req.body.description);
        
            
            if(response)
            {
                res.send("Producto Cargando...");
        
            }
            else
            {
            res.status(500).send("Error al cargar el producto");   
            }
            
        
    }

    
}
module.exports = { getAllProducts, saveProduct};
