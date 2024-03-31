const {DataTypes} = require('sequelize');

module.exports = (seq) => {
    // defino el modelo
    seq.define('user', {
      name: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
      },
      role: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
      },
      active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        default: true
      }
    });
  };