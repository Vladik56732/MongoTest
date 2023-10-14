import express from 'express'
import dotenv from 'dotenv'
import { createHmac } from 'crypto'
import User from '../models/User.js'

dotenv.config()
const secret = process.env.SECRET

export const router = express.Router()

router.get('/', (req, res) => {
    return res.render('register', { error: '' })
})
router.post('/', async (req, res) => {
    const { login, password, confirmPassword } = req.body
    if (login.length < 4 || login.length > 16) {
        return res.render('register', {
            error: 'Логин должен быть от 4 до 16 символов',
        })
    }
    if (password.length < 5 || password.length > 15) {
        return res.render('register', {
            error: 'Пароль должен быть от 5 до 15 символов',
        })
    }
    if (confirmPassword != password) {
        return res.render('register', {
            error: 'Пароли должны совпадать ',
        })
    }
    console.log('login:', login)
    console.log('password:', password)
    // Проверка на то, что такой пользователь уже существует
    const candidate = await User.findOne({ login })
    if (candidate) {
        return res.render('register', {
            error: 'Такой пользователь уже существует',
        })
    }

    const hash = createHmac('sha256', secret).update(password).digest('hex')
    await User.create({ login, password: hash })

    return res.send(`${login} Молодец`)
})
