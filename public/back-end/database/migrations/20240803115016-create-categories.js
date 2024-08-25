const onMigrate = (queryInterface, DataTypes) => {
  const { INTEGER, STRING } = DataTypes;

  queryInterface.createTable('Categories', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: INTEGER,
    },
    category: {
      allowNull: false,
      type: STRING,
    },
    description: {
      allowNull: false,
      type: STRING,
      unique: true,
    }
  });
};


const onRollback = queryInterface => queryInterface.dropTable('Categories');

module.exports = {
  up: onMigrate,

  down: onRollback
};
