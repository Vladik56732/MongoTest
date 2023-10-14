import express from 'express'

export const router = express.Router()

router.get('/', (req, res) => {
    return res.send('У меня пока нет аккаунта ')
})
