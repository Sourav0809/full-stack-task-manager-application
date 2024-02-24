const { Sequelize } = require('sequelize')


const sequelize = new Sequelize('taskmanager', process.env.DB_USERNAME, process.env.DB_PWD, {
    dialect: "mysql",
    host: process.env.DB_HOST,
    logging: false
})



module.exports = sequelize