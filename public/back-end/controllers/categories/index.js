const { Categories } = require('../../models');

exports.create = async (args) => {
  try {
    const cat = await Categories.create(args);

    return cat.id;
  } catch (err) {
    return err;
  }
};

exports.getAll = async () => {
  try {
    return await Categories.findAll({ raw: true, order: [['category', 'DESC']] });
  } catch (err) {
    return [];
  }
};

exports.edit = async (categoryUpdated) => {
  try {
    return await Categories.update({
      ...categoryUpdated,
    }, {
      where: {
        id: categoryUpdated.id,
      },
    });
  } catch (err) {
    return err;
  }
};

exports.remove = async (id) => {
  try {
    return await Categories.destroy({ where: { id } });
  } catch (err) {
    return err;
  }
};
