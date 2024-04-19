const { Sequelize } = require('sequelize');

// establishment for mysql workbench
const sequelize = new Sequelize('qoutes', 'root', 'Poornima1999#', {
    host: 'localhost',
    dialect: "mysql"
});

module.exports = {
    sequelize
};