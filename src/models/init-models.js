const DataTypes = require("sequelize").DataTypes;
const _cart = require("./cart");
const _orders = require("./orders");
const _product = require("./product");
const _product_in_cart = require("./product_in_cart");
const _product_in_order = require("./product_in_order");
const _users = require("./users");

function initModels(sequelize) {
  const cart = _cart(sequelize, DataTypes);
  const orders = _orders(sequelize, DataTypes);
  const product = _product(sequelize, DataTypes);
  const product_in_cart = _product_in_cart(sequelize, DataTypes);
  const product_in_order = _product_in_order(sequelize, DataTypes);
  const users = _users(sequelize, DataTypes);

  product_in_cart.belongsTo(cart, { as: "cart", foreignKey: "cart_id"});
  cart.hasMany(product_in_cart, { as: "product_in_carts", foreignKey: "cart_id"});
  product_in_order.belongsTo(orders, { as: "order", foreignKey: "order_id"});
  orders.hasMany(product_in_order, { as: "product_in_orders", foreignKey: "order_id"});
  product_in_cart.belongsTo(product, { as: "product", foreignKey: "product_id"});
  product.hasMany(product_in_cart, { as: "product_in_carts", foreignKey: "product_id"});
  product_in_order.belongsTo(product, { as: "product", foreignKey: "product_id"});
  product.hasMany(product_in_order, { as: "product_in_orders", foreignKey: "product_id"});
  cart.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(cart, { as: "carts", foreignKey: "user_id"});
  orders.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(orders, { as: "orders", foreignKey: "user_id"});
  product.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(product, { as: "products", foreignKey: "user_id"});

  return {
    cart,
    orders,
    product,
    product_in_cart,
    product_in_order,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
