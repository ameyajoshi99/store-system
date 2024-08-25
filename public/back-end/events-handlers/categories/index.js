const categoryController = require('../../controllers/categories');
const CATEGORIES_OPERATION_TYPES = require('./types');

const handleCategoriesEvent = (operation, args) => {
  switch (operation) {
    case CATEGORIES_OPERATION_TYPES.CREATE_CATEGORIES: return categoryController.create(args);

    case CATEGORIES_OPERATION_TYPES.READ_CATEGORIES: return categoryController.getAll();

    case CATEGORIES_OPERATION_TYPES.UPDATE_CATEGORIES: return categoryController.edit(args);

    case CATEGORIES_OPERATION_TYPES.DELETE_CATEGORIES: return categoryController.remove(args);

    default: return {};
  }
};

module.exports = handleCategoriesEvent;
