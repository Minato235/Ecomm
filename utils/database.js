const Sequelize = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();




const sequelize = new Sequelize("test", "root", "123456789", {
    dialect: "mysql",
    host: "localhost"
});

module.exports = sequelize;