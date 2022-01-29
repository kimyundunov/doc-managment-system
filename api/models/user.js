'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.role, {
        foreignKey: 'roleId'
      })
      User.hasMany(models.doc, {
        foreignKey: {
          name: 'authorId',
          allowNull: false
        }
      })
      User.hasMany(models.doc, {
        foreignKey: {
          name: 'executorId',
          allowNull: false
        }
      })
      User.hasMany(models.doc, {
        foreignKey: {
          name: 'controllerId',
          allowNull: false
        }
      })
    }
  };
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
  });
  return User;
};