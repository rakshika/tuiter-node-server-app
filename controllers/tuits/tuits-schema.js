import mongoose from 'mongoose';
const schema = mongoose.Schema({
    userName: String,
    handle: String,
    tuit: String,
    topic: String,
    time: String,
    image: String,
    likes: Number,
    liked: Boolean,
    dislikes: Number,
    disliked: Boolean
    }, {collection: 'tuits'});
export default schema;