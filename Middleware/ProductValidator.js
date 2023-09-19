const {body} = require("express-validator");
const productValidator = [
    body("name").isString().withMassege("Name must be a String").notEmpty().withMessage("couldn t be empty"),
    body("description").isString().withMassege("Name must be a String").notEmpty().withMessage("couldn t be empty"),
]
module.exports = productValidator;