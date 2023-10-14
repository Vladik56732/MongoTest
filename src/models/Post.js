import { Schema, model } from 'mongoose'

const Post = new Schema({
    description: { type: String, require: true },
    picture: { type: String, require: true },
    timestamp: { type: String, require: true },
    creatorId: { type: String, require: true },
})
export default model('Post', Post)
