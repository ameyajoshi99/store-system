const CategoriesModel = (sequelize, DataTypes) => {
    const { STRING } = DataTypes;
  
    const Model = sequelize.define('Categories', {
      category: {
        validate: {
          notEmpty: true,
        },
        allowNull: false,
        type: STRING,
        unique: true,
      },
  
      description: {
        validate: {
          notEmpty: true,
        },
        allowNull: false,
        type: STRING,
      },
    });
  
    return Model;
  };
  
  module.exports = CategoriesModel;
  