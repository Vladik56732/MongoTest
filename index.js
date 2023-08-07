import express from 'express'
import mongoose from 'mongoose'
import { router } from './src/routers/index.js'

const app = express()

app.use(express.urlencoded({ extended: true }))
// Проверка на то, что такой пользователь уже существует
const candidate = await User.findOne({ login })
if (candidate) {
    return res.send('Такой пользователь уже существует')
}

app.use('/', router)
async function start() {
    await mongoose.connect(
        'mongodb+srv://vladbelevcov7:8tL-Z2v-Ncr-UnZ@cluster0.hppbwtc.mongodb.net/'
    )
    app.listen(3000, () => {
        console.log('http://localhost:3000')
    })
}

start()
