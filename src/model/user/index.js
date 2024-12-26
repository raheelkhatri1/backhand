const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require:true,
    },
    gmail: {
        type: String,
        require:true,
        unique:true,
    },
    age: {
        type:Number,
        min:18,
    }
})

const User = mongoose.model("user",userSchema)

module.exports = User