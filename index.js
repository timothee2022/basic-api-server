'use strict';

require('dotenv').config();
const { db } =require('./src/models');
const { clothesModel } = require('./src/models/clothes');
const { start } = require('./src/server');



db.sync()
.then(() => console.log('Successful Connection'))
.catch(err => console.error(err));