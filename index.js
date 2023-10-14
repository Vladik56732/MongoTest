import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import fileUpload from 'express-fileupload'
import { router } from './src/routers/index.js'

dotenv.config()
const mongoUrl = process.env.MONGO_URL

const app = express()

app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')

app.use('/public', express.static('public'))

app.use(fileUpload())

app.use('/', router)
async function start() {
    await mongoose.connect(mongoUrl)
    app.listen(3000, () => {
        console.log('http://localhost:3000')
    })
}

start()
