const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return product.init(sequelize, DataTypes);
}

/**
 * @openapi
 * components:
 *   schema:
 *     newproduct:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: Skate
 *         price:
 *           type: int
 *           example: 100
 *         availableQty:
 *           type: int
 *           example: 50
 *         user_id:
 *           type: int
 *           example: 1
 *         image:
 *           type: string
 *           example: https://solosurf.cl/wp-content/uploads/2018/06/ND-Kayu.jpg
 */

class product extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    availableQty: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM("available","sold_out"),
      allowNull: true,
      defaultValue: "available"
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'product',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "product_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
