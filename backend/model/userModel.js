const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },

    password: {
        type: String,
        require: true
    },
    name:{
        type: String,
    },
    profilePic: String,
    role: String
})

const userModel = mongoose.model("User", userSchema)

//module.exports = mongoose.model("User", userSchema)

module.exports = userModel