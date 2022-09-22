'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const clothesSchema = require('./clothes');
// const clothes = require('./clothes');

// 'postgres://localhost:5432/d48-d8-api-app'
// 'postgres://username:password@localhost:5432/d48-d8-api-app'
// ternary:  WTF  what(conditional) ? return if TRUE : else return if FALSE
const DATABASE_URL = process.env.NODE_ENV === 'test'
? 'sqlite:memory' 
: process.env.DATABASE_URL;

const sequelizeOptions =
  process.env.NODE_ENV === 'production'
    ? {
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      },
    }
    : {};

// instantiates our database
const sequelizeDatabase = new Sequelize(DATABASE_URL, sequelizeOptions);

module.exports = {
  db: sequelizeDatabase
}

//create PeopleModel with our Schema
const clothesModel = clothesSchema(sequelizeDatabase, DataTypes);



module.exports = {sequelizeDatabase, clothesModel};