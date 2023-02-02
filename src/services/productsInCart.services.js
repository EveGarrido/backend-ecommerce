const models = require("../models");

class ProductsInCartServices {
  static async add(userId, productId, quantity, priceUnitProduct) {
    try {
      const result = await models.product_in_cart.create({
        cart_id: userId,
        product_id: productId,
        quantity: quantity,
        price: quantity * priceUnitProduct,
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  //revisar Op.like
  static async getByuser(id) {
    try {
      const result = await models.users.findOne({
        where: { id },
        attributes: ['username'],
        include: {
          model: models.cart,
          as: "carts",
          where: {
            status: "pending"
          },
          attributes: ['id'],
          include: {
            model: models.product_in_cart,
            as: "product_in_carts",
          },
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async delete(id) {
    try {
      const result = await models.product_in_cart.destroy({where: { cart_id: id }});
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getByCartId(id){
    try {
      const result = await models.product_in_cart.findAll({
        where: {
          cart_id: id}
      })
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProductsInCartServices;
