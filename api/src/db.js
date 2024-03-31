require('dotenv').config();
const modelUser = require('./models/User')
const {
    DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME
  } = process.env;
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
})
modelUser(sequelize);


module.exports = {
    ...sequelize.models,
    sq: sequelize,
}