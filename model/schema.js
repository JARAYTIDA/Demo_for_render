import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: String,
    email_id : String,
    password : String,
    createdAt: {
        type: Date,
        default: new Date()
    },
})

const user = mongoose.model('users', userSchema);

export default user;