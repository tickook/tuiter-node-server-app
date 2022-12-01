import mongoose from 'mongoose';
const schema = mongoose.Schema({
    // _id: Number,
    tuit: String,
    handle: String,
    userName: String,
    logoImage: String,
    likes: Number,
    dislikes: Number,
    replies: Number,
    retuits: Number,
    comments: Number,
    liked: Boolean,
}, {collection: 'tuits'});
export default schema;

