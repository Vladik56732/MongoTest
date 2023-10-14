import express from 'express'
import { router as newRouter } from './new.js'
import { router as oldRouter } from './old.js'

export const router = express.Router()

router.use('/new', newRouter)
router.use('/old', oldRouter)

router.get('/', (req, res) => {
    return res.send('Главная')
})
