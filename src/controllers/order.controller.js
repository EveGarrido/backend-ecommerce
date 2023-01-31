const OrderServices = require('../services/order.services');

const createOrder = async (req, res)=>{
  try {
    const newOrder = req.body;
    const result = await OrderServices.create(newOrder);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getAllOrders = async (req, res)=>{
  try {
    const result = await OrderServices.getAll();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

module.exports = {
  createOrder,
  getAllOrders
};

//revisar ruta de ejecución