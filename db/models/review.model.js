const{ Model, DataTypes, Sequelize} = require('sequelize');

const { USER_TABLE } = require('./user.model');
const { PRODUCT_TABLE } = require('./product.model');

const  REVIEW_TABLE= 'review';

const ReviewSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey:true,
    type: DataTypes.INTEGER
  },
  score: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  userId: {
    field: 'user_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: USER_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  productId: {
    field: 'product_id',
    allowNull: false,
    type: DataTypes.STRING,
    references: {
      model: PRODUCT_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  createdAt:{
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.fn("NOW")
  }
}

class Review extends Model
{
  static associate(models) {
    this.belongsTo(models.User, { as: 'user' });
    this.belongsTo(models.Product, { as: 'product' });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: REVIEW_TABLE,
      modelName: 'Review',
      timestamps: false
    }
  }
}

module.exports = {
  REVIEW_TABLE,
  ReviewSchema,
  Review
};
