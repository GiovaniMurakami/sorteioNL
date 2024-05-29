const { DataTypes } = require("sequelize");

const db = require("../db/conn");

const Winner = db.define("Winner", {
    name: {
        type: DataTypes.STRING,
        require: true,
    },
    code: {
        type: DataTypes.STRING,
        require: true,
    },
});

module.exports = Winner;
