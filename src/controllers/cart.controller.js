const models = require('../models');
const CartServices = require('../services/cart.services');
const OrderServices = require('../services/order.services');
const ProductsInCartServices = require('../services/productsInCart.services');
const UserServices = require('../services/users.services');
const ProductsInOrderServices = require('../services/productInOrder.service');
const transporter = require('../utils/mailer');

const addProductToCart = async (req, res)=>{
  try {
    const { cartId, ProductId, quantity, price } = req.body;
    if(!cartId || !ProductId || !quantity || !price){
      return res.status(400).json({message: 'Missing required fields'})
    }
    const productInCart = await ProductsInCartServices.add(cartId, ProductId, quantity, price);
    if(productInCart){
      const totalPriceCart = await models.product_in_cart.sum('price', { where: { cart_id: cartId } });
      await CartServices.updateCart(cartId, totalPriceCart);
      res.status(201).json({message: 'Product add to cart'});
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

const buyCart = async (req, res)=>{
  try {
    const { id } = req.params;
    const field = req.body;

    const cart = await CartServices.getCartById(id);
    const { user_id, total_price } = cart.dataValues;
    const newOrder = await OrderServices.create(user_id, total_price);
    const orderId = newOrder.dataValues.id;

    const productInCart = await ProductsInCartServices.getByCartId(id);
    
    productInCart.forEach(async (product)=>{
      const { cart_id, product_id, quantity, price } = product.dataValues;
      await ProductsInOrderServices.create(orderId, cart_id, product_id, quantity, price); 
    });
//verificar condición if
    if(newOrder){
      await CartServices.updateCart(field, id);
      await ProductsInCartServices.delete(id);

      const buyer = await UserServices.getById(user_id);
      const { email } = buyer.dataValues;
      await transporter.sendMail({
        to: email,
        from: "evelyn.harleth.gl@gmail.com", 
        subjetc: "Email confirmation purchase",
        html: "<h1>Thank for your purchase</h1>",
      });

      res.status(201).json({message: 'Cart bought'})
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
}

module.exports = {
  addProductToCart,
  buyCart
};