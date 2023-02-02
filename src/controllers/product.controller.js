const ProductServices = require('../services/product.services');
const ProductsInCartServices = require('../services/productsInCart.services');

const createProduct = async (req, res)=>{
 try {
  const newProduct = req.body;
  const result = await ProductServices.create(newProduct);
  res.status(201).json(result);
 } catch (error) {
   res.status(400).json(error.message);
 }
};

const getAllProductsAvailable = async (req, res)=>{
   try {
    const result = await ProductServices.getProducts();
    res.status(200).json(result);
   } catch (error) {
    res.status(400).json(error.message);
   }
}

const getProductInCartbyIdUser = async (req, res)=>{
  try {
    const {id} = req.params;
    const result = await ProductsInCartServices.getByuser(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message)
  }
};

module.exports = {
  createProduct,
  getAllProductsAvailable,
  getProductInCartbyIdUser
};