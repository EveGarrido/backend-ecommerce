const models = require('../models');

class CartServices {
  static async createCart(id){
    try {
      const result = await models.cart.create({user_id: id, total_price: 0});
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async updateCart(cartId, totalPriceCart){
    try {
      const field = { total_price: totalPriceCart};
      const result = await models.cart.update(field, { where: {id: cartId} });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async updateCart(field, id){
    try {
      const result = await models.cart.update(field, { where: { id } });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getCartById(id){
    try {
      const cart = await models.cart.findOne({
        where: {id}
      });
      return cart;
    } catch (error) {
      throw error;
    }
  }
};

module.exports = CartServices;