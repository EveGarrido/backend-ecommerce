const models = require("../models");
const { Op } = require("sequelize");

class ProductServices {
  static async create(newProduct) {
    try {
      const result = await models.product.create(newProduct);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getProducts() {
    try {
      const result = await models.product.findAll({
        where: {
          availableQty: {
            [Op.gt]: 0,
          },
        },
        include: {
          model: models.users,
          as: 'user',
          attributes: ['username']
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProductServices;
