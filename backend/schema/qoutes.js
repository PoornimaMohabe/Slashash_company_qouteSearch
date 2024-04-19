const { sequelize } = require("./connect")

const { DataTypes } = require("sequelize")

//  qoutes schema
const Qoutes = sequelize.define("qoutes", {
    content: DataTypes.STRING,
    aouthor: DataTypes.STRING,
    tags: DataTypes.STRING

})
//  exporting schema
module.exports = {
    Qoutes
}