const axios = require('axios');
const { average } = require('./../../../utils/helpers');
const error = require('../../../utils/error');

const COLLECTION = 'product';
const PRODUCTS_PUBLIC_API = 'https://www.adidas.co.uk/api/products';

module.exports = function (injectedStore) {
  let Store = injectedStore;

  function list() {
    return Store.list(COLLECTION);
  }

  async function get(id) {
    try {
      const asociations = ['reviews'];

      const product = await Store.get(COLLECTION, id, asociations);
      if (!product) {
        const response = await axios.get(`${PRODUCTS_PUBLIC_API}/${id}`);

        if (!response || !response.data) {
          throw error('Product not found', 404);
        }

        const newProduct = {
          id: response.data.id,
          payload: JSON.stringify(response.data)
        }

        const result = await create(newProduct);

        return {
          id: id,
          payload: result.payload,
          reviews: {
            average: 0,
            reviews_number: 0,
          }
        };
      }

      const avg = average(product.reviews) || 0;

      return {
        product_id: product.id,
        payload: product.payload,
        reviews: {
          average: avg,
          reviews_number: product.reviews.length || 0,
        }
      }
    } catch (err) {
      throw error('Product not found', 404);
    }
  }

  async function create(data) {
    return await Store.insert(COLLECTION, data);
  }

  return {
    list,
    get,
  }
};
