const axios = require('axios');

const error = require('../../../utils/error');
const { average } = require('./../../../utils/helpers');

const COLLECTION = 'review';
const PRODUCT_SERVICE_URL = 'http://localhost:3002/api/product';

module.exports = function (injectedStore) {
  let Store = injectedStore;

  async function get(productId) {
    const result = await axios(`${PRODUCT_SERVICE_URL}/${productId}`);

    if (!result || !result.data || !result.data.body) {
      throw error('Product not found', 404);
    }

    if (!result.data.body.product_id || !result.data.body.payload || !result.data.body.reviews) {
      throw error('Review not found', 404);
    }

    const newProduct = {
      product_id: result.data.body.product_id,
      average: result.data.body.reviews.average,
      reviews_number: result.data.body.reviews.reviews_number,
    }

    return newProduct;
  }

  async function create(data) {

    const review = {
			userId: data.userId,
			productId: data.productId,
			score: data.score,
    }

    let existReview = await Store.query(COLLECTION, `product_id='${data.productId}' AND user_id='${data.userId}'`);

    if (existReview) {
      throw error('You can not have duplicated reviews on same product', 403);
    }

    let newReview = await Store.insert(COLLECTION, review);

    return {
      id: newReview.id,
      product_id: newReview.productId,
      user_id: newReview.userId,
      score: newReview.score
    }
  }

  return {
    get,
    create,
  }
};
