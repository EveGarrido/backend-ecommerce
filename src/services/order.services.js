const models = require('../models');

class OrderServices {
  static async create(user_id, total_price){
    try {
      const result = await models.order.create({
        user_id: user_id, 
        total_price: total_price
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getAll(){
    try {
      const result = await models.order.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }
};

module.exports = OrderServices;