import express from 'express'
import dotenv from 'dotenv'
import { createHmac } from 'crypto'
import User from '../models/User.js'

dotenv.config()
const secret = process.env.SECRET

export const router = express.Router()

router.get('/', (req, res) => {
    return res.render('auth', { error: '' })
})
router.post('/', async (req, res) => {
    const { login, password } = req.body
    // Проверка на то, что такой пользователь есть
    const candidate = await User.findOne({ login })
    if (!candidate) {
        return res.render('auth', {
            error: 'Такого пользователя не существует',
        })
    }
    const hash = createHmac('sha256', secret).update(password).digest('hex')

    if (candidate.password != hash) {
        return res.render('auth', { error: 'Неверно введен пароль' })
    }
    return res.render('auth', { error: 'Вы вошли в аккаунт' })
})
