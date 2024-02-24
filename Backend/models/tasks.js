const sequelize = require("../util/database");
const { INTEGER, STRING, BOOLEAN } = require('sequelize')

const Tasks = sequelize.define('tasks', {
    id: {
        type: INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: STRING,
        allowNull: false
    },
    description: {
        type: STRING,
        allowNull: false
    },
    completed: {
        type: BOOLEAN,
        allowNull: false
    }

})



module.exports = Tasks