'use strict';

module.exports = (sequelizeDatabase, DataTypes) => {
  return sequelizeDatabase.define('clothes', {
    name: {
      brand: DataTypes.STRING,
      allowNull: false,
    },
    size: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    gender: {
      type: DataTypes.ENUM,
      values: ['they/them', 'she/her', 'he/him'],
      allowNull: true,
    },
  });
};