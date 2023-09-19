
let pruducts =
[
    {
    "id": 1,
    "name":"Geforce 4090 ti",
    "description": "placa de video"
},
{
    "id": 2,
    "name":"Geforce 4090 ",
    "description": "placa de video"
},
{   "id":3,
    "name":"Geforce 4080 ti",
    "description": "placa de video"

}
]
const saveProduct = (name,description) => {
    const id = products [products.lenght - 1].id;
    const product = {
        id: id+1,
        name,
        description

    }
    products.push(product);
    return true;
}
const getAllProducts = () => {
    return pruducts;
}
module.exports = { saveProduct, getAllProducts };