'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Doc extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Doc.belongsTo(models.type, {
        foreignKey: 'typeId'
      })
      Doc.belongsTo(models.user, {
        foreignKey: 'authorId'
      })
      Doc.belongsTo(models.user, {
        foreignKey: 'executorId'
      })
      Doc.belongsTo(models.user, {
        foreignKey: 'controllerId'
      })
    }
  };
  Doc.init({
    name: DataTypes.STRING,
    dateReg: DataTypes.STRING,
    dateDue: DataTypes.STRING,
    url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Docs',
  });
  return Doc;
};