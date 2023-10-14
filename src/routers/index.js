import express from 'express'
import { router as registerRouter } from './register.js'
import { router as authRouter } from './auth.js'
import { router as homeRouter } from './home/index.js'
import { router as usersRouter } from './users.js'
import { router as postsRouter } from './posts.js'

export const router = express.Router()

router.get('/', (req, res) => {
    return res.redirect('/posts')
})
router.use('/register', registerRouter)
router.use('/auth', authRouter)
router.use('/home', homeRouter)
router.use('/users', usersRouter)
router.use('/posts', postsRouter)
