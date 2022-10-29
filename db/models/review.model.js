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
    allowNull: true,
    type: DataTypes.INTEGER,
    references: {
      model: USER_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  productId: {
    field: 'product_id',
    allowNull: true,
    type: DataTypes.STRING,
    references: {
      model: PRODUCT_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
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

    // this.belongsToMany(models.Product, {
    //   as: 'items',
    //   through: models.ReviewProduct,
    //   foreignKey: 'reviewId',
    //   otherKey: 'productId'
    // });
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
