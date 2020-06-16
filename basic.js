let dotenv = require('dotenv').config();
let Sequelize = require('sequelize');
let DataTypes = Sequelize.DataTypes;
const Op = Sequelize.Op
//creating an instance of the database
let db = new Sequelize('testdb2','alien',process.env.pass,{
    host: 'localhost',
    dialect: 'mysql',
    operatorAliases: {
        $gt: Op.gt
    }
});


//test the connection
db.authenticate()
.then(() => console.log("Connected"))
.catch((error) => console.error(error));

//creating a model

let Coders = db.define('codingAliens',{
    name: DataTypes.STRING(20),
    username: DataTypes.STRING(12),
    technology: DataTypes.STRING(20),
    age: {
        type: DataTypes.INTEGER(2),
        allowNull: false
    }
});

//Using the model to create table
db.sync()
.then(() => console.log("Sync Done"))
.catch(console.error)

//Inserting

// Coders.create({
//     name: 'XXABCDEF',
//     username: 'XXXXX',
//     technology: 'JSSS',
//     age: 21
// })

//Querying

Coders.findAll({
    where: {age: {[Op.gt]: 14}}
})
.then((coders) => {
    coders.forEach(coder => console.log(coder.dataValues) )
});