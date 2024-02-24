// Importing express
const express = require('express')
require('dotenv').config()

// Importing middlewares
const cors = require('cors')
const bodyParser = require('body-parser')

// importing db
const db = require('./util/database')
const app = express()

// importing routes
const taskRoutes = require('./routes/taskRoutes')


// Applying middlewares
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/task', taskRoutes)


// sync database and listen
db.sync(
    // { force: true }
)
    .then(() => {
        app.listen(process.env.RUNNING_PORT, () => {
            console.log('App Started ..')
        })
    })
    .catch(err => console.log(err))

