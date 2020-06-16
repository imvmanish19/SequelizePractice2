let dotenv = require('dotenv').config();
let Sequelize = require('sequelize');

let db = new Sequelize('testdb2','alien',process.env.pass,{
    host: 'localhost',
    dialect: 'mysql'
});

db.authenticate()
.then(() => console.log("Connected"))
.catch((error) => console.error(error));