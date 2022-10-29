const{ Model, DataTypes, Sequelize} = require('sequelize');

const PRODUCT_TABLE = 'product';

const ProductSchema = {
  id: {
    allowNull: false,
    primaryKey:true,
    type: DataTypes.STRING
  },
  payload: {
    allowNull: false,
    type: DataTypes.JSON
  },
  createdAt:{
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.fn("NOW")
  }
}

class Product extends Model
{
  static associate(models) {
    this.hasMany(models.Review, {
      as: 'reviews',
      foreignKey: 'productId'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PRODUCT_TABLE,
      modelName: 'Product',
      timestamps: false
    }
  }
}

module.exports = {
  PRODUCT_TABLE,
  ProductSchema,
  Product
}
