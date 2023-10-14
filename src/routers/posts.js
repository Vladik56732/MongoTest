import express from 'express'
import * as uuid from 'uuid'
import * as path from 'path'
import Post from '../models/Post.js'

export const router = express.Router()

router.get('/', async (req, res) => {
    const postsArray = await Post.find()
    console.log(postsArray)
    return res.render('posts/index', { posts: postsArray.reverse() })
})

router.get('/create', (req, res) => {
    return res.render('posts/create')
})
router.post('/create', async (req, res) => {
    const { description } = req.body
    const { picture } = req.files

    const fileName =
        uuid.v4() + picture.name.slice(picture.name.lastIndexOf('.'))
    const filePath = path.resolve('Public/images', fileName)
    await picture.mv(filePath)

    const timestamp = new Date().getTime()
    const postData = {
        description,
        picture: fileName,
        timestamp,
        creatorId: '111',
    }
    await Post.create(postData)
    return res.redirect('/posts')
})
