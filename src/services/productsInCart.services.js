const models = require("../models");
const { Op } = require("sequelize");

class ProductsInCartServices {
  static async add(cartId, ProductId, quantity, price) {
    try {
      const result = await models.product_in_cart.create({
        cart_id: cartId,
        product_id: ProductId,
        quantity: quantity,
        price: price,
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
        include: {
          model: models.cart,
          as: "carts",
          status: {
            [Op.like]: "%completed%",
          },
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
