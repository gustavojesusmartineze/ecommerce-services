const auth = require('../auth');

const TABLE_USER = 'user';

module.exports = function (injectedStore, injectedCache) {
  let store = injectedStore;
  let cache = injectedCache;

  async function list() {
    let users = await cache.list(TABLE_USER);

    if (!users) {
      users = await store.list(TABLE_USER);
      cache.upsert(TABLE_USER, users);
      console.log(`${TABLE_USER} was not in cache, getting data from DB`);
    } else {
      console.log('Getting data from cache');
    }

    return users;
  }

  async function get(id) {
    const url = `${TABLE_USER}_${id}`;
    let user = await cache.list(url);

    if (!user) {
      user = await store.get(TABLE_USER, id);
      cache.upsert(TABLE_USER, user);
      console.log(`${url} was not in cache, getting data from DB`);
    } else {
      console.log('Getting data from cache');
    }

    return store.get(TABLE_USER, id);
  }

  async function create(body) {
    const user = {
      name: body.name,
      username: body.username
    }

    const userInsert = await store.insert(TABLE_USER, user);

    if (body.password || body.username) {
      return await auth.create({
        id: userInsert.id,
        username: body.username,
        password: body.password,
      })
    }

    return userInsert;
  }

  async function update(id, body) {
    const user = {
      name: body.name,
    }

    return store.update(TABLE_USER, user, id);
  }

  return {
    list,
    get,
    create,
    update
  }
}
