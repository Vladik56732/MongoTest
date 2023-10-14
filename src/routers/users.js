import express from 'express'
import User from '../models/User.js'
import { drawError } from './drawError.js'

export const router = express.Router()

router.get('/', async (req, res) => {
    const usersArray = await User.find()
    console.log(usersArray)
    return res.render('users', { users: usersArray })
})
