const {DataTypes} = require('sequelize');

module.exports = (seq) => {
    // defino el modelo
    seq.define('User', {
      name: {
        type: DataTypes.STRING,
        allowNull: true,

      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
      },
      role: {
        type: DataTypes.STRING,
        allowNull: true,
      
      },
      active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        default: true
      }
    });
  };