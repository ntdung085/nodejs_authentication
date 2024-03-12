const express = require('express')
require('dotenv').config()
const createError = require('http-errors')
const app = express()
const UserRoute = require('./Routes/User.route')
const PORT = process.env.PORT || 3001





app.get('/', (req, res, next) => {
    console.log(a)
    res.send("Home page")

})

app.use('/user', UserRoute)


app.use((req, res, next) => {
    // const error = new Error('Not Found')
    // error.status = 500
    // next(error)
    next(createError.NotFound('This route does not exist'))
})

app.use((err, req, res, next) => {
    res.json({
        status: err.status || 500,
        message: err.message
    })
})



app.listen((PORT), () => {
    console.log(`server running on ${PORT}`)
})