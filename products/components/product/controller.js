const axios = require('axios');
const { json } = require('sequelize');
const error = require('../../../utils/error');

const COLLECTION = 'product';
const PRODUCTS_PUBLIC_API = 'https://www.adidas.co.uk/api/products';

module.exports = function (injectedStore) {
  let Store = injectedStore;

  function list() {
    return Store.list(COLLECTION);
  }

  async function get(id) {
    const product = await Store.get(COLLECTION, id);
    if (!product) {
      const response = await axios(`${PRODUCTS_PUBLIC_API}/${id}`);

      if (!response || !response.data) {
        throw error('Product not found', 404);
      }

      const newProduct = {
        id: response.data.id,
        payload: response.data
      }

      const result = await create(newProduct);

      return result.payload;
    }

    return product.payload;
  }

  async function create(data) {
    return await Store.insert(COLLECTION, data);
  }


  return {
    list,
    get,
  }
};
