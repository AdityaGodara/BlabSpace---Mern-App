//Libraries
const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')
const cors = require('cors')
const jwt = require('jsonwebtoken')
//Model Imports
const { User } = require('./models/userModel')
const { Gang } = require('./models/gangModel')
const { Post } = require('./models/postModel')
//Routes Imports
const userRouter = require('./Routes/userRoutes')
const gangRouter = require('./Routes/gangRoutes')
const postRouter = require('./Routes/postRoutes')

const { PORT, mongodbURL } = require('./config')

//App Essentials
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//Routes defined
app.use('/user', userRouter)
app.use('/gang', gangRouter)
app.use('/post', postRouter)




//MongoDB connectivity
mongoose.connect(mongodbURL)
    .then(() => {
        console.log("Connected to database!")
        app.listen(PORT, () => {
            console.log(`Listening to port: ${PORT}`)
        })
    })
    .catch((error) => {
        console.log(error)
    })