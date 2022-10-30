const { QueryTypes } = require('sequelize');
const { models } = require('./mysql-sequelize');
const sequelize = require('./mysql-sequelize');

const availableModels = {
  'user': models.User,
  'auth': models.Auth,
  'product': models.Product,
  'review': models.Review
};

async function list(table) {
  try {
    const data = await availableModels[table].findAll();

    return data;
  } catch (error) {
    return error;
  }
}

async function get(table, id, asociations) {
  try {
    let data;

    if (!asociations) {
      data =  await availableModels[table].findByPk(id);
    } else {
      data =  await availableModels[table].findByPk(id, {
        include: asociations
      });
    }

    if (!data) {
      return null;
    }

    return data;
  } catch (error) {
    return error;
  }
}

async function insert(table, data) {
  try {
    const result = await availableModels[table].create(data);
    console.log('This error');
    console.log(result);

    return result;
  } catch (error) {
    return error;
  }
}

async function update(table, data, id) {
  try {
    const item = await this.get(table, id);
    const result = await item.update(data);
    return result;
  } catch (error) {
    return error;
  }
}

async function query(table, query, join) {
  let joinQuery = '';
  if (join) {
    const key = Object.keys(join)[0];
    const val = join[key];
    joinQuery = `JOIN ${key} ON ${table}.${val} = ${key}.id`;
  }

  try {
    const [data] = await sequelize.query(`SELECT * FROM ${table} ${joinQuery} WHERE ${query}`,
      {
        type: QueryTypes.SELECT
      }
    );

    return data;
  } catch (error) {
    return error;
  }
}

async function remove(table, id) {
  try {
    const item = await this.get(table, id);
    await item.destroy();

    return { id };
  } catch (error) {
    return error;
  }
}

module.exports = {
  list,
  get,
  insert,
  update,
  query,
  remove
}
