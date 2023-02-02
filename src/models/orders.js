const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return orders.init(sequelize, DataTypes);
}

/**
 * @openapi
 * components:
 *   schema:
 *     orders:
 *       type: object
 *       properties:
 *         id:
 *           type: int
 *           example: 2
 *         username:
 *           type: string
 *           example: Pepito
 *         email:
 *           type: string
 *           example: pepito@gmail.com
 *         orders:
 *           type: array
 *           items:
 *             properties:
 *               id:
 *                 type: int
 *                 example: 1
 *               total_price:
 *                 type: int
 *                 example: 100
 *               user_id:
 *                 type: int
 *                 example: 1
 *               status:
 *                 type: string
 *                 example: purchased
 */


class orders extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    total_price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    status: {
      type: DataTypes.ENUM("pending","purchased"),
      allowNull: true,
      defaultValue: "pending"
    }
  }, {
    sequelize,
    tableName: 'orders',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "orders_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
