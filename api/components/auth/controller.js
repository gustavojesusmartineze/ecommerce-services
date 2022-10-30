const bcrypt = require('bcrypt');
const { sign } = require('./../../../auth');

const TABLE = 'auth';
const config = require('./../../../config');

module.exports = function (injectedStore) {
  let store = injectedStore;

  async function login(username, password) {
    const data = await store.query(TABLE, `username='${username}'`);

    if (!data || !data.password) {
      throw new Error('Invalid information');
    }

    const validPassword = await bcrypt.compare(password, data.password);

    if(!validPassword) {
      throw new Error('Invalid information');
    }

    // Generate Token
    return sign({ ...data });
  }

  async function create(data) {
    const authData = {
      id: data.id,
      username: data.username
    }

    if (data.password) {
      authData.password = await bcrypt.hash(data.password, config.security.salt);
    }

    try {
      return  await store.insert(TABLE, authData);
    } catch (error) {
      throw new Error('Invalid information');
    }


  }

  async function update(data) {
    const authData = {
      id: data.id,
    }

    if (data.username) {
      authData.username = data.username;
    }

    if (data.password) {
      authData.password = await bcrypt.hash(data.password, config.security.salt);
    }

    return store.update(TABLE, authData);
  }

  return {
    login,
    create,
    update
  }
};
