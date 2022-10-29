const { User, UserSchema } = require('./user.model');
const { Auth, AuthSchema } = require('./auth.model');
const { Product, ProductSchema } = require('./product.model');
const { Review, ReviewSchema } = require('./review.model');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Auth.init(AuthSchema, Auth.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
  Review.init(ReviewSchema, Review.config(sequelize));

  User.associate(sequelize.models);
  Auth.associate(sequelize.models);
  Product.associate(sequelize.models);
  Review.associate(sequelize.models);
}

module.exports=setupModels;
